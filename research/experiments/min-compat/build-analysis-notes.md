# 第二轮结论：首次真实转译失败点

## 已确认可推进的部分
- esbuild 工具链已成功装到实验目录
- `bun:bundle` 的 shim 可以工作
- `MACRO.*` 可以通过 `define` + banner 做最小替代

## 首次真实失败点
### 外部依赖缺失
- `lodash-es/last.js`
- `strip-ansi`
- `axios`

### 内部路径缺失 / 特性裁剪残留
- `./services/compact/snipCompact.js`
- `./services/compact/snipProjection.js`

## 解释
- 这说明最小运行验证已经推进到“真正解析项目依赖图”这一步了
- 当前不是完全卡在入口语法层，而是开始暴露：
  1. 需要补的 npm 依赖
  2. 某些 feature-gated 文件在恢复树中不存在或命名不一致

## 当前判断
- 这份恢复源码不是伪恢复，已经足够真实到让 bundler 开始遍历核心依赖
- 下一步可以继续按两条线推进：
  1. 补最小外部依赖
  2. 处理 feature-gated 缺失文件（stub 或重写）
