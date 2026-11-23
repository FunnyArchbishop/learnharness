/**
 * Simplified Chinese UI strings for the Providers / settings surfaces
 * (connections, subscriptions, models, plugins, prompt segments, themes),
 * keyed by the English source text — the same gettext-style lookup as ./zh.ts.
 * An absent key renders the English source, so this file can grow safely.
 */
export const zh: Record<string, string> = {
	// Shared connection actions
	"Connect": "连接",
	"Manage…": "管理…",
	"Disconnect": "断开连接",
	"Sign in again": "重新登录",
	"Enable background use": "启用后台使用",
	"Continue": "继续",
	"Cancel": "取消",
	"Close": "关闭",
	"Retry": "重试",
	"Dismiss": "忽略",
	"Preview": "预览",
	"Default": "默认",
	"Your version": "你的版本",
	"custom": "自定义",
	"default": "默认",
	"Loading…": "加载中…",
	"Loading plugins…": "正在加载插件…",
	"Saving…": "保存中…",
	"Checking…": "检查中…",

	// Subscription connections
	"Your prompts, tool results, and relevant session context are sent to {{provider}} to run the work you select. Credentials are stored locally in an owner-only plaintext file. Provider terms, data-use policies, and plan limits apply. This connection never falls back to an API key.":
		"你的提示词、工具结果和相关会话上下文会发送至 {{provider}}，用于执行你选择的工作。凭据以仅所有者可读的明文文件保存在本机。服务商的条款、数据使用政策和套餐限制同样适用。此连接绝不会回退到 API 密钥。",
	"Your prompts, tool results, and relevant session context are sent to {{provider}} to run the work you select. Credentials are stored on the machine running LearnHarness in an owner-only plaintext file. Provider terms, data-use policies, and plan limits apply. This connection never falls back to an API key.":
		"你的提示词、工具结果和相关会话上下文会发送至 {{provider}}，用于执行你选择的工作。凭据以仅所有者可读的明文文件保存在运行 LearnHarness 的机器上。服务商的条款、数据使用政策和套餐限制同样适用。此连接绝不会回退到 API 密钥。",
	"Disconnect {{provider}} from LearnHarness? This stops work using this connection and removes its saved credentials from this device. It does not cancel your subscription or revoke access at the provider. Saved model choices will remain unavailable until you reconnect or change them.":
		"要从 LearnHarness 断开 {{provider}} 吗？这会停止使用此连接的工作，并从本机移除其已保存的凭据。这不会取消你的订阅，也不会在服务商处撤销访问权限。已保存的模型选择在重新连接或更改之前将保持不可用。",
	"Disconnect {{provider}} from LearnHarness? This stops work using this connection and removes its saved credentials from the machine running LearnHarness. It does not cancel your subscription or revoke access at the provider. Saved model choices will remain unavailable until you reconnect or change them.":
		"要从 LearnHarness 断开 {{provider}} 吗？这会停止使用此连接的工作，并从运行 LearnHarness 的机器上移除其已保存的凭据。这不会取消你的订阅，也不会在服务商处撤销访问权限。已保存的模型选择在重新连接或更改之前将保持不可用。",
	"Pi's native Copilot sign-in may enable additional models whose policy is not yet configured. Models explicitly disabled by policy are not enabled. Organization restrictions still apply.":
		"Pi 内置的 Copilot 登录可能会启用一些策略尚未配置的模型。被策略明确禁用的模型不会被启用。组织限制仍然适用。",
	"Allow LearnHarness helper agents and automatic follow-ups to use this connection.":
		"允许 LearnHarness 的辅助智能体和自动追问使用此连接。",
	"The connection could not be changed. Try again.": "无法更改此连接，请重试。",
	"The desktop connection is unavailable. Retry when the app is ready.": "桌面连接不可用。应用就绪后请重试。",
	"Sign-in did not complete. Try connecting again.": "登录未完成，请重新连接。",
	"Disconnect {{provider}}?": "断开 {{provider}}？",
	"Allow background use": "允许后台使用",
	"Subscription sign-in requires the desktop app's private server connection. API-key connections remain available here.":
		"订阅登录需要桌面应用的私有服务端连接。API 密钥连接在此仍然可用。",
	"Device code:": "设备代码：",
	"Open browser": "打开浏览器",
	"The browser could not be opened. Try again.": "无法打开浏览器，请重试。",
	"Select…": "请选择…",

	// ChatGPT connection
	"LearnHarness stores your ChatGPT account details and credentials in an unencrypted local file on this device. When this connection is used, relevant conversation context, learning material, and tool results are sent directly to OpenAI. ChatGPT plan limits apply; any additional credits are authorized and managed in ChatGPT, not LearnHarness.":
		"LearnHarness 会在此设备上一个未加密的本地文件中保存你的 ChatGPT 账户信息和凭据。使用此连接时，相关的对话上下文、学习材料和工具结果会直接发送给 OpenAI。ChatGPT 的套餐限制同样适用；任何额外额度都在 ChatGPT 中授权和管理，而非 LearnHarness。",
	"LearnHarness stores your ChatGPT account details and credentials in an unencrypted local file on the machine running LearnHarness. When this connection is used, relevant conversation context, learning material, and tool results are sent directly to OpenAI. ChatGPT plan limits apply; any additional credits are authorized and managed in ChatGPT, not LearnHarness. Complete ChatGPT sign-in in a browser on that same machine.":
		"LearnHarness 会在运行 LearnHarness 的机器上一个未加密的本地文件中保存你的 ChatGPT 账户信息和凭据。使用此连接时，相关的对话上下文、学习材料和工具结果会直接发送给 OpenAI。ChatGPT 的套餐限制同样适用；任何额外额度都在 ChatGPT 中授权和管理，而非 LearnHarness。请在同一台机器的浏览器中完成 ChatGPT 登录。",
	"Background work counts toward your ChatGPT plan usage.": "后台任务会占用你 ChatGPT 套餐的用量。",
	"Allow background use for all ChatGPT accounts": "允许所有 ChatGPT 账户在后台使用",
	"Account disconnected locally. Remote revocation could not be confirmed.": "账户已在本地断开。无法确认远程撤销是否成功。",
	"Disconnect account?": "要断开账户吗？",
	"This removes the saved account and its credentials from this device.": "这会从本机移除已保存的账户及其凭据。",
	"This removes the saved account and its credentials from the machine running LearnHarness.": "这会从运行 LearnHarness 的机器上移除已保存的账户及其凭据。",
	"The ChatGPT connection could not be changed. Try again.": "无法更改 ChatGPT 连接，请重试。",
	"ChatGPT account": "ChatGPT 账户",
	"Add another account or workspace": "添加其他账户或工作区",
	"OpenAI privacy": "OpenAI 隐私政策",
	"Manage usage": "管理用量",
	"ChatGPT sign-in is available only in the desktop app. API-key connections remain available here.":
		"ChatGPT 登录仅在桌面应用中可用。API 密钥连接在此仍然可用。",
	"Waiting for browser sign-in…": "正在等待浏览器登录…",
	"Add accounts": "添加账户",
	"Disconnect account": "断开账户",
	"Continue with ChatGPT": "使用 ChatGPT 继续",

	// Claude Code status
	"Not found": "未找到",
	"Version {{version}} · meets minimum": "版本 {{version}} · 满足最低要求",
	"Version {{version}} · update required": "版本 {{version}} · 需要更新",
	"Version could not be checked": "无法检查版本",
	"Could not load Claude Code settings.": "无法加载 Claude Code 设置。",
	"Could not save Claude Code settings.": "无法保存 Claude Code 设置。",
	"Check again": "重新检查",
	"Install and authenticate Claude Code in your terminal, then select a Claude Code model here.":
		"请先在终端中安装并登录 Claude Code，然后在此选择一个 Claude Code 模型。",
	"LearnHarness starts it when needed—no background process required.":
		"LearnHarness 会在需要时启动它——无需常驻后台进程。",
	"Checks installation/version only—not authentication, model access, or quota. Claude Code controls billing.":
		"仅检查安装情况/版本——不检查登录状态、模型访问权限或配额。计费由 Claude Code 控制。",
	"Requires v{{version}}+.": "需要 v{{version}}+。",
	"Setup ↗": "安装说明 ↗",
	"Verify AI claims independently—they may be inaccurate, incomplete, misleading, or outdated.":
		"请独立核实 AI 的说法——它们可能不准确、不完整、具有误导性或已经过时。",

	// Model / provider / font menus
	"Unpriced": "未定价",
	"Search models…": "搜索模型…",
	"Loading models…": "正在加载模型…",
	"No models match.": "没有匹配的模型。",
	"Billing is determined by your Claude Code configuration; LearnHarness does not estimate it.":
		"计费由你的 Claude Code 配置决定；LearnHarness 不做估算。",
	"Subscription connection": "订阅连接",
	"USD per 1M tokens in/out": "每百万 token 输入/输出（美元）",
	"Price unavailable": "暂无价格",
	"CLI billing": "CLI 计费",
	"{{label}} (subscription)": "{{label}}（订阅）",
	"No thinking levels.": "没有可用的思考等级。",
	"Search providers…": "搜索服务商…",
	"No providers match.": "没有匹配的服务商。",
	"Search fonts…": "搜索字体…",
	"Loading fonts…": "正在加载字体…",
	"Use “{{family}}”": "使用“{{family}}”",

	// Plugins
	"Core plugins": "核心插件",
	"Community plugins": "社区插件",
	"Only enable plugins you trust. Plugins run trusted local code with broad file and network access; they are not sandboxed. A broken plugin may require restarting LearnHarness.":
		"只启用你信任的插件。插件运行的是受信任的本地代码，拥有广泛的文件与网络访问权限，且不在沙箱中运行。插件损坏时可能需要重启 LearnHarness。",
	"How to install a plugin": "如何安装插件",
	"Clone or copy the plugin into the directory below, using its plugin ID as the folder name.":
		"将插件克隆或复制到下方目录中，并以它的插件 ID 作为文件夹名称。",
	"For source projects, follow the repository’s dependency setup and run ": "源码项目请按仓库说明配置依赖，然后运行 ",
	". Prebuilt packages already contain ": "。预构建的包已包含 ",
	" and need no build.": "，无需构建。",
	"Refresh the list, then enable the plugin. New plugins are disabled by default.":
		"刷新列表，然后启用该插件。新插件默认处于禁用状态。",
	"Restart LearnHarness after changing loaded code. Preserve ": "更改已加载的代码后请重启 LearnHarness。更新时请保留 ",
	" beside ": " 与 ",
	" when updating.": " 保持同级。",
	"Build a plugin": "构建插件",
	"Download the authoring skill for your coding agent.": "为你的编程智能体下载创作技能包。",
	"Download authoring skill": "下载创作技能包",
	"Plugins directory": "插件目录",
	"No Core plugins available.": "没有可用的核心插件。",
	"No community plugins installed.": "尚未安装社区插件。",
	"Error": "错误",
	"Enabled": "已启用",
	"Disabled": "已禁用",
	"Loading plugin settings…": "正在加载插件设置…",
	"Plugin settings could not be loaded.": "无法加载插件设置。",
	"No settings available.": "没有可用的设置。",

	// Prompt segments
	"View default": "查看默认版本",
	"Add override": "添加覆盖",
	"Edit override": "编辑覆盖",
	"+ Add override": "+ 添加覆盖",
	"Override saved, but it couldn't be put in use. Retry activation below.":
		"覆盖已保存，但未能启用。请在下方重试启用。",
	"Couldn't save the override. Your edits are still here.": "无法保存覆盖，你的修改仍然保留。",
	"Settings is still saving. Try deleting the override again after the save finishes.":
		"设置仍在保存中，请等保存完成后再删除覆盖。",
	"Couldn't delete the override.": "无法删除覆盖。",
	"Discard unsaved changes?": "放弃未保存的更改？",
	"Keep editing": "继续编辑",
	"Discard changes": "放弃更改",
	"Deleting…": "正在删除…",
	"Delete override": "删除覆盖",
	"Retry activation": "重试启用",
	"Save and activate": "保存并启用",
	"In use:": "当前使用：",

	// Theme cards
	"Theme": "主题",
	"sets every color below": "设定下方所有颜色",
	"Export JSON": "导出 JSON",
	"Import JSON": "导入 JSON",
	"name · mode · colors": "名称 · 模式 · 颜色",
	"{{file}} is not valid JSON": "{{file}} 不是有效的 JSON",
	"import failed ({{status}})": "导入失败（{{status}}）",
	"import failed (network)": "导入失败（网络）",

	// Tooltips that pair with an English aria-label (visible native tooltips)
	"Refresh plugins": "刷新插件",
	"Use your override instead of the default": "使用你的覆盖版本代替默认版本",
};
