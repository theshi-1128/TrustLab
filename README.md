# TrustLab 实验室网站

基于 Next.js、React 和 TypeScript 的多页面学术实验室网站。保持简洁蓝白学术风格，支持桌面和移动端布局、成果分类、研究方向锚点、独立项目详情和 404 页面。

## 直接运行已构建的网站

下载完整项目后，在项目根目录运行（需要 Node.js 22.13 或更高版本）：

```bash
node scripts/preview.mjs
```

打开终端打印的地址。预构建版本的地址为 `http://localhost:3000/trustlab-website/`。此方式无需安装依赖。

> 请通过本地 HTTP 服务访问，不要直接双击 HTML 文件。JavaScript 路由和资源使用正式部署路径。

## 本地开发

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

打开 `http://localhost:3000`。

## 构建并验证

```bash
pnpm build
pnpm verify
pnpm preview
```

- `pnpm build`：导出完整静态网站至 `out/`。
- `pnpm verify`：校验页面、内部链接、资源、路径前缀与 XXX 占位。
- `pnpm preview`：用 Node.js 提供本地静态服务。

部署在子目录时，在构建前设置 `NEXT_PUBLIC_BASE_PATH`，例如 `/trustlab-website`。GitHub Actions 已自动处理普通仓库与 `<用户名>.github.io` 仓库的路径差异。

## GitHub Pages

预定仓库：`theshi-1128/trustlab-website`。不要替换现有的 `TrustLab` 模板仓库。

1. 将项目源码推送到新仓库的 `main` 分支。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. `.github/workflows/deploy-pages.yml` 在推送时自动安装依赖、构建、验证并部署；也可在 Actions 中手动运行。
4. 网站地址由部署结果给出。按上述仓库名部署时，预期为 `https://theshi-1128.github.io/trustlab-website/`，部署成功前该地址不代表已上线。

所需权限：构建任务仅读取仓库；发布任务仅使用 `pages: write` 和 `id-token: write`。工作流使用 GitHub 自动提供的凭证，无需在源码中存储个人访问令牌。

## 页面结构

| 页面 | 路径 |
|---|---|
| 首页 | `/` |
| 研究方向 | `/research/` |
| 学术成果 | `/publications/` |
| 研究项目 | `/projects/` |
| 团队成员 | `/people/` |
| 学术动态 | `/community/` |
| 学习与教学 | `/resources/` |
| 加入我们 / 联系方式 | `/join/` |
| RECAST / HalluProp / EvoGuard / LARA / ReDPJ | `/projects/<项目英文小写名>/` |

## 修改内容

- `app/data.ts`：项目、研究方向、新闻、成员和联系信息。
- `app/site.tsx`：页面结构和展示文案。
- `app/globals.css`：配色、布局、字号和移动端适配。
- `public/favicon.svg`：网站图标。

所有缺失信息以字面值 `XXX` 表示，包括姓名、照片、身份、研究方向、个人主页、邮箱、年份、毕业去向、办公地点、招生安排、名额、截止时间、学术服务、课程及资料。未公开的论文作者、论文链接、代码与引用格式同样显示 `XXX`。未知值不会被渲染为可点击的虚假链接。

照片目前用显示 `XXX` 的占位框表示。替换真实照片时，将图片存入 `public/`，并为图片路径加上 `NEXT_PUBLIC_BASE_PATH` 前缀。

保留已提供或已核实的信息。研究稿件和已接收成果分别标注，避免将未发表工作展示为已发表论文。

## 技术说明

- 全站静态导出，部署后不需要 Node.js 服务器、数据库或第三方 API。
- 所有动态路由均通过 `generateStaticParams` 在构建时生成。
- `trailingSlash: true` 将子页面输出为目录内的 `index.html`，支持直接打开与刷新。
- 保留 `.nojekyll` 和 `404.html`，避免 GitHub Pages 忽略静态资源。
- `out/` 是构建产物，不提交到源码仓库；完整下载包中附带已验证的产物供直接运行。
