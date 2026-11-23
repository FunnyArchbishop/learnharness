/**
 * Simplified Chinese UI strings, keyed by the English source text.
 *
 * The dictionary is assembled from per-area slices so parallel work can
 * touch disjoint files; later slices win on duplicate keys (values are
 * aligned across slices anyway). An absent key renders the English source.
 */
import { zh as zhArtifacts } from "./zh.artifacts";
import { zh as zhChat } from "./zh.chat";
import { zh as zhComposer } from "./zh.composer";
import { zh as zhDialogs } from "./zh.dialogs";
import { zh as zhDocks } from "./zh.docks";
import { zh as zhGraph } from "./zh.graph";
import { zh as zhPlan } from "./zh.plan";
import { zh as zhProviders } from "./zh.providers";
import { zh as zhSettings } from "./zh.settings";
import { zh as zhShell } from "./zh.shell";

const common: Record<string, string> = {
	// Navigation / chrome
	"Settings": "设置",
	"Sessions": "会话",
	"New session": "新建会话",
	"Teaching": "教学",
	"Practice": "练习",
	"Help": "帮助",
	"Dismiss": "忽略",
	"Search…": "搜索…",

	// Settings sections
	"Providers": "服务商",
	"Agent": "智能体",
	"Appearance": "外观",
	"Graph": "图谱",
	"Keyboard": "快捷键",
	"General": "通用",
	"Core plugins": "核心插件",
	"Community plugins": "社区插件",
	"Interface language": "界面语言",
	"Applies to this browser": "仅对当前浏览器生效",

	// Home composer
	"What do you want to learn?": "你想学什么？",
	"What do you want to practice?": "你想练什么？",

	// Composer
	"Send": "发送",
	"Stop": "停止",
	"Ask anything…": "问点什么…",
	"Ask anything...": "问点什么…",

	// Common actions
	"Continue": "继续",
	"Cancel": "取消",
	"Save": "保存",
	"Close": "关闭",
	"Delete": "删除",
	"Retry": "重试",
	"Next": "下一步",
	"Back": "返回",
	"Skip": "跳过",
	"Done": "完成",
	"Add": "添加",
	"Remove": "移除",
	"Edit": "编辑",
	"Copy": "复制",
	"Search": "搜索",
	"Loading…": "加载中…",
	"Loading...": "加载中…",
};

export const zh: Record<string, string> = {
	...common,
	...zhShell,
	...zhComposer,
	...zhChat,
	...zhDocks,
	...zhPlan,
	...zhGraph,
	...zhSettings,
	...zhProviders,
	...zhDialogs,
	...zhArtifacts,
};
