# 免责声明 / Disclaimer

## 中文说明

本仓库内容仅用于**学习、研究、工程分析与技术讨论**，主要目的是：

- 学习 Claude Code 的工程化组织方式
- 研究 CLI 工具的模块拆分、命令体系、插件体系与 Agent 编排思路
- 分析打包产物、source map 与源码恢复流程
- 进行安全研究、兼容性研究、系统设计学习与软件工程实践参考

### 1. 版权归属

本仓库中所涉及的原始软件、原始代码、商标、名称、文档及相关知识产权，**均归其各自权利人所有**。如果无特别说明，与 Claude Code 相关的原始版权与知识产权应归属于 **Anthropic** 及/或其相关权利方。

本仓库**不声称拥有** Claude Code 原始代码或相关知识产权，也**不主张**对任何上游受版权保护内容享有所有权。

### 2. 仓库性质

本仓库是一个**非官方、第三方、研究性质**的分析仓库。

本仓库内容主要基于公开可获得的发布产物、npm 包内容以及其中包含的 `cli.js.map` / source map 等调试映射信息进行整理、分析、还原与研究。

本仓库的目的**不是**：

- 冒充官方项目
- 替代官方产品
- 规避商业授权
- 提供任何官方支持或担保
- 鼓励将受版权保护内容用于未经授权的商业用途

### 3. 使用目的限制

本仓库内容仅建议用于：

- 个人学习
- 技术研究
- 软件工程分析
- 逆向工程教学与方法研究
- Agent 系统、CLI 架构、工程化实践的案例学习

请勿将本仓库用于任何可能侵犯原权利人合法权益的用途，包括但不限于：

- 未经授权的商业分发
- 冒充官方版本
- 去除或规避原有授权限制
- 可能损害原产品正常商业利益的行为

使用者应自行判断并遵守其所在司法辖区适用的法律法规、平台规则、许可证要求及知识产权边界。

### 4. 无官方关联

本仓库与 **Anthropic** 没有任何官方关联、合作、背书、授权或认可关系。

仓库中出现的产品名称、项目名称、命令名称、接口名称等，仅用于说明分析对象，相关名称及商标权利归其各自权利人所有。

### 5. 可能包含上游受保护内容

由于 source map 可能包含原始源码文本、路径、注释、类型信息或构建期元数据，本仓库中的部分文件可能与上游项目存在较高相似性，甚至可能直接来源于上游构建产物中的映射内容。

因此：

- 本仓库更适合作为研究样本，而非再发布替代品
- 如你是普通访客，请将其视为工程分析材料
- 如你计划二次传播、镜像、打包或商用，请先自行完成版权与合规评估

### 6. 删除与权利人通知

如果你是相关权利人，认为本仓库中的任何内容：

- 侵犯了你的版权、商标权、商业秘密或其他合法权益
- 超出了合理研究、引用、分析或学习的边界
- 不适合继续公开展示

请提交 Issue、PR，或通过仓库维护者提供的联系方式发出通知，并说明相关内容及主张依据。仓库维护者在核实后，**可删除、修改、下线或限制访问相关内容**。

本仓库维护者**无意侵犯任何权利人的合法权益**；若存在不妥内容，将在收到合理通知后尽快处理。

### 7. 无担保

本仓库按“现状（AS IS）”提供，不附带任何明示或暗示的担保，包括但不限于：

- 准确性
- 完整性
- 可运行性
- 适用性
- 非侵权性

仓库中的分析结论、恢复结果、脚本和文档，均可能存在错误、缺失、误判或过时问题。请勿将其视为官方资料、正式接口文档或生产可用实现。

### 8. 建议的理解方式

更准确地说，这个仓库应被理解为：

> 一个基于 `cli.js.map` 等公开发布产物进行的 Claude Code 工程结构学习与 Agent 编排研究项目。

如果相关权利人认为公开展示不合适，维护者愿意配合删除或调整。

---

## English Summary

This repository is a **third-party, unofficial research repository** created for:

- learning software engineering patterns used in Claude Code,
- studying CLI architecture, modularization, plugin systems, and agent orchestration,
- analyzing bundle outputs and source maps,
- understanding source recovery workflows for educational and research purposes.

### Key points

1. **All original rights belong to their respective owners.**
   For Claude Code-related materials, the original copyright and intellectual property belong to **Anthropic** and/or the relevant rights holders.

2. **This is not an official repository.**
   It is not affiliated with, endorsed by, sponsored by, or authorized by Anthropic.

3. **This repository is for learning and research only.**
   It is not intended to replace the official product, bypass licensing, or support unauthorized commercial redistribution.

4. **Some materials may be derived from publicly obtainable build artifacts and `cli.js.map` source maps.**
   As a result, certain restored files may substantially resemble upstream source content.

5. **If you are a rights holder and believe any content here is inappropriate or infringing,**
   please contact the maintainer or open an issue. The maintainer is willing to remove or modify relevant content upon reasonable notice.

6. **No warranty is provided.**
   All files, scripts, notes, and recovered outputs are provided strictly on an “AS IS” basis.

---

## Maintainer intent

The maintainer's intent is **study, reverse-engineering methodology, and software architecture learning** — especially around Claude Code engineering practices and agent orchestration — **not infringement or misrepresentation**.
