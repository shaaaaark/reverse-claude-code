# Minimal Reimplementation Plan

## 目标
不是复原整个 Claude Code 工程，而是复刻一个“最小可解释主干”：
- CLI 入口
- 命令注册与分发
- 会话状态
- 用户输入 -> 命令/工具/模型 的主循环
- 最小工具调用框架

## 建议边界
### 保留
- `cli.tsx` 的 fast-path 思想
- `main.tsx` 的 program/subcommand 组织
- `commands.ts` 的多来源命令聚合思想
- `QueryEngine` 的查询/状态/工具调度主循环

### 不优先复刻
- 大量 feature flag 分支
- UI 组件与权限弹窗细节
- workflow / monitor / review artifact / proactive / bridge 等边缘能力
- 原项目完整构建链（bun macros, 内部实验开关）

## 最小复刻模块图
1. `bin/cli.ts`
   - 处理 fast-path：`--version`、`--print`、`daemon?`（可先留空）
2. `src/main.ts`
   - Commander 注册
   - 默认进入 session / headless
3. `src/commands/index.ts`
   - 内建命令表
   - 可选：skills/plugin 扩展接口
4. `src/engine/QueryEngine.ts`
   - submitMessage
   - processUserInput
   - query loop
   - transcript/session state
5. `src/tools/*`
   - 最小 Tool 接口
   - read/edit/bash 等示例 tool
6. `src/models/*`
   - 抽象模型适配层（先 mock 或 OpenAI/Anthropic 任选一个）

## 实施顺序
1. 先写一版最小 CLI 壳子
2. 再实现命令表与 slash 命令分发
3. 再实现 QueryEngine 主循环
4. 最后再补工具系统和技能/插件扩展点

## 与当前逆向结果的关系
当前 `reverse-claude-code` 仓库更适合作为“参考母本”而非直接构建目标。
最合理方式是：
- 从恢复源码中提炼设计
- 重新实现一个小而清晰的兼容主干
而不是继续追完整 bundle 成功。
