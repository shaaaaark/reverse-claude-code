# 最小复刻优先级清单

## P0（必须先做）
- CLI 入口
- main program / print mode
- commands registry
- QueryEngine 主循环
- 一种模型适配
- 1~3 个基础 tool
- transcript 记录

## P1（做了会更像 Claude Code）
- slash command 分类
- permission mode
- session restore / persistence
- cost / usage tracking
- dynamic skills / plugin extension hooks

## P2（可后置）
- remote / daemon
- workflow / monitor
- review artifact
- assistant sidecars
- 大量 feature flags
- UI 组件与对话框

## P3（非当前重点）
- 完整复刻 bun 构建链
- 内部实验开关体系
- 所有官方边缘命令
