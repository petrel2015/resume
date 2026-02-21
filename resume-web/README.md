# 洪宇 - Java 研发工程师简历网页工程

这是一个基于 React + TypeScript + Vite 构建的个人简历网页工程。它专为 **A4 纸张排版** 优化，支持高质量导出 PDF。

## 🚀 快速启动

1. **安装依赖**
   ```bash
   npm install
   ```

2. **本地预览**
   ```bash
   npm run dev
   ```

3. **生产构建**
   ```bash
   npm run build
   ```

## 📄 导出 PDF 建议

1. 在浏览器预览页面，点击右上角的 **“导出 PDF”**。
2. 打印设置建议：
   - **布局**：纵向
   - **页数**：全部（共 2 页）
   - **边距**：无（None）
   - **选项**：勾选“背景图形”（Background graphics）以保留颜色高亮。

## 🛠 技术实现

- **React 19 + TypeScript**: 保证代码健壮性。
- **CSS Flex/Grid**: 实现复杂的简历布局。
- **Media Queries (@media print)**: 针对打印设备优化的专用样式。
- **Break-after Property**: 强制在核心经验与项目细节之间进行精准分页。
