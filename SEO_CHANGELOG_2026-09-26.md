# AeroCarbon 第一阶段 SEO/GEO 改版记录 — 2026-09-26

## 状态与版本

- 实施日期：2026-09-26。
- 实际生产上线日期：2026-09-26。Vercel 生产部署时间戳：2026-09-26 13:16:11 UTC（北京时间 21:16:11）；部署状态 Ready。
- PR #4 已合并；生产部署 commit：`e0356a3f4e49cd6af72b26304274c80ce94d7ab1`。
- 生产部署详情：https://vercel.com/auraai-app/aerocarbontech/HN7W9cKwCeg9HZQSFegapGVh9Dfg
- 分支：`codex/seo-phase1-2026-09-26`。
- 修改前快照：`6334df9`（原内容版本 `beffb80`）。
- Phase 1 实施提交：`9a817a78c52885159854dead660e024b7420a5d4`。
- 实际架构：静态 HTML/CSS/JavaScript，无 package.json、Next.js、TypeScript 或构建管线；保留架构。

## GSC 基线

用户提供截至 2026-09-24 的数据：873 展示、19 点击、CTR 约 2.18%；首页 398 展示、平均排名 14.79；板材页 205 展示、平均排名 45.41；Rod 139 展示；GPS/RTK 40 展示。未访问 GSC，也未将这些累计数字误记为已确认的 28 天窗口。

实际上线日为 D：比较 D-28 至 D-1 和 D 至 D+27，各 28 天。使用相同 Search type、国家、设备及页面/查询筛选，等待数据完整；分别记录 clicks、impressions、CTR、average position。首页与板材页为实验页面；Rod、GPS/RTK、UAV、Robotics 保持不动作为观察页面。不自动开启第二阶段。

## 修改文件

- `index.html`：定位、结构、FAQ、Organization、自然内链、移动端标题换行。
- `products/carbon-fiber-sheet-plate/index.html`：metadata、买家文案、OEM 流程位置、Product 与现有 FAQ 同步。
- `scripts/validate-site.mjs`：保留原检查，更新经本次明确授权修改的首页哈希，增加目标页 canonical、JSON-LD、alt 与公开 SEO 指令检查。旧哈希和旧页面保存在基线提交。
- `SEO_CHANGELOG_2026-09-26.md`：本报告。

## Metadata 对照

|页面|字段|修改前|修改后|
|---|---|---|---|
|首页|Title|AeroCarbon Tech \| Carbon Fiber Manufacturer for UAV, Automotive & Industrial OEMs|Carbon Fiber Manufacturer in China \| OEM & Custom Parts \| AeroCarbon|
|首页|H1|Carbon Fiber Products for OEM Buyers|Custom Carbon Fiber Manufacturer in China|
|首页|Description|AeroCarbon Tech supplies carbon fiber sheets, tubes, UAV frames, CNC parts and custom composite components for global and Middle East OEM buyers.|AeroCarbon manufactures custom carbon fiber sheets, tubes and CNC-machined components for global OEM buyers. Factory-direct manufacturing and custom solutions.|
|板材页|Title|Custom Carbon Fiber Sheet & Plate Manufacturer \| AeroCarbon Tech|Custom Carbon Fiber Sheet & Plate Manufacturer \| AeroCarbon|
|板材页|H1|Custom Carbon Fiber Sheet & Plate Manufacturer|Custom Carbon Fiber Sheet & Plate Manufacturer|
|板材页|Description|Source custom carbon fiber sheets, plates and CNC-machined flat components for robotics, UAV and industrial OEM applications.|AeroCarbon manufactures custom carbon fiber sheets, plates and CNC-machined parts for OEM buyers. Send drawings, thickness, finish and quantity for a quote.|

Title 首页 68 字符、板材页 59 字符，搜索展示按像素与设备可能截断；优先保证制造商意图靠前，不添加重复 title。Description 首页 159 字符、板材页 156 字符（以实际 HTML 解码内容为准）。H1 板材页保留原文，首页改为指定制造商定位。OG/Twitter 同步各自 Title/Description，板材社交图改为页面现有板材实拍。

## 首页调整

顺序：Hero → 核心产品（含原材质/成品视觉展示）→ Manufacturing Capabilities → Applications → Factory & Quality → OEM Process（含出口资料支持）→ Buyer FAQ → RFQ。

删除无独立产品入口的重复 Signature Products 展示；将重复 buyer audit 信息集中至现有工厂区。原产品、Rod、UAV、GPS/RTK、Robotics、加工能力等链接保留。保留 `#products`、`#visual-proof`、`#production`、`#applications`、`#factory`、`#markets`、`#contact` 等锚点。

替换 “Use this section to rank for...” 和应用领域中的写作说明。GCC 支持并入 OEM 采购资料说明，不保留无法验证的各国 Active/Priority 标签。新增五个可直接从 HTML 读取的采购 FAQ，回答制造商身份、产品、OEM、CNC 板材、询价输入。

## 板材页调整

URL `/products/carbon-fiber-sheet-plate/` 不变。保留现有材料/表面照片、尺寸输入、CNC 范围、应用、质量、包装及采购 FAQ。移除重复的三步流程，保留其全部相关链接；将完整 OEM 流程移到应用之后。尺寸段改为说明厚度、长宽、结构和公差如何报价，未编造标准库存或参数。移除重复页面/竞争搜索意图等内部说明，统一 AeroCarbon 名称。

