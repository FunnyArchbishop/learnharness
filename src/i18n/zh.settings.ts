/**
 * Simplified Chinese strings for the Settings dialog surface, keyed by the
 * English source text (same gettext-style contract as ../zh.ts).
 *
 * Owner of this file: the settings-dialog localization slice. Every key here
 * is byte-identical to the string passed to `t(...)` in components/settings/
 * — an absent key falls back to the English source, never to a blank label.
 *
 * Keys already shipped by the base dictionary (Settings, Cancel, Save, Retry,
 * Graph, Search, New session, Practice, …) are intentionally NOT repeated.
 */
export const zh: Record<string, string> = {
	// ── settings-dialog.tsx ────────────────────────────────────────────────
	"Loading settings…": "正在加载设置…",
	"Loading plugins…": "正在加载插件…",
	"Settings could not be loaded — refresh to retry.": "无法加载设置 — 刷新页面后重试。",
	"Could not confirm saved settings. Your input has been kept.": "无法确认已保存的设置。你填写的内容已保留。",
	"Stored on this device": "保存在本设备",

	// ── cache-retention-menu.tsx ───────────────────────────────────────────
	"Cache: default": "缓存：默认",
	"Cache: not requested": "缓存：不请求",
	"Cache: short": "缓存：短期",
	"Cache: long": "缓存：长期",
	"Cache retention": "缓存保留",
	"Controls the cache-retention preference sent to Pi. Support and duration depend on the provider and model. This does not guarantee a cache hit.":
		"控制发送给 Pi 的缓存保留偏好。是否支持以及持续时间取决于服务商和模型。这不保证一定命中缓存。",
	"Pi default": "Pi 默认",
	"Leave the option unset. Pi’s normal behavior and environment override apply.":
		"不设置该选项，沿用 Pi 的默认行为与环境变量覆盖。",
	"Don’t request caching": "不请求缓存",
	"Pass Pi’s native none preference. Providers may still cache automatically.":
		"传入 Pi 原生的 none 偏好。服务商仍可能自动缓存。",
	"Short retention": "短期保留",
	"Pass Pi’s native short preference. The duration depends on the provider and model.":
		"传入 Pi 原生的 short 偏好。持续时间取决于服务商和模型。",
	"Long retention": "长期保留",
	"Pass Pi’s native long preference. Cache-write costs may be higher.":
		"传入 Pi 原生的 long 偏好。写入缓存的花费可能更高。",

	// ── update-settings.tsx ────────────────────────────────────────────────
	"Version {{version}}": "版本 {{version}}",
	"unknown": "未知",
	"Release notes": "发行说明",
	"Restart": "重启",
	"Check for updates": "检查更新",
	"Checking for updates…": "正在检查更新…",
	"Downloading version {{version}}…": "正在下载版本 {{version}}…",
	"Downloading an update…": "正在下载更新…",
	"No newer version was found at the last check.": "上次检查未发现更新的版本。",
	"Version {{version}} is ready. It will install when you quit the app.":
		"版本 {{version}} 已就绪，退出应用时会自动安装。",
	"An update is ready. It will install when you quit the app.":
		"更新已就绪，退出应用时会自动安装。",
	"Couldn’t check for updates. Try again later.": "无法检查更新。请稍后重试。",
	"Automatic updates": "自动更新",
	"Checking downloads available updates. Downloaded updates install when you quit the app.":
		"检查更新时会下载可用的更新。已下载的更新会在你退出应用时安装。",
	"Check at startup and every 24 hours. Turning this off does not stop updates already in progress or ready to install.":
		"启动时检查，之后每 24 小时检查一次。关闭此选项不会中断正在进行的更新，也不会取消已就绪待安装的更新。",

	// ── appearance-section.tsx ─────────────────────────────────────────────
	"Colors": "颜色",
	"· overrides on top of the theme, kept when you switch":
		"· 在主题之上覆盖，切换主题时保留",
	"Reset all": "全部重置",
	"Empty = {{value}}": "留空 = {{value}}",
	"Background": "背景",
	"Accent": "强调色",
	"Surface": "表面",
	"Bold": "粗体",
	"Border": "边框",
	"Italic": "斜体",
	"Text": "文字",
	"Inline code": "行内代码",
	"Muted text": "弱化文字",
	"Error": "错误",
	"Success": "成功",
	"Warning": "警告",
	"Focus rings, toggles, selection": "焦点环、开关、选中",
	"Cards, inputs, sidebar": "卡片、输入框、侧栏",
	"Typography": "排版",
	"Reading font": "阅读字体",
	"Choose from your installed fonts": "从已安装的字体中选择",
	"Common families — installed fonts could not be read":
		"常见字体 — 无法读取已安装字体",
	"Common families — your installed list needs the desktop app":
		"常见字体 — 需要桌面应用才能读取已安装字体列表",
	"Your installed fonts": "你已安装的字体",
	"Reading font size": "阅读字号",
	"Code ligatures": "代码连字",
	"Session names in serif": "会话名使用衬线体",
	"Compact session list": "紧凑会话列表",
	"Heading weight": "标题字重",
	"Transcript width": "对话宽度",
	"Adapt question layout": "自适应题目布局",
	"Full": "全宽",
	"Extraction": "抽取",
	"Off = the graph stops growing": "关闭 = 图谱停止增长",
	"Graph rendering": "图谱渲染",
	"Off = home shows the chains view": "关闭 = 首页显示链视图",
	"Extraction chunk budget": "抽取分块预算",

	// ── keyboard-section.tsx ───────────────────────────────────────────────
	"Global": "全局",
	"Chat": "对话",
	"Use a Mod/Alt chord or function key. Escape, Tab and Enter are reserved.":
		"请使用 Mod/Alt 组合键或功能键。Escape、Tab 和 Enter 已被保留。",
	"This plugin action is no longer available.": "此插件操作已不可用。",
	"Fixed — part of this screen": "固定 — 属于本界面的一部分",
	"Press keys…": "请按键…",
	"Rebind": "重新绑定",
	"Reset": "重置",
	"Clear": "清除",
	"Unbound": "未绑定",
	"Inactive: {{reason}}": "未生效：{{reason}}",
	"Stored on this device (lh:keymap) — overrides only.":
		"保存在本设备（lh:keymap）— 只存覆盖项。",
	"Reset all to defaults": "全部重置为默认",
	// Keyboard action names (src/core/keyboard.ts labels, rendered here)
	"Toggle dictation": "切换语音输入",
	"Open settings": "打开设置",
	"Model selector": "模型选择器",
	"Cycle thinking level": "循环切换思考等级",
	"Toggle sessions sidebar": "切换会话侧栏",
	"Search sessions": "搜索会话",
	"Graph view": "图谱视图",
	"Rename session": "重命名会话",
	"Toggle all your thinking": "切换全部思考内容",
	"Question · ask for a nudge (side thread)": "题目 · 请求提示（侧线程）",
	"Find": "查找",
	"Shortcut cheat sheet": "快捷键速查表",
	"Question · focus thinking ↔ rows": "题目 · 在思考与选项间切换焦点",
	"Question · next row": "题目 · 下一项",
	"Question · previous row": "题目 · 上一项",
	"Question · pick row": "题目 · 选中该项",
	"Question · submit": "题目 · 提交",

	// ── agent-section.tsx ──────────────────────────────────────────────────
	"Models": "模型",
	"Tools": "工具",
	"Context": "上下文",
	"System prompts": "系统提示词",
	"Strong": "强力档",
	"Cheap": "经济档",
	"Vision": "视觉档",
	"The main model for your sessions": "你所有会话使用的主模型",
	"The assistants that research, build demos, and grade your work":
		"负责调研、构建演示和批改作业的助手",
	"The assistants that draw and read PDFs": "负责绘图和读取 PDF 的助手",
	"Model catalog": "模型目录",
	"Refresh model catalog": "刷新模型目录",
	"Check Pi for new models": "检查 Pi 是否有新模型",
	"Refreshing…": "刷新中…",
	"Model catalog updated.": "模型目录已更新。",
	"No catalog changes found.": "未发现目录变更。",
	"No configured providers support catalog refresh.": "已配置的服务商都不支持刷新目录。",
	"Could not refresh. Your current catalog is still available.":
		"刷新失败。当前模型目录仍可使用。",
	"Model catalog could not be loaded. Check the connection and retry.":
		"无法加载模型目录。请检查连接后重试。",
	"Show advanced settings": "显示高级设置",
	"Hide advanced settings": "隐藏高级设置",
	"No models — add a provider key in Keys": "没有可用模型 — 请在服务商里添加密钥",
	"Runs every agent of this tier": "该档位的所有智能体都使用此模型",
	"Concurrent worker requests": "并发工作请求数",
	"Maximum simultaneous background-worker model requests. Direct conversations are not limited.":
		"后台工作智能体同时发起的模型请求上限。直接对话不受此限制。",
	"Enter a positive, safely representable whole number.":
		"请输入一个安全可表示的正整数。",
	"Graph tools": "图谱工具",
	"Lets the tutor consult your knowledge map between sessions":
		"让导师在会话之间查阅你的知识图谱",
	"Graph is disabled": "图谱已停用",
	"Quizzing": "测验方式",
	"How both tutors check your understanding": "两位导师检查你掌握情况的方式",
	"Multiple choice": "选择题",
	"Free recall": "自由回忆",
	"Tool: {{id}}": "工具：{{id}}",
	"File access": "文件访问",
	"Broad local source access, except protected locations":
		"可广泛访问本地资料，受保护位置除外",
	"Only listed folders and subfolders.": "仅限列出的文件夹及其子文件夹。",
	"Restricted: no folders allowed. Add a folder to enable access.":
		"已限制：不允许任何文件夹。添加一个文件夹以启用访问。",
	"Restrict to listed folders": "仅限列出的文件夹",
	"Absolute path or ~/folder": "绝对路径或 ~/文件夹",
	"Enter an absolute path or ~/folder.": "请输入绝对路径或 ~/文件夹。",
	"Add folder": "添加文件夹",
	"Search engine": "搜索引擎",
	"Automatic": "自动",
	"key": "有密钥",
	"no key": "无密钥",
	"Compaction threshold": "压缩阈值",
	"Include reasoning in token estimates (OpenAI Responses only)":
		"在 token 估算中包含推理内容（仅 OpenAI Responses）",
	"Use saved output-token usage to account for replayed reasoning on matching OpenAI Responses models. Off uses the original text-based estimate.":
		"对匹配的 OpenAI Responses 模型，用已保存的输出 token 用量计入重放的推理内容。关闭后使用原先基于文本的估算。",
	"Use the switch to choose between the default and your saved override.":
		"用开关在默认提示词与你保存的覆盖版本之间切换。",
	"Couldn't load prompt segments.": "无法加载提示词片段。",
	"Refreshing prompt segments…": "正在刷新提示词片段…",
	"Loading prompt segments…": "正在加载提示词片段…",
	"Couldn't switch prompt versions.": "无法切换提示词版本。",
	"Teacher": "教师",
	"Prober": "考官",
	"Shared": "共用",
	"{{list}} and {{last}}": "{{list}} 和 {{last}}",
	"Used by {{users}}": "由 {{users}} 使用",

	// ── keys-section.tsx ───────────────────────────────────────────────────
	"Loading keys…": "正在加载密钥…",
	"Model API keys": "模型 API 密钥",
	"Subscriptions": "订阅",
	"External CLI": "外部 CLI",
	"Dictation": "语音输入",
	"not set": "未设置",
	"env": "环境变量",
	"Paste key…": "粘贴密钥…",
	"key ↗": "密钥 ↗",
	"Add a provider": "添加服务商",
	"Save failed ({{status}})": "保存失败（{{status}}）",
	"Save failed. Check your connection.": "保存失败。请检查网络连接。",
	"Disconnect failed.": "断开失败。",
	"Disconnect failed. Check your connection.": "断开失败。请检查网络连接。",
	"Create a": "创建一个",
	"with the Member role or higher, then add it above.":
		"角色需为 Member 或更高，然后在上面添加。",
	"Custom endpoint": "自定义端点",
	"Unable to load custom configuration.": "无法加载自定义配置。",
	"Loading custom configuration…": "正在加载自定义配置…",
	"Unable to inspect effective key. Reload configuration and retry.":
		"无法检查生效的密钥。请重新加载配置后重试。",
	"{{count}} model": "{{count}} 个模型",
	"{{count}} models": "{{count}} 个模型",
	"keyless": "免密钥",
	"API key": "API 密钥",
	"API key missing": "缺少 API 密钥",
	"Base URL, e.g. http://localhost:11434/v1":
		"基础 URL，例如 http://localhost:11434/v1",
	"Model IDs, comma-separated — optional, needed when the endpoint has no /models list":
		"模型 ID，用逗号分隔 — 可选；端点没有 /models 列表时需要填写",
	"Authentication": "认证方式",
	"Keyless": "免密钥",
	"Environment supplies the effective key. Change the environment to replace it.":
		"生效密钥由环境变量提供。要更换请修改环境变量。",
	"Allow reuse of the effective existing key for this URL":
		"允许为此 URL 复用当前生效的密钥",
	"Leave blank to keep effective key": "留空以保留生效密钥",
	"Connect": "连接",
	"Connecting…": "连接中…",
	"Connect failed ({{status}})": "连接失败（{{status}}）",
	"Connect failed. Check your connection.": "连接失败。请检查网络连接。",
	"Disconnect": "断开",
	"Save limits": "保存限制",
	"Saving…": "保存中…",
	"Context:": "上下文：",
	"Output:": "输出：",
	"user pin": "用户指定",
	"reported {{value}}": "上报 {{value}}",
	"fallback {{value}}": "回退 {{value}}",
	"Reasoning effort: Use reported": "推理强度：使用上报值",
	"Reasoning effort: Supported": "推理强度：支持",
	"Reasoning effort: Not supported": "推理强度：不支持",
	"Reload configuration": "重新加载配置",
	"Budget pins do not resize backend context. Blank uses reported limits, then fallback (8192 context / 4096 output). Custom pricing is unknown.":
		"预算固定值不会改变后端的上下文大小。留空则使用上报的限制，再退回默认值（8192 上下文 / 4096 输出）。自定义定价未知。",
	"Reasoning support is a capability declaration. The effort picker’s Off may not disable a custom backend’s default thinking.":
		"推理支持只是能力声明。强度选择器的「关闭」可能无法禁用自定义后端的默认思考。",
};
