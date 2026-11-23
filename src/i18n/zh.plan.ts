/**
 * Simplified Chinese UI strings for the plan / thinking / citation / markdown
 * block surface, keyed by the English source text.
 *
 * Keys must stay byte-identical to the JSX/attribute source string — they are
 * the lookup key, and an absent key renders the English source (safe
 * fallback). A few generic entries (Close, Cancel, Save, Retry) also exist in
 * ./zh.ts; repeating them here keeps this slice self-contained and the values
 * agree.
 */
export const zh: Record<string, string> = {
	// Plan block + plan popup (components/plan-block.tsx)
	"Open the full plan": "打开完整计划",
	"The plan": "计划",
	"live — statuses derive from your check outcomes": "实时 —— 状态由你的检查结果推导",
	"Drag to pan · scroll to zoom": "拖动平移 · 滚轮缩放",
	"Zoom out": "缩小",
	"Fit plan to screen": "计划适配屏幕",
	"Zoom in": "放大",
	"No plan in this session yet.": "本次会话还没有计划。",

	// Thinking rows (components/thinking-block.tsx)
	"YOUR THINKING": "你的思考",

	// Reading-thinking field (components/reading-thinking.tsx)
	"Thinking while reading": "阅读时思考",
	"Whatever comes to mind as you read.": "读的时候想到什么，就写什么。",

	// Citations (components/citation-chip.tsx, citation-comment-editor.tsx)
	"Go to source": "跳转到原文",
	"Add an optional comment...": "添加批注（可选）…",
	"Comments can contain up to 8,000 characters.": "批注最多可包含 8,000 个字符。",
	"Shorten comment": "缩短批注",

	// Markdown blocks + mermaid fallback (components/md-blocks.tsx, mermaid-error.tsx)
	"Open full-screen": "全屏打开",
	"Diagram failed to render": "图示渲染失败",
	"Show diagram source": "显示图示源码",

	// Shared action words
	"Close": "关闭",
	"Cancel": "取消",
	"Save": "保存",
	"Retry": "重试",
};