新增 Product（name、description、image、brand、manufacturer、url），不添加 Offer、价格、库存、评分或评论。Product 属于语义描述，不承诺满足 Google 商品富结果资格。保留 BreadcrumbList；现有 FAQPage 的答案与可见 FAQ 一致。不增加 AI 专用文件。

## 内链

新增：首页制造能力段 → 板材页、capabilities；首页 FAQ 后 → 板材页；板材采购介绍 → 首页。
已有板材页 → capabilities、UAV、Robotics、GPS/RTK、Applications 的入口保持。Products、Capabilities、UAV、Robotics 等页面已有返回板材页的链接，因此无需修改这些页面。所有其他页面文件保持原样。

## 工厂事实与人工确认

- 旧首页同时出现 5007、5007.95 平方米，以及 300 + 3620 + 2000 平方米（合计 5920），口径不一致。公开面积数字改为“Area confirmation pending”；这里保留原值供核查，未推算新面积。
- 旧首页 0.5–20 mm 未找到独立规格文件，改为 By drawing；板材页继续按项目确认厚度和尺寸。
- 现有 V-Trust 报告缩略图和原有审厂信息保留：EZW651552、2026-06-12、81/100；35 CNC、9 QC、81 staff 均属于原网站的历史审厂陈述，不是本次独立复审结果。需核对完整报告及现状。
- ISO 9001、SGS 缺乏可核对的有效期和适用范围；改为请求当前质量体系/材料测试资料，不声称已获本次验证。
- MOQ、交期、产能、公差、客户及认证未新增。采购方可请求完整报告及文件；上线前由资料负责人确认面积和相关历史审厂事实。

## 验证

- `node scripts/validate-site.mjs`：通过（11 个既有 SEO 路由，metadata 唯一性、内链、robots/sitemap、RFQ 标记、首页基线及新增检查）。
- `node --check`：现有两个业务 JS 与验证脚本语法通过；`git diff --check` 检查空白。
- TypeScript：不适用，无 TS 源码或 tsconfig。
- Lint：无 ESLint 或 npm lint 命令；使用已有站点验证、JS 语法及 diff 检查，不声称运行 ESLint。
- Production Build：不适用，无编译构建步骤；静态文件即部署产物。未创建新的构建系统或修改托管配置。
- 目标页正文、FAQ、H1/H2/H3 在初始 HTML 中；单一 H1、独立 metadata、自引用 canonical、OG/Twitter、图片 alt、JSON-LD 已检查。
- 比较修改前后：两页 `<form>` 和业务 `<script>` 内容一致；FAQ JSON-LD 与可见问题答案一致。
- 线上 robots.txt、sitemap.xml 只读请求成功，与本地现有内容相符；未重复创建或改动。
- 移动端和 RFQ 浏览器结果见下方最终验收补记。
- 外部 Web3Forms 真实投递、收件箱、Google Ads 归因、生产托管部署日志与 GSC 抓取/富结果未验证；模拟检查不发送真实 RFQ，不产生广告转化请求。

### 浏览器最终验收

Chrome 本地预览：首页与板材页均通过 375、390、768、1440px 四档视口，无横向溢出；已加载图片无失效，alt 完整，未捕获页面 JavaScript 异常。使用阻断外部请求的模拟响应验证：必填字段阻止空提交、成功状态、失败反馈、提交按钮恢复。真实表单投递未执行。首页长标题与制造能力 H2 增加窄屏换行适配，不改共享样式。

本地全部 12 个现有 HTML 路由（含 Pickleball）返回 HTTP 200；首页和板材页 390px 首屏截图已人工目视检查。浏览器测试阻断外部字体/跟踪请求，包含字体回退场景；生产字体加载仍由上线环境确认。

## 生产上线验收补记

- 预览超时源于验证环境直连 Vercel 预览域名的网络路径；通过现有系统代理及浏览器授权会话完成访问。未关闭 Deployment Protection。未授权预览响应为 302 SSO，并带 `x-robots-tag: noindex`。
- Vercel 预览日志显示静态构建与部署成功，源 commit 为 `9a817a7`；授权预览首页、板材页、metadata、canonical、JSON-LD、内部链接、移动端布局和 RFQ 必填校验通过。
- PR #4 已合并至 main，生产部署 Ready，源 commit 为上述 `e0356a3`。
- 正式域名首页与原板材 URL 均返回 HTTP 200；Title、Description、canonical、H1、JSON-LD 和 RFQ form 与已验收实现一致。Cloudflare 在响应中增加邮箱保护，不属于本次代码变更。
- 其他页面及 RFQ 业务代码未修改；此前本地全路由与内链验证通过。本次未重复执行生产全路由浏览器测试。
- 真实 RFQ 投递和收件箱到达情况留给站点负责人手动确认；未发送真实询价。生产浏览器完整交互未重复测试。
- GSC 观察期：2026-09-26 至 2026-10-23（含首尾，共 28 天；上线日为部分日期）。对照期：2026-08-29 至 2026-09-25。按同一 GSC 时区及筛选比较，等待数据完整。
- 保持当前实现，不启动第二阶段。本补记仅修改文档，待人工提交至仓库。
