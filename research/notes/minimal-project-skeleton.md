# 最小复刻项目骨架（建议）

```text
minimal-cloud-code/
  bin/
    cli.ts                 # 入口，处理 argv / fast-path
  src/
    main.ts                # Commander 注册与默认会话启动
    commands/
      index.ts             # 命令聚合
      builtins/            # 内建 slash/local 命令
    engine/
      QueryEngine.ts       # 会话主循环
      processUserInput.ts  # 输入分流
      query.ts             # 模型/工具交替推进
    tools/
      index.ts             # Tool 注册
      read.ts
      edit.ts
      bash.ts
    models/
      index.ts             # 模型适配层
      anthropic.ts         # 或 mock.ts
    session/
      state.ts
      storage.ts
      transcript.ts
    types/
      command.ts
      tool.ts
      session.ts
```

## 第一阶段最小功能
- `--version`
- `--print`
- 1~3 个 slash 命令
- 1~3 个 tool（如 read/edit/bash）
- 1 个模型适配器
- transcript 记录

## 第二阶段再考虑
- plugin / skills
- remote / daemon
- auto-update
- workflow / monitor / review artifact
- UI 组件与复杂权限流
```
