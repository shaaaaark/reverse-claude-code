# QueryEngine / Tool / Model / Session 关系图（提炼）

```text
User input
   |
   v
processUserInput(...)
   |
   |-- slash command?
   |-- local command?
   |-- prompt expansion?
   `-- plain text prompt?
   |
   v
QueryEngine.submitMessage(...)
   |
   |-- normalize / session state updates
   |-- system prompt assembly
   |-- tool availability / permission checks
   |-- query(...)
   |      |
   |      |-- call model
   |      |-- inspect assistant output
   |      |-- decide tool calls
   |      |-- execute tools
   |      |-- append transcript
   |      `-- continue / stop / compact
   |
   |-- recordTranscript(...)
   |-- flushSessionStorage(...)
   `-- emit final messages / status
```

## 核心对象
- **QueryEngine**：持有会话主循环与状态边界
- **commands**：用户可调用的 slash/local/prompt 命令
- **tools**：模型可调用的能力集合
- **model layer**：底层模型适配与调用
- **session storage**：对话、状态、恢复、成本、权限等持久化信息

## 对复刻最重要的点
- `QueryEngine` 是真正值得学的核心，不是外层 feature flags
- `processUserInput` 负责把“用户说的话”转换成系统内部可执行路径
- `query()` 是 tool-call / model-call / transcript 交替推进的中心
