# QueryEngine 事件流（提炼）

```text
user submits input
   -> processUserInput
   -> normalize into internal message / command / tool path
   -> QueryEngine.submitMessage
   -> assemble system prompt + context
   -> query()
       -> call model
       -> receive assistant response
       -> detect tool calls / commands / continuation
       -> run permission checks
       -> execute tool(s)
       -> append results/messages
       -> maybe compact / maybe continue
   -> flush session storage
   -> emit final output
```
