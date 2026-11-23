"use client";
/**
 * Locale context for client components (owner request, 2026-11-22).
 *
 * The root layout reads the `lh-locale` cookie server-side and passes the
 * resolved locale in, so the first frame already renders the right
 * language. `setLocale` writes the cookie and refreshes so server-rendered
 * chrome follows too.
 *
 * Components rendered without a provider (unit tests) fall back to the
 * default locale — English under NODE_ENV=test, so existing assertions that
 * quote source strings keep working.
 */

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
	createTranslator,
	defaultLocale,
	LOCALE_COOKIE,
	resolveLocale,
	zh,
	type Locale,
	type Translator,
} from "@/src/i18n";

type LocaleContextValue = {
	locale: Locale;
	t: Translator;
	setLocale: (next: Locale) => void;
};

const FALLBACK_LOCALE = defaultLocale();

const LocaleContext = createContext<LocaleContextValue>({
	locale: FALLBACK_LOCALE,
	t: createTranslator(FALLBACK_LOCALE, zh),
	setLocale: () => {},
});

export function LocaleProvider({
	initialLocale,
	children,
}: {
	initialLocale?: Locale;
	children: ReactNode;
}) {
	const router = useRouter();
	const [locale, setLocaleState] = useState<Locale>(() => resolveLocale(initialLocale));

	const setLocale = useCallback(
		(next: Locale) => {
			setLocaleState(next);
			try {
				document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
			} catch {
				/* Non-browser render: the in-memory switch still applies. */
			}
			router.refresh();
		},
		[router],
	);

	const value = useMemo<LocaleContextValue>(
		() => ({ locale, t: createTranslator(locale, zh), setLocale }),
		[locale, setLocale],
	);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

/** The active translator: `const { t } = useT()`. */
export function useT(): { locale: Locale; t: Translator } {
	const { locale, t } = useContext(LocaleContext);
	return { locale, t };
}

/** Locale + setter for the language switch control. */
export function useLocaleControl(): LocaleContextValue {
	return useContext(LocaleContext);
}
