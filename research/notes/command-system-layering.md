# 命令系统分层图（提炼）

```text
                    getCommands(cwd)
                           |
                           v
                 +---------------------+
                 |   loadAllCommands    |
                 +---------------------+
                    /    |      |                       /     |      |                       v      v      v      v
         bundled skills  plugin cmds  workflow cmds  built-in COMMANDS()
                  |      |      |      |
                  +------+------+- ----+
                           |
                           v
              availability filtering + isEnabled filtering
                           |
                           v
                    dynamic skills injection
                           |
                           v
                     final command list
```

## 内建命令与外来命令
- 内建命令：`COMMANDS()` 中硬编码聚合
- skills 目录命令：来自本地 /skills/ 或 legacy commands
- plugin commands / plugin skills：来自插件系统
- workflow commands：feature 打开的脚本化工作流命令
- dynamic skills：运行过程中发现后注入

## 两套命令世界
1. **Commander 子命令**（`main.tsx`）
   - 例如 `mcp`, `auth`, `plugin`, `server`, `doctor`, `update`
2. **Slash / prompt / local 命令**（`commands.ts`）
   - 例如 `/help`, `/review`, `/memory`, `/status`, `/skills`
