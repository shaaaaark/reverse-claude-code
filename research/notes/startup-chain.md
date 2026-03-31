# 启动链路（初步）

主入口：`src/entrypoints/cli.tsx`

## 关键分发点
- L1: `import { feature } from 'bun:bundle';`
- L47: `} = await import('../utils/startupProfiler.js');`
- L57: `} = await import('../utils/config.js');`
- L61: `} = await import('../utils/model/model.js');`
- L66: `} = await import('../constants/prompts.js');`
- L76: `} = await import('../utils/claudeInChrome/mcpServer.js');`
- L83: `} = await import('../utils/claudeInChrome/chromeNativeHost.js');`
- L90: `} = await import('../utils/computerUse/mcpServer.js');`
- L103: `} = await import('../daemon/workerRegistry.js');`
- L116: `} = await import('../utils/config.js');`
- L121: `} = await import('../bridge/bridgeEnabled.js');`
- L124: `} = await import('../bridge/types.js');`
- L127: `} = await import('../bridge/bridgeMain.js');`
- L130: `} = await import('../utils/process.js');`
- L138: `} = await import('../utils/auth.js');`
- L155: `} = await import('../services/policyLimits/index.js');`
- L169: `} = await import('../utils/config.js');`
- L173: `} = await import('../utils/sinks.js');`
- L177: `} = await import('../daemon/main.js');`
- L189: `} = await import('../utils/config.js');`
- L191: `const bg = await import('../cli/bg.js');`
- L216: `} = await import('../cli/handlers/templateJobs.js');`
- L230: `} = await import('../environment-runner/main.js');`
- L242: `} = await import('../self-hosted-runner/main.js');`
- L253: `} = await import('../utils/config.js');`
- L257: `} = await import('../utils/worktreeModeEnabled.js');`
- L261: `} = await import('../utils/worktree.js');`
- L270: `} = await import('../utils/process.js');`
- L290: `} = await import('../utils/earlyInput.js');`
- L295: `} = await import('../main.js');`