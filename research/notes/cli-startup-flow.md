# CLI 启动流程图（提炼）

```text
argv
  |
  v
src/entrypoints/cli.tsx
  |
  |-- fast-path / early dispatch
  |     |-- --version
  |     |-- daemon / worker / ps / logs / attach / kill
  |     |-- --bg / --background
  |     |-- remote / remote-control / bridge
  |     |-- environment-runner / self-hosted-runner
  |     `-- worktree / template jobs / other early branches
  |
  `--> src/main.tsx
          |
          |-- Commander program setup
          |-- global options
          |-- program subcommands (mcp/auth/plugin/server/...)
          |-- getCommands(cwd)
          |-- setup() / config / auth / session boot
          |-- headless path (-p / --print)
          `-- interactive session / REPL path
```

## 说明
- `cli.tsx` 更像“外层总闸门”，负责最快速地把某些命令导向对应子系统。
- `main.tsx` 才是正式 CLI 应用主体，负责 Commander 注册、默认 session 启动、headless 模式和远程模式处理。
