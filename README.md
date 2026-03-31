# reverse-cc workspace

> **Legal / Copyright Notice**: See [DISCLAIMER.md](./DISCLAIMER.md). This repository is for learning and research only, based on analysis of `cli.js.map` and related package artifacts. Original rights belong to Anthropic and/or the relevant rights holders. If any content is inappropriate or infringing, it can be removed upon reasonable notice.


这是从 `@anthropic-ai/claude-code` 的 `cli.js.map` 中恢复出的源码工作区。

## 免责声明 / Disclaimer

本仓库是一个**非官方、第三方、研究性质**的分析仓库，内容主要基于 `@anthropic-ai/claude-code` 发布产物中的 `cli.js.map` / source map 进行整理、分析与学习，目的是研究：

- Claude Code 的工程化组织方式
- CLI 架构与命令注册体系
- 插件/技能系统设计
- Agent 编排与多模块协作思路
- sourcemap 驱动的源码恢复方法

### 版权与权利归属

- 与 Claude Code 相关的原始代码、商标、名称、文档及相关知识产权，**归 Anthropic 及/或其相关权利人所有**。
- 本仓库**不声称拥有**上游项目的版权或知识产权。
- 本仓库**不是官方仓库**，也**不代表** Anthropic，不构成任何授权、背书或官方支持。

### 使用边界

本仓库内容仅建议用于：

- 学习
- 研究
- 工程分析
- 逆向方法研究
- 软件架构与 Agent 系统设计参考

请勿将本仓库用于：

- 未经授权的商业分发
- 冒充官方版本
- 规避许可或授权限制
- 其他可能损害原权利人合法权益的用途

### 删除与联系

如果你是相关权利人，并认为仓库中的内容对你的版权、商标权、商业秘密或其他合法权益造成影响，请联系维护者或提交 issue。维护者在核实后，**愿意删除、修改或下线相关内容**。

### 无担保

本仓库按 **AS IS** 提供，不保证内容的准确性、完整性、可运行性或非侵权性。仓库中的恢复结果、分析结论和脚本仅供研究参考。

> 完整版本请见：[DISCLAIMER.md](./DISCLAIMER.md)

## 目录结构
- `src/` - 恢复出的主源码
- `vendor/` - 包内 vendor 源码
- `package.json` / `tsconfig.json` - 最小工作区元数据
- `research/notes/` - 阶段记录、模块地图、工具笔记
- `research/tools/` - 恢复脚本
- `research/work/` - 中间分析结果
- `research/inputs/` - 原始输入链接
- `recovered-meta/third-party/` - 从 sourcemap 提取出的第三方依赖源码

## 当前状态
- 已确认 sourcemap 含完整 `sourcesContent`
- 已恢复自有源码与第三方依赖源码
- 已定位主入口：`src/entrypoints/cli.tsx`
