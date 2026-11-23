/**
 * Simplified Chinese copy for the app shell (sidebar, top bar, draft view,
 * banners, dialogs). Same contract as ./zh.ts: the English source string is
 * the key and must stay byte-identical to the JSX/attribute source.
 *
 * Keys already present in ./zh.ts (Settings, Sessions, Teaching, Practice,
 * Close, Delete, Dismiss, …) are repeated here so this file stands alone for
 * the aggregator; identical values mean the merge order cannot matter.
 */
export const zh: Record<string, string> = {
	// Sidebar chrome
	"Open sidebar": "打开侧边栏",
	"Close sidebar": "关闭侧边栏",
	"Home": "主页",
	"Settings": "设置",
	"Search sessions": "搜索会话",
	"Search…": "搜索…",
	"Add folder": "添加文件夹",
	"Sessions": "会话",

	// Session creation entries + the kind filter
	"Teaching": "教学",
	"Practice": "练习",
	"All": "全部",
	"create a new teaching session": "新建教学会话",
	"create a new practice session": "新建练习会话",

	// Session rows: relative time and the state line
	"just now": "刚刚",
	"{{n}}m ago": "{{n}} 分钟前",
	"{{n}}h ago": "{{n}} 小时前",
	"{{n}}d ago": "{{n}} 天前",
	"Compacting context · {{ago}}": "正在压缩上下文 · {{ago}}",
	"Waiting for input · {{ago}}": "等待输入 · {{ago}}",
	"Problem waiting · {{ago}}": "等待题目 · {{ago}}",
	"Working…": "处理中…",

	// Sidebar list states + folder management
	"Loading…": "加载中…",
	"No sessions match.": "没有匹配的会话。",
	"No sessions yet.": "还没有会话。",
	"Dismiss": "忽略",
	"Rename": "重命名",
	"New subfolder": "新建子文件夹",
	"Delete": "删除",
	"Delete…": "删除…",
	"Export as Markdown…": "导出为 Markdown…",
	"Could not delete the folder ({{status}}).": "无法删除该文件夹（{{status}}）。",
	"Could not delete the folder — network error.": "无法删除该文件夹——网络错误。",

	// Minimal home: the quiet knowledge summary
	"{{n}} proposition": "{{n}} 条命题",
	"{{n}} propositions": "{{n}} 条命题",
	"{{n}} chain": "{{n}} 条推理链",
	"{{n}} chains": "{{n}} 条推理链",
	"{{n}} teaching session": "{{n}} 个教学会话",
	"{{n}} teaching sessions": "{{n}} 个教学会话",
	"{{n}} practice session": "{{n}} 个练习会话",
	"{{n}} practice sessions": "{{n}} 个练习会话",
	"{{n}} imported note": "{{n}} 条导入笔记",
	"{{n}} imported notes": "{{n}} 条导入笔记",
	"Start a session to begin learning.": "开始一个会话，就可以学起来了。",
	"Attach your material with the paperclip or drag and drop.": "用回形针附加资料，或直接拖进来。",
	"Chains": "推理链",
	"Every reasoning chain": "所有推理链",

	// The sessionless draft view (/chat/new)
	"New session": "新建会话",
	"New practice session": "新建练习会话",
	"Pick nodes from your knowledge graph, describe what you want to practice, or bring your own problem.": "从知识图谱里挑选节点、说说你想练什么，也可以带上自己的题目。",
	"The teacher will open by probing what you already know.": "老师会先探一探你已经掌握了什么。",
	"What do you want to learn?": "你想学什么？",
	"What do you want to practice?": "你想练什么？",
	"Set up your models": "配置模型",

	// Auto-update banner
	"LearnHarness {{version}} is ready": "LearnHarness {{version}} 已就绪",
	"update": "更新",
	"— restart to finish installing.": "——重启即可完成安装。",
	"Restart": "重启",

	// Shared dialog chrome
	"Close": "关闭",

	// Session overlay (mermaid / figure focus)
	"Image": "图片",
	"Diagram": "图表",
	"from this lesson": "来自本节课",
	"Drag to pan · scroll to zoom": "拖动平移 · 滚轮缩放",
	"Rendering diagram…": "正在渲染图表…",
	"Zoom out": "缩小",
	"Zoom in": "放大",
	"Fit image to view": "缩放至整幅图片",
	"Fit diagram to view": "缩放至整幅图表",
};
