/**
 * Minimal UI localization layer (owner request, 2026-11-22): the interface
 * defaults to Simplified Chinese and can switch back to English.
 *
 * The English source string IS the key (gettext style): components call
 * `t("Send")`, the zh dictionary maps it, and a missing entry falls back to
 * the English source rather than rendering an empty label. Tests keep their
 * existing English assertions because NODE_ENV=test resolves the default
 * locale to English.
 */

export type Locale = "zh" | "en";

export const LOCALES: readonly Locale[] = ["zh", "en"] as const;

/** Cookie holding the learner's interface language; read server-side by the
 *  root layout so the first frame is already in the right language. */
export const LOCALE_COOKIE = "lh-locale";

export const LOCALE_LABELS: Record<Locale, string> = {
	zh: "中文",
	en: "English",
};

export function isLocale(value: unknown): value is Locale {
	return value === "zh" || value === "en";
}

/** Interface language for a fresh render: tests stay English (their
 *  assertions quote the source strings), everything else defaults to zh. */
export function defaultLocale(): Locale {
	return process.env.NODE_ENV === "test" ? "en" : "zh";
}

/** Cookie value (or anything) → a supported locale. */
export function resolveLocale(value: unknown): Locale {
	return isLocale(value) ? value : defaultLocale();
}

/** Values accepted for `{{name}}` interpolation; null/undefined render empty. */
export type TranslateVars = Record<string, string | number | null | undefined>;

export type Translator = (source: string, vars?: TranslateVars) => string;

/** `{{name}}` interpolation; unknown placeholders are left untouched. */
export function interpolate(text: string, vars?: TranslateVars): string {
	if (!vars) return text;
	return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
		if (!Object.prototype.hasOwnProperty.call(vars, key)) return match;
		const value = vars[key];
		return value === null || value === undefined ? "" : String(value);
	});
}

/** zh dictionary keyed by the English source string (see ./zh.ts). */
export function createTranslator(locale: Locale, dictionary: Record<string, string>): Translator {
	if (locale === "en") return (source, vars) => interpolate(source, vars);
	return (source, vars) => interpolate(dictionary[source] ?? source, vars);
}

/** The barrel re-exports the dictionary so the browser shell imports ONE
 *  path (`@/src/i18n`) — the eslint zone allows this entry only. */
export { zh } from "./zh";
