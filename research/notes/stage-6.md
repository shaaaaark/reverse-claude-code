阶段 6：继续逆向（启动链路 + 构建阻塞点）
- 已抽取主入口启动链路到 research/notes/startup-chain.md
- 已抽取 cli fast-path 子命令/参数到 research/notes/cli-fast-paths.json
- 已确认主要构建耦合点之一：大量使用 `bun:bundle` 的 `feature()`
- 已确认主要构建耦合点之二：大量 `MACRO.*` 编译时常量（如 VERSION, PACKAGE_URL, BUILD_TIME 等）
- 初步判断：源码文本恢复完整度高，但“可原样构建”仍需要补 bun 宏定义/构建脚手架
