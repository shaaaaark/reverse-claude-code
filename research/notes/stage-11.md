阶段 11：B 路线（最小入口骨架）
- 采用“external 大量三方依赖 + stub 内部 feature/实验模块”的策略，而非完整恢复运行时。
- 已通过 `build-entry-minimal.mjs` 对 `src/entrypoints/cli.tsx` 进行最小化 bundle 尝试。
- 该策略验证有效：unresolved 已从早期的大量 npm 依赖/内部模块，逐步收敛到少量深层内部模块。
- 收敛路径示例：
  1. assistant/proactive/udsMessaging/agents-platform
  2. remoteControlServer/force-snip/workflows/skillSearch/subscribe-pr
  3. torch/peers/fork/buddy/WorkflowTool
  4. TungstenTool/attributionHooks/reactiveCompact/contextCollapse
- 当前说明主入口骨架已基本被剥离出来，后续重点转向：清理最后几层深层内部模块，争取拿到“可成功 bundle 的最小入口”。
