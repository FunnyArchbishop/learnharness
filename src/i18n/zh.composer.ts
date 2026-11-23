/**
 * Simplified Chinese strings for the composer cluster (i18n wave, 2026-11-22):
 * the chat composer, its attach/path chips and drop zone, the dictation
 * controls, the model picker, the stats bar and the zero-keys pill.
 *
 * Keys are the English source strings, byte-identical to the JSX/attribute
 * source — they are the lookup key. A missing entry falls back to English.
 */
export const zh: Record<string, string> = {
	// Composer
	"Ask, answer, or steer the lesson…": "提问、回答，或引导这节课…",
	"Next problem": "下一题",
	"1 node selected": "已选 1 个节点",
	"{{count}} nodes selected": "已选 {{count}} 个节点",
	"Pick nodes": "选择节点",
	"Clear": "清除",

	// Attach files / folder + drop zone
	"Attach files or a folder": "添加文件或文件夹",
	"Files": "文件",
	"Folder": "文件夹",
	"Could not choose a folder. Try again.": "无法选择文件夹，请重试。",
	"Local file paths can only be attached in the desktop app. You can paste a full path instead.": "本地文件路径只能在桌面应用中添加。你也可以改为粘贴完整路径。",
	"Drop to attach file paths": "松开以添加文件路径",
	"No local file paths were available. Drop existing files or folders from your computer.": "没有可用的本地文件路径。请从电脑上拖入已有的文件或文件夹。",
	"Open a chat to attach file paths.": "请先打开一个会话，再添加文件路径。",
	"Some dropped items had no available file path.": "部分拖入的项目没有可用的文件路径。",

	// Stats bar
	"Session stats": "会话统计",
	"Context (last call)": "上下文（上次调用）",
	"Window reported by Claude Code; may be lower for auto-compaction.": "窗口大小由 Claude Code 报告；自动压缩后可能更低。",
	"Usage": "用量",
	"Total cost": "总费用",
	"Cache hit rate": "缓存命中率",
	"Manage ChatGPT usage": "管理 ChatGPT 用量",
	"Unpriced turns": "未计价轮次",
	"Turns": "轮次",
	"{{count}} steps": "{{count}} 步",

	// Dictation
	"Dictate": "语音输入",
	"Stop": "停止",
	"Stop dictation (Esc)": "停止语音输入（Esc）",
	"Dictation needs a Deepgram key": "语音输入需要 Deepgram 密钥",
	"Dictation is active elsewhere": "语音输入正在其他地方进行",
	"Dictation transcript could not be applied": "无法写入语音转写内容",
	"Dictation transcript delivery canceled": "语音转写投递已取消",
	"Dictation language unavailable": "语音输入语言不可用",
	"Deepgram reconnect failed": "Deepgram 重新连接失败",
	"Deepgram connection lost ({{code}})": "Deepgram 连接中断（{{code}}）",
	"Microphone permission denied": "麦克风权限被拒绝",
	"mic unavailable": "麦克风不可用",
	"token unavailable": "令牌不可用",

	// Dictation language setting
	"Language": "语言",
	"Dictation language: {{language}}": "语音输入语言：{{language}}",
	"Search languages…": "搜索语言…",
	"No languages match.": "没有匹配的语言。",

	// Model picker
	"Model selector": "模型选择器",
	"Thinking": "思考",
	"No models — add a provider key in Keys": "暂无模型 — 请在「密钥」中添加服务商密钥",
	"This session's model": "本会话使用的模型",
	"Strong tier — the default for new sessions": "强档模型 — 新会话的默认选择",
	"{{model}} has no thinking levels.": "{{model}} 没有思考等级。",
	"Pick a model first.": "请先选择模型。",
	"Loading…": "加载中…",
	"Levels this model actually supports": "此模型实际支持的等级",
	"settings rejected ({{status}})": "设置被拒绝（{{status}}）",
	"Could not reach the server — try again.": "无法连接到服务器 — 请重试。",

	// Zero-keys pill
	"Add a provider key": "添加服务商密钥",
};
