# Tool Call 生命周期（提炼）

```text
assistant output
   |
   |-- tool call requested
   v
canUseTool / permission checks
   |
   |-- denied -> denial message / fallback path
   `-- allowed
          |
          v
     execute tool
          |
          v
     collect tool result
          |
          v
 append tool result to transcript / message list
          |
          v
       continue query loop
```

## 要点
- Tool 并不是“执行一次就完”，而是 query loop 中的一个阶段。
- 关键控制点：权限、tool schema、tool result transcript 化、后续继续 query。
- 复刻时最值得先做的是：
  - tool registry
  - permission gate
  - tool result append
  - loop continuation
