阶段 1：sourcemap 完整性检查
- cli.js.map 含 4756 个 source 条目
- 4756/4756 均含 sourcesContent，可直接批量恢复
- 非 node_modules 自有源码约 1906 个文件
- 已完成第一轮全量导出到 recovered/source-map
