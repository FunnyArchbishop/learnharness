/**
 * Simplified Chinese UI strings for the chat surface (session transcript,
 * composer dock, phase/compaction dividers), keyed by the English source
 * text — same gettext-style contract as ./zh.ts.
 *
 * Scope: components/chat.tsx, components/phase-divider.tsx,
 * components/compaction-divider.tsx. Keep keys byte-identical to the JSX /
 * attribute source string; an absent key falls back to English.
 */
export const zh: Record<string, string> = {
	// ── Transcript status lines ──
	"EVALUATING…": "评估中…",
	"THINKING…": "思考中…",
	"COMPACTING CONTEXT…": "正在压缩上下文…",
	"Retrying…": "重试中…",
	"Something went wrong: {{message}}": "出了点问题：{{message}}",
	"Retry": "重试",

	// ── Session header / top bar ──
	"Rename session": "重命名会话",
	"Rename this session": "重命名此会话",
	"Plan": "计划",
	"Practice": "练习",
	"Open the full plan": "打开完整计划",

	// ── Empty state ──
	"New session": "新建会话",
	"The teacher will open by probing what you already know.": "老师会先探查你已经掌握的内容，然后开始。",

	// ── Transcript rows ──
	"You": "你",
	"Next problem": "下一题",
	"Answer or discard the remaining question first.": "请先回答或放弃当前的问题。",

	// ── Side conversation entry ──
	"Open side conversation": "打开侧边对话",
	"Ask a side question": "提出侧边问题",

	// ── Composer / dock ──
	"Set up your models": "设置你的模型",
	"Ask anything, or press Enter for the next one.": "想问什么都可以，或按 Enter 进入下一题。",
	"Could not sync the saved session.": "无法同步已保存的会话。",
	"Retry syncing": "重新同步",
	"Preparing question…": "正在准备问题…",
	"Question unavailable": "问题不可用",
	"Question dismissed": "问题已忽略",
	"Dismiss question": "忽略问题",

	// ── Thinking rows (ai-elements/reasoning, thinking-block defaults) ──
	"Thinking...": "思考中…",
	"AGENT’S THINKING": "智能体的思考",

	// ── Submission failures (thrown as preparation errors) ──
	"Thinking text or images are required. Your input has been kept.":
		"需要填写思考内容或图片。你的输入已保留。",
	"Message text or images are required. Your input has been kept.":
		"需要填写消息内容或图片。你的输入已保留。",
	"This session view is no longer active.": "此会话视图已不再活跃。",

	// ── Phase divider / chip ──
	"Probing": "探查",
	"Planning": "规划",
	"Teaching": "教学",
	"Plan · {{n}} node": "计划 · {{n}} 个节点",
	"Plan · {{n}} nodes": "计划 · {{n}} 个节点",

	// ── Compaction dividers ──
	"Context compacted": "上下文已压缩",
	"History compacted": "历史已压缩",
	" · {{k}}k tok": " · {{k}}k 词元",
};
