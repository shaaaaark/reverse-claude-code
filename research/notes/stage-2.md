阶段 2：源码树拆分与结构识别
- 已将自有源码拆出到 recovered/claude-code-src/src
- 已将第三方依赖拆到 recovered/third-party
- 已定位主入口为 src/entrypoints/cli.tsx
- 已确认命令体系位于 src/commands/*，CLI handler 位于 src/cli/*
