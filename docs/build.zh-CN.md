# 构建指南（LearnHarness）

本文说明如何在本机构建 LearnHarness。Web 端（Next.js）与桌面端（Electron）是两条链路，先给结论：

| 目标 | 命令 | 产物 |
| --- | --- | --- |
| 开发调试 | `npm run dev` | 本地 http://localhost:3000（Turbopack 热更新） |
| 生产构建（Web） | `npm run build` | `.next/`（含 `standalone/`、`static/`、`BUILD_ID`） |
| 运行生产包 | `npm start` | http://localhost:3000 |
| 桌面安装包 | `npx electron-builder` | 各平台安装包（见第五节） |

> 注：`plugins:build-core`、`plugins:build-authoring`、`next build` 会生成 `core-plugins/`、`public/plugin-authoring/`、`.next/` 等**构建产物**，它们都在 `.gitignore` 里，不会进仓库，需要每次构建时重新生成。

## 一、环境要求

- **Node.js**：24.x（本项目实测 24.12.0；Electron 44 与 Next.js 16 需要较新的 Node）
- **npm**：11.x（实测 11.21.0）
- **操作系统**：Windows / macOS / Linux 均可，命令示例以 Windows PowerShell 为主
- **磁盘**：`node_modules` 约 1–2 GB，另加 Electron 二进制约 370 MB（仅桌面端需要）

检查版本：

```powershell
node -v
npm -v
```

## 二、安装依赖

```powershell
cd "D:\What Can IC\DeepseekLearnHarness\learnharness"
npm ci
npm run plugins:setup
```

- `npm ci` 按 `package-lock.json` 安装主工程依赖（约 1100 个包）。
- `npm run plugins:setup` 安装 `plugins/` 下 5 个核心插件各自的依赖，并生成插件的 `.sdk` 类型声明。

**两个已知的坑，提前处理：**

1. **Electron 二进制可能没下载。** npm 11 的 `allowScripts` 策略会拦截部分包的 `postinstall` 脚本（报 `npm warn install-scripts ... not yet covered by allowScripts`）。如果之后要跑桌面端，手动补一次：

   ```powershell
   cd node_modules\electron
   node install.js
   ```

   完成后应存在 `node_modules\electron\dist\electron.exe`（约 368 MB）。

2. **`typescript` 包损坏（偶发）。** 症状是 `plugins:build-authoring` 报 `Cannot find module 'typescript/bin/tsc'`、`npm ls typescript` 显示 `invalid`。修复：

   ```powershell
   npm install --no-audit --no-fund
   node node_modules\typescript\bin\tsc --version   # 能打印版本即恢复
   ```

## 三、开发模式

```powershell
npm run dev
```

`dev` 脚本会先执行插件构建链（`plugins:build-core && plugins:build-authoring`），再启动 `next dev -H localhost`。浏览器打开 http://localhost:3000 即可。

> 若卡在 `rich-code-blocks` 的 esbuild 构建（CPU 空转、无输出），是残留的 esbuild 服务进程造成的偶发问题：
> ```powershell
> Get-Process | Where-Object { $_.ProcessName -match 'esbuild' } | Stop-Process -Force
> npm run dev
> ```
> 实在不行可以跳过插件重建，直接起服务：`npx --no-install next dev -H localhost`（前提是 `core-plugins/` 已存在）。

## 四、生产构建（Web）

```powershell
npm run build
```

等价于按顺序执行三步：

1. **`plugins:build-core`** —— 用 esbuild 把 `plugins/flashcards`、`coding-questions`、`drawing-pad`、`rich-code-blocks` 构建成 `core-plugins/<id>/`（应用运行时实际加载的就是这一份）。
2. **`plugins:build-authoring`** —— 生成插件编写者技能包：`public/plugin-authoring/learnharness-plugins.zip` 等。
3. **`next build`** —— Turbopack 生产构建 + 类型检查 + 静态页面生成。

**成功标志**（实测约 40 秒）：

```text
✓ Compiled successfully in 11.3s
Finished TypeScript in 21.2s
✓ Generating static pages using 23 workers (9/9)
```

并在 `.next/` 下生成 `BUILD_ID`（本次为 `h8K6h_0SFLbGHfS5LdId3`）与 `standalone/`、`static/`。

构建过程中可能看到两条 **Turbopack 警告**（`Dynamic filesystem access causes tracing of the whole project`，来自 `src/agent/subagents/headless.ts` 与 `src/agent/tools/pdf-read.ts`）——这是上游既有的已知警告，不影响构建成功。

## 五、运行生产包

```powershell
npm start
```

默认监听 `localhost:3000`。验证：

```powershell
curl.exe -s -o NUL -w "%{http_code}" http://localhost:3000/     # 期望 200
curl.exe -s -H "Cookie: lh-locale=en" http://localhost:3000/    # 期望 <html lang="en">
```

数据目录默认是仓库下的 `data/`（聊天记录、图谱、设置、插件记录），可用 `LH_DATA_DIR` 环境变量重定位。

## 六、桌面端打包（可选）

桌面端需要 Electron 二进制（见第二节第 1 条）。仓库内置的 `desktop:dist` 脚本是 **macOS 专用**（含签名/公证步骤）；在 Windows/Linux 上请用 `electron-builder` 直接打包：

```powershell
npm run build
npx electron-builder --win --x64        # 或 --linux / --mac
```

完整的签名、公證、发布流程见 [`docs/desktop-release.md`](desktop-release.md)（英文）。

## 七、构建与中文化的关系

- 界面语言由 `lh-locale` cookie 驱动（默认中文，可在设置 → 通用 → 界面语言切换），**不需要为切换语言单独构建**。
- 修改了 `src/i18n/` 里的文案、组件或代码后，重新执行 `npm run build` 即可生效；开发模式下 Turbopack 会热更新。

## 八、验证清单

构建完成后建议依次确认：

- [ ] `npm run build` 退出码 0，出现 `✓ Compiled successfully`
- [ ] `.next/BUILD_ID` 存在
- [ ] `core-plugins/` 下有 4 个目录（flashcards、coding-questions、drawing-pad、rich-code-blocks）
- [ ] `public/plugin-authoring/learnharness-plugins.zip` 存在
- [ ] `npm start` 后 `GET /` 返回 200 且页面为中文
- [ ] `GET /api/plugins` 返回 4 个核心插件
- [ ] （改代码后）`npx tsc --noEmit` 与 `npx eslint .` 无错误
