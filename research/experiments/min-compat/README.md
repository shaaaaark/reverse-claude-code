# Minimal compatibility experiment

目标：
- 不追求完整运行 Claude Code
- 只验证恢复源码在最小兼容层下能否“被加载”或“走到第一层入口逻辑”

当前已知阻塞：
- `bun:bundle` 的 `feature()`
- `MACRO.*` 编译期常量
- 可能还包括路径别名、Bun/构建器特定行为、依赖缺失
