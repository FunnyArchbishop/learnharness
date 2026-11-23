/**
 * Curated Chinese (CJK) interface font stacks (owner request, 2026-11-22).
 *
 * The Latin faces that carry the interface (JetBrains Mono for chrome,
 * Source Sans 3 for prose) have no Chinese glyphs, so every Chinese
 * character currently falls through to whatever the system picks. These
 * stacks put the nicest faces first — "auto" prefers what current macOS /
 * Windows / HarmonyOS / Android systems actually ship — and the setting
 * under Settings → Appearance lets the learner pin one family instead.
 *
 * Pure data + helpers; safe to import from the browser shell.
 */

export const CJK_FONT_IDS = ["auto", "noto", "pingfang", "harmonyos", "misans", "source-han", "yahei", "dengxian", "system"] as const;

export type CjkFontId = (typeof CJK_FONT_IDS)[number];

/** Menu labels; font families stay in their own names (brand names, not
 *  translated copy) with a Chinese descriptor for recognition. */
export const CJK_FONT_LABELS: Record<CjkFontId, string> = {
	auto: "自动（推荐）",
	noto: "Noto Sans SC（思源黑体）",
	pingfang: "苹方 PingFang SC",
	harmonyos: "HarmonyOS Sans SC",
	misans: "MiSans",
	"source-han": "思源黑体 Source Han Sans",
	yahei: "微软雅黑 Microsoft YaHei",
	dengxian: "等线 DengXian",
	system: "系统默认 system-ui",
};

/** The resolved font-family stacks (each ends in a generic fallback). */
export const CJK_FONT_STACKS: Record<CjkFontId, string> = {
	auto: `"Noto Sans SC", "PingFang SC", "HarmonyOS Sans SC", "MiSans", "Source Han Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", "DengXian", "Hiragino Sans GB", sans-serif`,
	noto: `"Noto Sans SC", "Noto Sans CJK SC", "Source Han Sans SC", "Microsoft YaHei", sans-serif`,
	pingfang: `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`,
	harmonyos: `"HarmonyOS Sans SC", "HarmonyOS Sans", "Microsoft YaHei", sans-serif`,
	misans: `"MiSans", "MiSans VF", "Microsoft YaHei", sans-serif`,
	"source-han": `"Source Han Sans SC", "Source Han Sans CN", "Noto Sans SC", "Microsoft YaHei", sans-serif`,
	yahei: `"Microsoft YaHei UI", "Microsoft YaHei", sans-serif`,
	dengxian: `"DengXian", "DengXian Light", "Microsoft YaHei", sans-serif`,
	system: `system-ui, -apple-system, "Segoe UI", sans-serif`,
};

export const DEFAULT_CJK_FONT: CjkFontId = "auto";

export function isCjkFontId(value: unknown): value is CjkFontId {
	return typeof value === "string" && (CJK_FONT_IDS as readonly string[]).includes(value);
}

/** The font-family stack for an id; absent/unknown falls back to "auto". */
export function cjkFontStack(id: CjkFontId | null | undefined): string {
	return (id && CJK_FONT_STACKS[id]) || CJK_FONT_STACKS.auto;
}
