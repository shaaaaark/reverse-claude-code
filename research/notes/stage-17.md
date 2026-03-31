阶段 17：切换到 B 路线（抓核心主干，不追全量 bundle）
- 停止继续机械补 stub 的路径，转而提炼 Claude Code 的最小核心结构。
- 新产出：
  - `research/notes/core-path.md`
  - `research/notes/agent-loop.md`
  - `research/notes/minimal-reimplementation-plan.md`
- 当前方向从“让恢复工程尽量 bundle 成功”切换为“从恢复源码中抽取最有价值的 CLI 主干、命令聚合、agent/query 主循环，并为后续最小复刻提供设计蓝图”。
- 结论：前期 sourcemap 恢复与结构梳理没有白做；后续更值得把这些成果沉淀成核心架构文档，而不是继续在外围 feature 分支上与构建器对抗。
