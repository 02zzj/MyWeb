# 作品集 (Portfolio)

这是一个简单的静态作品集网站示例，包含基础的 HTML、CSS 和 JavaScript 文件结构，适合作为个人作品集的起点。

目录结构：

- index.html - 主页面
- styles.css - 样式文件（包含基本重置和响应式布局）
- main.js - JavaScript（包含基本 DOM 交互示例）
- images/ - 存放项目截图或图片资源

运行说明：

1. 直接打开（开发阶段）
   - 在文件管理器中双击 `index.html` 即可在浏览器中打开。

2. 使用本地静态服务器（推荐，用于避免某些浏览器对本地文件的限制）
   - 如果已安装 Python，可以在项目根目录运行：

```powershell
# 使用 Python 3
python -m http.server 8000
```

然后在浏览器中访问 http://localhost:8000

3. 进一步建议
   - 替换 `images/` 中的示例图片为你的真实作品截图。
   - 根据需要扩展项目页面、详情弹窗或接入后端 API。

许可证：
- 请按需添加 LICENSE 文件（默认不包含）。
