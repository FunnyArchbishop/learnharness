/**
 * Simplified Chinese UI strings for the question / practice docks and their
 * transcript cards (components/question-dock.tsx and siblings).
 *
 * Keys are the byte-identical English source strings from the components;
 * an absent key falls back to the English source.
 */
export const zh: Record<string, string> = {
	// Question card labels (questionCardLabel)
	"Probe": "探查",
	"Recall": "回忆",
	"Prediction": "预测",
	"Check": "检查",
	"Explain": "解释",
	"Question": "问题",
	" · select all that apply": " · 选择所有适用项",

	// Question dock
	"Check your understanding": "检查理解",
	"Open": "打开",
	"Answer": "作答",
	"Confidence": "把握度",
	"The probability your selected answer is correct — 50% is a coin flip. Adjust with ←/→.":
		"你所选答案正确的概率 — 50% 相当于抛硬币。用 ←/→ 调整。",
	"I don't know": "不知道",
	"Type your own answer…": "输入你自己的答案…",
	"Your answer": "你的答案",
	"YOUR THINKING": "你的思考",
	"Type your answer…": "输入你的答案…",
	"Why this answer? Whatever comes to mind.": "为什么是这个答案？想到什么就写什么。",
	"compacting session…": "正在压缩会话…",
	"↵ submits · ⇧↵ newline": "↵ 提交 · ⇧↵ 换行",
	"Submit answer": "提交答案",

	// Plugin question dock
	"Preparing question…": "正在准备问题…",
	"Question unavailable": "问题不可用",
	"Your thinking": "你的思考",
	"Dismiss question": "忽略问题",

	// Practice dock
	"Problem": "题目",
	"Work here, think out loud.": "在这里演算，把思路说出来。",
	"Submit": "提交",
	"Submit thinking": "提交思考",

	// Practice cards
	"Solved": "已解出",
	"Solved with hints": "借助提示解出",
	"Moved on": "已继续",
	"Surrendered": "放弃",
	"Dismissed": "已忽略",
	"Problem dismissed.": "题目已忽略。",
	"Concluded": "已收尾",
	"Model solution": "参考解答",
	"Metadata": "元数据",
	"Mode": "模式",
	"Targets": "目标",
	"Outcome": "结果",
	"Hint rung": "提示层级",
	"Miss class": "错误类型",
	"Retest": "复测",
	"untagged": "未标记",
	"none": "无",
	"yes": "是",
	"no": "否",

	// Answered card
	"skipped": "已跳过",
	"didn't know": "不知道",
	"correct": "正确",
	"incorrect": "错误",
	"Answered “I don't know”.": "已回答「不知道」。",
	"Hide why": "隐藏原因",
	"Why": "原因",
	"Why: ": "原因：",
	"The answer: ": "答案：",

	// Plugin problem dock / submitted record
	"Preparing problem…": "正在准备题目…",
	"Problem unavailable": "题目不可用",

	// Malformed question
	"This question could not be displayed.": "这个问题无法显示。",
	" Retry it or send a message to continue.": "重试一次，或者发一条消息继续。",
	"Requests a replacement from the model.": "向模型请求一个替代问题。",
	"Retry question": "重试问题",
};
