阶段 8：最小兼容层实验（入口前置）
- 已建立 research/experiments/min-compat/ 目录，准备验证最小可加载性
- 已确认 `src/entrypoints/cli.tsx` 的首层直接依赖包括 `bun:bundle` 与大量 `../*.js` 动态导入
- 新发现关键阻塞：恢复树是 `.ts/.tsx`，但入口按 `.js` 路径解析，因此即使 stub 掉 `feature()` 与 `MACRO.*`，Node 仍无法直接按当前树运行
- 初步结论：下一步更现实的路线是先做批量转译（TS/TSX -> JS），再叠加最小 stub
- 当前环境未安装 TypeScript 编译器；如继续推进“最小运行验证”，需要先补一个本地 typescript/esbuild 级工具链
