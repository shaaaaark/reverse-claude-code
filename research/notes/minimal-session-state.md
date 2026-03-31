# Session State 最小字段集（建议）

## 最小必要字段
- `sessionId`
- `cwd`
- `messages[]`
- `tools[]`
- `commands[]`
- `model`
- `permissionMode`
- `abortController` / cancellation state
- `usage / cost counters`
- `transcriptPath` 或可持久化句柄

## 第二层可选字段
- `readFileCache`
- `fileStateCache`
- `thinkingConfig`
- `maxTurns` / `budget`
- `agents`
- `mcpClients`
- `jsonSchema`
- `orphanedPermission`

## 复刻建议
先保证“能跑通一轮 query + tool + transcript”，再补缓存、预算、权限细节。
