/**
 * Simplified Chinese UI strings for the dialog / plugin-chrome surface
 * (setup-dialog, the three delete dialogs, abort-turn, side-thread, the
 * keyboard cheat sheet, plugin chrome and the host markdown fallback).
 *
 * Keyed by the English source text — the key IS the lookup key, so it must
 * stay byte-identical to the JSX/attribute source string. An absent key
 * renders the English source (safe fallback).
 *
 * `{{name}}` placeholders are interpolated by src/i18n/index.ts.
 */
export const zh: Record<string, string> = {
	// ── Shared actions / labels ──────────────────────────────────────────
	"Cancel": "取消",
	"Close": "关闭",
	"Delete": "删除",
	"Deleting…": "删除中…",
	"Retry": "重试",
	"Try again": "重试",
	"Saving…": "保存中…",

	// ── Setup dialog (first-run models + keys) ───────────────────────────
	"Set up your models": "设置你的模型",
	"Choose your AI provider and paste its API key. You’ll pick your models next.":
		"选择你的 AI 服务商并粘贴它的 API 密钥。接下来挑选模型。",
	"Pick a provider…": "选择服务商…",
	"Paste key…": "粘贴密钥…",
	"Save key": "保存密钥",
	"Subscriptions": "订阅",
	"Model catalog could not be loaded. Check the connection and retry.":
		"无法加载模型目录。请检查网络连接后重试。",
	"Loading models…": "正在加载模型…",
	"Pick the model for each tier. All three are required before chats can start.":
		"为每个层级挑选模型。三者都设置好之后才能开始对话。",
	"Strong": "强力",
	"Cheap": "经济",
	"Vision": "视觉",
	"Prober, teacher": "探究者、教师",
	"Researcher, demo builder, extractor, auditor": "研究员、示例构建者、抽取器、审核者",
	"Visual maker + PDF reader": "视觉生成 + PDF 阅读",
	"needed": "待选",
	"Pick a model…": "选择模型…",
	"No image-capable models. Add a provider key with access to a vision model.":
		"没有支持图片的模型。请添加可访问视觉模型的服务商密钥。",
	"Save models": "保存模型",
	"Save failed ({{status}})": "保存失败（{{status}}）",
	"Save failed. Check your connection and try again.": "保存失败。请检查网络连接后重试。",
	"Save failed: {{error}}": "保存失败：{{error}}",

	// ── Abort-turn guard (Esc) ───────────────────────────────────────────
	"Abort this turn?": "中止这一轮？",
	"The partial answer stays in the transcript.": "已生成的部分回答会保留在对话记录中。",
	"Abort": "中止",
	"Dismiss this question?": "忽略这个问题？",
	"Skipped — the teacher moves on without it.": "已跳过——老师会直接继续。",
	"Dismiss": "忽略",
	"Discard this problem?": "丢弃这道题？",
	"The problem is dropped — no solution is revealed.": "题目会被丢弃——不会显示解答。",
	"Discard": "丢弃",
	" The working turn stops too.": " 正在运行的回合也会停止。",

	// ── Delete node / folders dialog ─────────────────────────────────────
	"Delete node?": "删除节点？",
	"Delete {{count}} nodes?": "删除 {{count}} 个节点？",
	"Delete nodes and remove empty folders?": "删除节点并移除空文件夹？",
	"Remove empty folders?": "移除空文件夹？",
	", and {{count}} more": "，以及另外 {{count}} 个",
	"Empty folders:": "空文件夹：",
	"This permanently deletes the node — this cannot be undone.":
		"这会永久删除该节点——无法撤销。",
	"This permanently deletes all {{count}} nodes — this cannot be undone.":
		"这会永久删除全部 {{count}} 个节点——无法撤销。",
	"Only the named empty folders are removed. ": "只会移除所列的空文件夹。",
	"Sessions, imported source records, and non-empty folders are kept.":
		"会话、导入的来源记录以及非空文件夹都会保留。",
	"An extraction is running — try again when the activity dock drains.":
		"有抽取任务正在运行——等活动栏清空后再试。",
	"Delete failed ({{status}})": "删除失败（{{status}}）",
	"Delete failed — network error. Try again.": "删除失败——网络错误，请重试。",
	"Folder removal is unavailable.": "当前无法移除文件夹。",

	// ── Delete session / folder dialog ───────────────────────────────────
	"Delete session?": "删除会话？",
	"This permanently removes the session — its messages, background jobs, and extraction records. Everything it added to the graph stays unless you check below. This cannot be undone.":
		"这会永久移除该会话——包括它的消息、后台任务和抽取记录。除非勾选下方选项，它加入图谱的内容都会保留。无法撤销。",
	"Also remove its graph traces": "同时移除它的图谱痕迹",
	"This session’s topics, links, and events leave the graph too. Topics other sessions or imported notes also cover survive; topics only this session created are removed entirely.":
		"该会话的主题、关联和事件也会从图谱中移除。其他会话或导入笔记同样覆盖的主题会保留；仅由该会话创建的主题会被完全删除。",
	"Delete folder?": "删除文件夹？",
	"Delete folder": "删除文件夹",
	"session": "个会话",
	"sessions": "个会话",
	"subfolder": "个子文件夹",
	"subfolders": "个子文件夹",
	" and ": " 和 ",
	"the top level": "顶层",
	" {{n}} imported notes file inside moves to {{where}}.": " 其中 {{n}} 个导入笔记文件会移到{{where}}。",
	" {{n}} imported notes files inside move to {{where}}.": " 其中 {{n}} 个导入笔记文件会移到{{where}}。",
	"This permanently removes the folder and the {{what}} inside — the sessions’ messages, background jobs, and extraction records. Everything they added to the graph stays unless you check below.{{notes}} This cannot be undone.":
		"这会永久删除该文件夹以及其中的 {{what}}——会话的消息、后台任务与抽取记录会一并移除。除非勾选下方选项，否则它们加入知识图谱的内容会保留。{{notes}}此操作无法撤销。",
	"Also remove their graph traces": "同时移除它们的图谱痕迹",
	"These sessions’ topics, links, and events leave the graph too. Topics other sessions or imported notes also cover survive; topics only these sessions created are removed entirely.":
		"这些会话的主题、关联和事件也会从图谱中移除。其他会话或导入笔记同样覆盖的主题会保留；仅由这些会话创建的主题会被完全删除。",
	"This folder changed. Nothing was deleted.": "该文件夹已发生变化，未删除任何内容。",

	// ── Delete sources dialog ────────────────────────────────────────────
	"Delete selected sources and folders?": "删除所选的来源和文件夹？",
	"Removes these sources’ contributions to propositions and reasoning chains. Knowledge supported by other sources survives; knowledge supported only by these sources is removed.":
		"这会移除这些来源对命题和推理链的贡献。其他来源同样支持的知识会保留；仅由这些来源支持的知识会被移除。",
	"Imported source records are removed, but original files on disk are never changed. Selected folders are removed only when empty; folders needed by kept sessions remain.":
		"导入的来源记录会被移除，但磁盘上的原始文件永远不会被修改。所选文件夹仅在为空时才会被移除；被保留会话需要的文件夹会留下。",
	"Also delete the {{count}} selected session": "同时删除所选的 {{count}} 个会话",
	"Also delete the {{count}} selected sessions": "同时删除所选的 {{count}} 个会话",
	"Unchecked, conversations stay in their current folders and can be extracted again. Either way, their graph contributions and extraction coverage are cleared. Checking this also permanently deletes their messages and background jobs.":
		"不勾选时，对话会留在当前文件夹中，并且可以再次抽取。无论勾选与否，它们的图谱贡献和抽取覆盖都会被清除。勾选后还会永久删除它们的消息和后台任务。",

	// ── Side thread (Ask) ────────────────────────────────────────────────
	"Ask": "提问",
	"Shorten selection": "缩短所选内容",
	"Ask a side question…": "提个旁支问题…",
	"Ask about this passage…": "就这段内容提问…",
	"Ask a follow-up…": "继续追问…",
	"Show in the lesson": "在课程中查看",
	"Side question": "旁支提问",
	"Pin to side": "固定到侧栏",
	"Unpin to float": "取消固定并浮动",
	"Stopped": "已停止",
	"Retry answer": "重试回答",
	"Go to current step": "跳到当前步骤",
	"Stop side dictation": "停止旁支听写",
	"Dictate side question": "口述旁支问题",

	// ── Keyboard cheat sheet ─────────────────────────────────────────────
	"Keyboard shortcuts": "键盘快捷键",
	"Esc to close": "按 Esc 关闭",
	"Global": "全局",
	"Chat": "对话",
	"Graph view": "图谱视图",
	"Unbound": "未绑定",
	" · Inactive: {{reason}}": " · 未生效：{{reason}}",

	// ── Plugin chrome / views ────────────────────────────────────────────
	"Plugin": "插件",
	"Plugin settings": "插件设置",
	"Plugin is not installed.": "插件未安装。",
	"This plugin is disabled.": "该插件已禁用。",
	"This plugin view is not available.": "该插件视图不可用。",
	"Loading plugin…": "正在加载插件…",
	"Back to home": "返回主页",
	"More plugin actions": "更多插件操作",

	// ── Host markdown fallback ───────────────────────────────────────────
	"Image not available": "图片不可用",
};
