<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/lh_banner_dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/lh_banner_light.png">
    <img src="docs/assets/lh_banner_light.png" alt="LearnHarness" width="640">
  </picture>
</p>

<p align="center"><strong>一个用于学习的智能体运行环境。</strong></p>

<p align="center">
  <a href="README.md">English</a> · <strong>简体中文</strong>
</p>

<p align="center"><sub>本文为 README 的中文翻译；<code>docs/</code> 下的完整文档目前仍为英文。</sub></p>

<p align="center">
  <a href="https://learnharness.ai">下载</a> ·
  <a href="#工作原理">工作原理</a> ·
  <a href="docs/README.md">文档</a> ·
  <a href="https://github.com/amosblomqvist/learnharness/issues">问题反馈</a> ·
  <a href="https://discord.gg/5tCHHQEB2e">Discord</a>
</p>

LearnHarness 用 AI 智能体，把你「当前的理解」到「目标的掌握」之间的差距规划成课程并逐步讲授。它会细致地刻画你理解了什么、以怎样的方式推理，并且随着学习过程不断更新这张图景。

它不会只丢给你一段解释，而是根据你的回答和思考过程判断你下一步真正需要什么。教学每次只推进一个推理台阶，逐步搭建理解；练习则让知识变得可用。一张持久的知识图谱会跨越多次会话，把这一切串联起来。

![LearnHarness 教学会话](docs/assets/teaching-session.png)

## 工作原理

1. **测量。** 在开始讲课前，智能体会在课程依赖的每个环节上确定你的理解边界在哪儿。你的回答、把握程度和思考过程，会告诉它该从哪里开始。
2. **规划。** 它从你的起点出发、朝着目标画出一张依赖关系图。你可以查看这份计划；当发现你的理解与预期不同时，课程会随之调整。
3. **讲授。** 每一步都建立在你已经理解的内容之上：先预测、再听解释、最后检验理解。有困惑就在继续往上搭之前先修好。目标是让知识点显得「显而易见地成立」，而不只是「看着眼熟」。
4. **练习。** 单独的练习会话会变换出各种题目，要求你在没有被点名的情况下也能想起对应的知识。题目和提示会根据你的推理过程调整。

**说出你的思考。** 思考区让你用自己的话解释推理、不确定之处和直觉反应。智能体正是通过它获得一幅细致的图景，而不只是「答对/答错」的记录。你可以打字，也可以用语音输入。

**带上你的文件。** 在桌面应用中，用回形针按钮附加 PDF、图片或任意文件，也可以直接拖进去。文件仍留在原处：消息只携带它的路径，智能体从那里读取。

智能体还能在后台研究问题、制作可视化解释、在课程中展示你自己的图片并用箭头和标签做标注（包括直接从你 PDF 里裁出的图表，比如讲义幻灯片），以及构建可交互的演示。

## 可以积累并传承的知识

你学过的东西会积累成命题与推理链：一条条论断，以及推出它们的那些前提。图谱会展示这种结构，并链接回来源会话。你也可以导入笔记。

未来的教学会话可以直接读取图谱，而不必从零开始；练习会话也能从中取材。它存储的是概念及其联系，而不是对你能力的评级。

![LearnHarness 知识图谱](docs/assets/knowledge-graph.png)

## 下载与开始使用

**[从 learnharness.ai 下载](https://learnharness.ai)** · [GitHub Releases](https://github.com/amosblomqvist/learnharness/releases)

- **macOS（Apple Silicon）：** 已签名并公证的 DMG，把应用拖进「应用程序」即可。
- **Windows（x64）：** 运行安装程序。目前未签名，Windows 可能会提示「未知发布者」或 SmartScreen 警告。
- **Linux（x64）：** 让 AppImage 可执行后打开，或安装 Debian/Ubuntu 的 `.deb` 包。

选择你想要的模型，然后用一个你「想弄明白」的话题开始会话。你可以使用服务商的 API Key、桌面应用支持的订阅连接、已安装的 [Claude Code CLI](docs/claude-code.md)，或者[自定义的 OpenAI 兼容端点](docs/custom-providers.md)——包括本地模型服务。可选的语音输入和网页搜索需要单独的服务 Key。网页研究可以在 设置 → 服务商 → 搜索 里配置 Tavily、Brave、Exa、Firecrawl 或 Ollama 的 Key。注意：Ollama 搜索使用的是它的托管服务，而不是本地模型服务。

模型设置、语音输入、文件和笔记导入，参见[快速上手](docs/getting-started.md)；上下文、缓存与成本，参见[压缩与计费](docs/compaction-accounting.md)。

三个平台都支持应用内更新。

## 你的密钥，你的数据

- **你的密钥和模型。** 没有 LearnHarness 订阅费或加价。费用取决于你的服务商、CLI 配置、订阅或本地部署。实时费用表估算的是已知的 API 成本，不包含订阅、CLI 或自定义端点的收费。
- **本地存储。** 聊天记录、图谱、设置和 API Key 都存在你的机器上。学习记录是可以直接查看的纯文件。
- **外部服务。** 模型通过你配置的服务商运行；模型请求会发送完成任务所需的上下文；网页研究与语音输入也会联系外部服务。本地存储不等于离线处理。
- **行为可检视。** 系统提示词可见、可编辑。应用在 AGPL-3.0 协议下开源。

## 开发与支持

```bash
npm ci
npm run plugins:setup
npm run dev        # http://localhost:3000
npm test           # fixtures 与假服务商
```

完整指南见[文档索引](docs/README.md)，环境搭建与检查见[开发](docs/development.md)，**快速构建与打包见[构建指南](docs/build.zh-CN.md)**，运行时见[架构](docs/architecture.md)，快捷键见[键盘快捷键](docs/keyboard.md)，主题文件格式见[主题](docs/themes.md)，桌面端构建与发布见[桌面发布](docs/desktop-release.md)。

受信任的本地插件，请从[插件编写指南与能力地图](docs/plugin-authoring.md)开始——它链接了提问、练习题、提交、视图上下文与 UI 契约。小型的可运行模板见 [`examples/plugins/`](examples/plugins/)，功能源码项目见 [`plugins/`](plugins/)，内部实现见[插件宿主架构](docs/plugin-architecture.md)。

问题、Bug 与功能请求：[GitHub Issues](https://github.com/amosblomqvist/learnharness/issues)。

安全漏洞：请按 [SECURITY.md](SECURITY.md) 所述私下报告，不要发到公开 Issue。

## 许可

[AGPL-3.0](LICENSE)

应用永久免费且开源。如果将来对某些东西收费，也只会是为便利性付费（托管密钥、托管服务）——绝不会为你能在本地运行的功能收费。
