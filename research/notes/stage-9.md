阶段 9：最小转译工具链与首次真实 build
- 已在实验目录安装 esbuild
- 已编写 build-entry.mjs，对 cli.tsx 进行最小 bundle 尝试
- bun:bundle 与 MACRO.* 已可通过 shim/define 方式处理
- 首次真实失败集中在少量外部依赖缺失（axios、strip-ansi、lodash-es/last.js）与 feature-gated 内部路径缺失（snipCompact/snipProjection）
