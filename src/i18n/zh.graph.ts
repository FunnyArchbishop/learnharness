/**
 * Simplified Chinese UI strings for the graph / chains / activity surfaces,
 * keyed by the English source text (see ../index.ts).
 *
 * Owner of this slice: components/graph-view.tsx, graph-context-card.tsx,
 * graph-folder-filter.tsx, chain-table.tsx, extraction-coverage.tsx,
 * source-folder-tree.tsx, notes-import.tsx, activity-dock.tsx,
 * session-find.tsx.
 *
 * Keys are byte-identical to the source strings inside `t(...)` — they ARE
 * the lookup key, and an absent entry falls back to English.
 */
export const zh: Record<string, string> = {
	// ─── graph-view: pipeline cost pill + panel ────────────────────────────
	"Graph costs — click for details": "图谱开销 — 点击查看详情",
	"Graph pipeline costs": "图谱流水线开销",
	"Extraction": "抽取",
	"Audit": "审计",
	"{{n}} unpriced": "{{n}} 条未计价",
	"+{{n}} unpriced": "+{{n}} 条未计价",
	"· {{input}} in / {{output}} out": "· 输入 {{input}} / 输出 {{output}}",
	"now": "刚刚",

	// ─── graph-view: rendering settings panel ──────────────────────────────
	"Graph display settings": "图谱显示设置",
	"Node size": "节点大小",
	"Edge width": "边宽",
	"Arrowhead size": "箭头大小",
	"Label size": "标签大小",
	"Labels until zoom": "标签显示至缩放",
	"Regions": "区域",
	"Background colors": "背景颜色",
	"Dilation": "膨胀",
	"Blur": "模糊",
	"Edge alpha": "边透明度",
	"Bitmap resolution": "位图分辨率",
	"Cluster labels": "聚类标签",
	"Cluster label size": "聚类标签大小",
	"Physics": "力学",
	"Node repulsion": "节点斥力",
	"Edge attraction": "边吸引力",
	"Edge length": "边长",
	"Central pull": "中心引力",
	"Cluster pull": "聚类引力",
	"off": "关",
	"Friction": "摩擦",
	"Depth anchor": "深度锚点",
	"Off": "关",
	"Vertical (up)": "垂直（向上）",
	"Radial (outward)": "径向（向外）",
	"Depth strength": "深度强度",
	"Depth spacing": "深度间距",
	"Base ring radius": "基础环半径",

	// ─── graph-view: chrome row + empty state + detail card ────────────────
	"Search nodes": "搜索节点",
	"Search nodes…": "搜索节点…",
	"No matching nodes.": "没有匹配的节点。",
	"Every reasoning chain": "所有推理链",
	"Chains": "推理链",
	"Knowledge graph": "知识图谱",
	"Start a session to begin learning.": "开始一个会话，就可以开始学习了。",
	"Attach your material with the paperclip or drag and drop.": "用回形针附加资料，或直接拖进来。",
	"No sessions recorded.": "没有记录任何会话。",

	// ─── graph-context-card ────────────────────────────────────────────────
	"Graph context": "图谱上下文",
	"proposition": "个命题",
	"propositions": "个命题",
	"chain": "条推理链",
	"chains": "条推理链",

	// ─── graph-folder-filter ───────────────────────────────────────────────
	"Graph filtered by folder": "图谱已按文件夹筛选",
	"Show folders": "显示文件夹",
	"Show all": "全部显示",
	"No folders contain graph material yet.": "还没有文件夹包含图谱内容。",

	// ─── chain-table: counts, headers, rows ────────────────────────────────
	"{{n}} chain": "{{n}} 条推理链",
	"{{n}} chains": "{{n}} 条推理链",
	"{{n}} node": "{{n}} 个节点",
	"{{n}} nodes": "{{n}} 个节点",
	"{{n}} source": "{{n}} 个来源",
	"{{n}} sources": "{{n}} 个来源",
	"{{n}} folder": "{{n}} 个文件夹",
	"{{n}} folders": "{{n}} 个文件夹",
	"No matching chains.": "没有匹配的推理链。",
	"Name": "名称",
	"Props": "命题数",
	"Created": "创建时间",
	"unlabeled": "未命名",
	"notes": "笔记",
	"Clear": "清除",

	// ─── chain-table: source-organization transport errors ─────────────────
	"Could not read source organization.": "无法读取来源组织结构。",
	"Could not save source organization.": "无法保存来源组织结构。",
	"Could not delete sources.": "无法删除来源。",

	// ─── extraction-coverage ───────────────────────────────────────────────
	"extracting…": "抽取中…",
	"fully extracted": "已全部抽取",
	"{{tokens}} tok uncovered": "{{tokens}} tok 未覆盖",
	"{{n}} message unextracted": "{{n}} 条消息未抽取",
	"{{n}} messages unextracted": "{{n}} 条消息未抽取",
	"Running": "运行中",
	"Extract": "抽取",
	"How much of this session isn't mapped yet": "这个会话还有多少没有进图谱",
	"Extraction coverage": "抽取覆盖率",
	"Uncovered": "未覆盖",
	"Covered": "已覆盖",
	"{{tokens}} tokens": "{{tokens}} tok",
	"Messages": "消息数",
	"Chunk threshold": "分块阈值",
	"Last extraction": "上次抽取",
	"Status": "状态",

	// ─── source-folder-tree ────────────────────────────────────────────────
	"Folder name": "文件夹名称",
	"Rename": "重命名",

	// ─── notes-import ──────────────────────────────────────────────────────
	"Extract files into the graph": "把文件抽取进图谱",
	"Extracting…": "抽取中…",
	"Extract files…": "抽取文件…",
	"For lessons, attach material to a session instead.": "上课用的资料，请改为附加到会话里。",
	"Files": "文件",
	"Folder": "文件夹",
	"Invalid import response. Check the graph before retrying.": "导入响应无效。重试前请检查图谱。",

	// ─── activity-dock ─────────────────────────────────────────────────────
	"Background agents": "后台代理",
	"Total running cost (inferred)": "运行中总开销（估算）",
	"Plugin worker": "插件任务",
	"needs model setup": "需要配置模型",
	"needs a provider key": "需要服务商密钥",
	"Extraction — {{phase}}": "抽取 — {{phase}}",
	"running": "运行中",
	"Researcher": "研究员",
	"Demo builder": "演示构建者",
	"Figure maker": "图表制作者",
	"PDF reader": "PDF 阅读器",
	"Sub-agent": "子代理",
	"Abort failed — try again": "中止失败 — 请重试",
	"End this background process": "结束这个后台进程",
	"Cost": "开销",
	"Context": "上下文",
	"Model": "模型",
	"Steps": "步数",
	"Open session →": "打开会话 →",
	"Stopping…": "正在停止…",

	// ─── session-find ──────────────────────────────────────────────────────
	"Find in session…": "在会话中查找…",
	"Previous match (Shift+Enter)": "上一个匹配 (Shift+Enter)",
	"Next match (Enter)": "下一个匹配 (Enter)",
	"Close Find (Esc)": "关闭查找 (Esc)",
};
