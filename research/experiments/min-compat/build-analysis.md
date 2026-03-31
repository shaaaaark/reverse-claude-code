# esbuild 首次失败分析

- 总 unresolved 唯一路径数: 5
- 外部依赖 unresolved: 3
- 内部路径 unresolved: 2

## Top 外部依赖缺失
- `lodash-es/last.js`: 1
- `strip-ansi`: 1
- `axios`: 1

## Top 内部路径缺失/断裂
- `./services/compact/snipCompact.js`: 1
- `./services/compact/snipProjection.js`: 1