"use client";
/**
 * Interface-language switch (i18n wave, 2026-11-22). Lives in Settings →
 * General. Writes the `lh-locale` cookie through the locale provider, so the
 * choice survives reloads and applies to the next server render.
 */

import { LOCALES, LOCALE_LABELS, type Locale } from "@/src/i18n";
import { useLocaleControl, useT } from "@/components/i18n";
import { SettingsRow, SettingsSegmentedControl } from "./controls.tsx";

export function LanguageRow() {
	const { locale, setLocale } = useLocaleControl();
	const { t } = useT();
	const options = LOCALES.map(value => ({ value: value as Locale, label: LOCALE_LABELS[value] }));
	return (
		<SettingsRow label={t("Interface language")} hint={t("Applies to this browser")}>
			<SettingsSegmentedControl
				label={t("Interface language")}
				testidPrefix="locale"
				value={locale}
				options={options}
				onChange={setLocale}
			/>
		</SettingsRow>
	);
}
