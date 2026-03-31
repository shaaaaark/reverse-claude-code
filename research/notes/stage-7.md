阶段 7：命令注册体系 + 构建兼容层
- 已生成命令注册骨架：research/notes/command-registration-skeleton.md
- 已生成命令注册地图：research/notes/command-registration-map.md
- 已确认 `src/commands.ts` 负责 slash/prompt 命令聚合与动态来源整合
- 已确认 `src/main.tsx` 负责 Commander CLI 子命令注册（mcp/auth/plugin/server/update/...）
- 已确认构建兼容层核心依赖有两类：`bun:bundle` 的 `feature()` 与 `MACRO.*` 编译时常量
- 已生成兼容层清单：research/notes/build-compat-layer.md
