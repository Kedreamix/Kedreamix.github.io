# Kedreamix · 数字人实验笔记

深圳大学 Kedreamix 的个人站点：项目、论文笔记、工程与 Linux/CUDA 记录。

线上地址：https://kedreamix.github.io/

## 本地

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```

## 部署

源码在 `main`。GitHub Actions 会构建静态站点并发布到 GitHub Pages。

仓库 Settings → Pages 请改为 **GitHub Actions**（不要再使用 `master` 分支上的旧 Hexo 生成结果）。

旧文章路径保持不变，例如 `/Project/Linly-Talker/`、`/Linux/Linux 安装CUDA 及 更新CUDA/`。
