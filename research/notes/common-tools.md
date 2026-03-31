# 常用逆向/恢复工具（针对 JS bundle + sourcemap）

## 已证明最有效
- sourcemap 本身（cli.js.map）
  - 如果带 `sourcesContent`，优先级最高，直接恢复原始源码文本

## 常用辅助工具
- node + 自定义脚本
  - 批量提取 sources/sourcesContent
  - 按 src/node_modules/vendor 分类落盘
- prettier
  - 代码格式化，提升可读性
- typescript (tsc)
  - 检查恢复源码的类型错误、缺失依赖、路径问题
- recast / @babel/parser / jscodeshift
  - AST 级重写、批量修补 import/path、生成分析报告
- source-map / @jridgewell/trace-mapping
  - 需要做映射追踪时有用；本案因已含 sourcesContent，优先级较低
- esbuild / rollup
  - 验证恢复源码是否能重新打包；也可辅助重建 bundle 边界
- depcruise / madge
  - 做依赖图、入口图
- ripgrep
  - 大规模入口/命令/特征搜索

## 不太适合当前案子的方向
- JS 反混淆器 / beautifier-only 工具
  - 因为这里已经拿到了 sourcesContent，没必要主要靠反混淆啃 bundle
- 通用反编译器
  - 对 JS bundle 帮助有限，远不如 sourcemap 直接恢复

## 当前建议流程
1. 以 sourcemap 恢复源码为主
2. 拆分自有源码/第三方依赖
3. 建最小工作区元数据（package.json/tsconfig）
4. 用 prettier + tsc 做一次体检
5. 再决定是否需要 AST 批量修补或二次重建
