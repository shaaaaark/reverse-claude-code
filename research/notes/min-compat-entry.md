# 最小兼容实验：入口初探

目标文件：`src/entrypoints/cli.tsx`

## 直接依赖（静态 + 动态 import 汇总）
- `../utils/startupProfiler.js`
- `../utils/config.js`
- `../utils/model/model.js`
- `../constants/prompts.js`
- `../utils/claudeInChrome/mcpServer.js`
- `../utils/claudeInChrome/chromeNativeHost.js`
- `../utils/computerUse/mcpServer.js`
- `../daemon/workerRegistry.js`
- `../bridge/bridgeEnabled.js`
- `../bridge/types.js`
- `../bridge/bridgeMain.js`
- `../utils/process.js`
- `../utils/auth.js`
- `../services/policyLimits/index.js`
- `../utils/sinks.js`
- `../daemon/main.js`
- `../cli/bg.js`
- `../cli/handlers/templateJobs.js`
- `../environment-runner/main.js`
- `../self-hosted-runner/main.js`
- `../utils/worktreeModeEnabled.js`
- `../utils/worktree.js`
- `../utils/earlyInput.js`
- `../main.js`
- `bun:bundle`

## 已知首层兼容点
- `bun:bundle` / `feature()`
- `MACRO.VERSION` 等编译期常量
- 入口后续大量 `await import("../*.js")`，而当前恢复树是 `.ts/.tsx` 源码，需要额外转译或重写解析策略