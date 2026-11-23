/**
 * Simplified Chinese strings for the artifact cards, worker result
 * presentation and submitted-image preview (owner request, 2026-11-22).
 *
 * Keys are the English source strings, byte-identical to the JSX/attribute
 * source in components/artifacts/*, components/submitted-images.tsx and
 * components/plugin-worker-result.tsx. This file is merged into the
 * aggregator (./zh.ts); a missing key falls back to the English source.
 */
export const zh: Record<string, string> = {
	// ─── job-card.tsx — research / PDF briefs ────────────────────────────
	"Research completed, but the result could not be displayed.": "研究已完成，但结果无法显示。",
	"Research brief": "研究简报",
	"PDF reading completed, but the result could not be displayed.": "PDF 阅读已完成，但结果无法显示。",
	"PDF brief": "PDF 简报",
	"Pages read: {{pages}}": "已读页面：{{pages}}",
	"Pages consulted: {{pages}}": "查阅页面：{{pages}}",
	"Sources": "来源",

	// ─── shared status word ─────────────────────────────────────────────
	"failed": "失败",

	// ─── tool-call-card.tsx ─────────────────────────────────────────────
	"Input": "输入",
	"Output": "输出",
	"Error": "错误",
	"running…": "运行中…",
	"[{{n}} image attached to the model]": "[{{n}} 张图片已附给模型]",
	"[{{n}} images attached to the model]": "[{{n}} 张图片已附给模型]",

	// ─── visual-card.tsx ────────────────────────────────────────────────
	"Figure completed, but the result could not be displayed.": "图示已完成，但结果无法显示。",
	"Figure": "图示",
	"The figure could not be drawn.": "无法绘制该图示。",
	"Invert colors": "反转颜色",
	"Download as SVG": "下载为 SVG",
	"Open fullscreen": "全屏打开",

	// ─── image-card.tsx ─────────────────────────────────────────────────
	"Image shown, but it could not be displayed.": "已展示图片，但无法显示。",
	"Image": "图片",
	"Download image": "下载图片",
	"Image snapshot could not be loaded.": "图片快照加载失败。",
	"Loading image…": "正在加载图片…",

	// ─── demo-card.tsx ──────────────────────────────────────────────────
	"Demo completed, but the result could not be displayed.": "演示已完成，但结果无法显示。",
	"Interactive demo": "交互式演示",
	"interactive demo": "交互式演示",
	"The demo could not be built.": "无法生成该演示。",
	"Download as HTML": "下载为 HTML",
	"This demo threw an error": "该演示出错了",
	"Send to teacher": "发给老师",
	"unknown error": "未知错误",

	// ─── dispatch-card.tsx ──────────────────────────────────────────────
	"Research agent": "研究智能体",
	"Demo agent": "演示智能体",
	"Figure agent": "图示智能体",
	"PDF reader": "PDF 阅读器",
	"Plugin worker": "插件工作进程",
	"needs model setup": "需要配置模型",
	"Set up models": "配置模型",
	"needs a provider key": "需要服务商密钥",
	"Add a key": "添加密钥",
	"finished": "完成",
	"Dispatched…": "已派发…",
	"· {{n}}s": "· {{n}} 秒",

	// ─── live-tool-card.tsx ─────────────────────────────────────────────
	"Input (streaming)": "输入（流式）",

	// ─── plugin-worker-card.tsx ─────────────────────────────────────────
	"Task details": "任务详情",
	"Result formatting failed: {{error}}": "结果格式化失败：{{error}}",

	// ─── probe-done-card.tsx ────────────────────────────────────────────
	"Probe assessment": "探查评估",
	"The prober retried: {{error}}": "探查智能体重试了一次：{{error}}",
	"The assessment was malformed — the prober retried with a corrected one.": "评估格式有误——探查智能体已用修正后的版本重试。",
	"Writing the assessment…": "正在撰写评估…",
	"{{n}} strand": "{{n}} 个知识线",
	"{{n}} strands": "{{n}} 个知识线",

	// ─── steer-card.tsx — sub-agent result delivery ─────────────────────
	"Background job recovery/delivery failed": "后台任务恢复/投递失败",
	"aborted by the learner": "已被学习者中止",
	"A sub-agent finished, but its result could not be displayed.": "子智能体已结束，但结果无法显示。",
	"reading complete": "阅读完成",
	"· read {{n}} page": "· 已读 {{n}} 页",
	"· read {{n}} pages": "· 已读 {{n}} 页",
	"Research": "研究",
	"complete": "完成",
	"· {{n}} sources": "· {{n}} 个来源",

	// ─── worker-result-presentation.tsx ─────────────────────────────────
	"view brief": "查看简报",
	"hide brief": "收起简报",

	// ─── live-tool activity labels (src/core/pending.ts) ────────────────
	"Reading a file…": "正在读取文件…",
	"Listing a directory…": "正在列出目录…",
	"Finding files…": "正在查找文件…",
	"Searching file contents…": "正在搜索文件内容…",
	"Dispatching research…": "正在派发研究…",
	"Building a demo…": "正在构建演示…",
	"Making a visual…": "正在生成图示…",
	"Reading a PDF…": "正在读取 PDF…",
	"Drawing up the plan…": "正在制定计划…",
	"Concluding the assessment…": "正在总结评估…",
	"Writing a question…": "正在出题…",
	"Working…": "处理中…",

	// ─── plugin-worker-result.tsx status labels ─────────────────────────
	"succeeded": "成功",
	"cancelled": "已取消",
	"interrupted": "已中断",
	"{{label}}: {{status}}": "{{label}}：{{status}}",
};
