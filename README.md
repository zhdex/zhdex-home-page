<div align="center">

# 🌟 景行的个人主页

**一个高颜值、全功能的个人主页模板**

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite)](https://vite.dev/)
[![Vuetify](https://img.shields.io/badge/Vuetify-3.7-1867c0?logo=vuetify)](https://vuetifyjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## ✨ 功能特性

| 功能 | 描述 |
|------|------|
| 🎬 **动态壁纸** | 支持静态图片 & 视频壁纸，PC/移动端独立配置 |
| 🎵 **音乐播放器** | 内置 Meting API，支持网易云音乐歌单 |
| 🔍 **多引擎搜索** | Bing / Google / 百度 / Yandex / DuckDuckGo 一键切换 |
| 🎨 **主题定制** | 毛玻璃效果、亮度调节、自定义主题色 |
| 📊 **技能雷达图** | Chart.js 极坐标图展示个人技能 |
| ⌨️ **打字机动画** | TypeIt 驱动的首页文字效果 |
| 📱 **全响应式** | PC / 平板 / 手机自适应布局 |
| 💾 **偏好记忆** | Cookie 持久化用户设置 |
| 🎡 **趣味转盘** | 装饰性 SVG 动画组件 |

## 📁 项目结构

```
zhdex-home-page/
├── public/
│   ├── css/              # 全局样式（Less）
│   ├── fonts/            # 自定义字体
│   └── img/
│       ├── wallpaper/
│       │   ├── static/         # PC 静态壁纸
│       │   ├── static-mobile/  # 手机静态壁纸
│       │   ├── dynamic/        # PC 动态壁纸（视频）
│       │   └── dynamic-mobile/ # 手机动态壁纸（视频）
│       └── stackicon/    # 技术栈图标
├── src/
│   ├── components/
│   │   ├── hoemright.vue # 右侧面板（时钟 + 项目卡片）
│   │   ├── typewriter.vue# 打字机组件
│   │   ├── polarchart.vue# 技能雷达图
│   │   ├── turntable.vue # 装饰转盘
│   │   ├── loader.vue    # 加载动画
│   │   └── tabs/         # 设置弹窗 Tab 面板
│   ├── utils/
│   │   ├── cookieUtils.js# Cookie 读写工具
│   │   └── common.js     # 公共函数
│   ├── config.js         # ⚙️ 核心配置文件
│   ├── app.js            # 主组件逻辑
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/zhdex/zhdex-home-page.git
cd zhdex-home-page

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## ⚙️ 个性化配置

所有配置集中在 `src/config.js`，修改即生效：

```js
const config = {
  metaData: { title: '你的标题', description: '描述', keywords: '关键词' },
  avatar: "/img/avatar.jpg",        // 头像
  welcometitle: "Hi, I'm 你的名字", // 欢迎语
  brightness: 100,                  // 背景亮度 0-100
  tags: ['标签1', '标签2', ...],     // 个人标签
  background: { ... },              // 默认壁纸
  socialPlatformIcons: [ ... ],     // 社交链接
  projectcards: [ ... ],            // 项目展示卡片
  wallpaper: { pic: [], video: [], picMobile: [], videoMobile: [] },
}
```

### 添加壁纸

将壁纸文件放入对应目录，然后在 `config.js` 的 `wallpaper` 中添加条目：

```js
{ "title": "壁纸名", "preview": "/img/wallpaper/static/壁纸名/image.png", "url": "/img/wallpaper/static/壁纸名/image.png" }
```

## 🛠️ 技术栈

- **前端框架**：[Vue 3](https://vuejs.org/) + [Vuetify 3](https://vuetifyjs.com/)
- **构建工具**：[Vite 5](https://vite.dev/)
- **图表**：[Chart.js](https://www.chartjs.org/) + [vue-chartjs](https://vue-chartjs.org/)
- **动画**：[TypeIt](https://www.typeitjs.com/)
- **样式**：[Less](https://lesscss.org/) + [MDI Icons](https://pictogrammers.com/library/mdi/)
- **音乐**：[Meting API](https://github.com/metowolf/MetingJS)

## 📄 License

MIT © [zhdex](https://github.com/zhdex)

---

<div align="center">

**如果觉得不错，点个 ⭐ 支持一下吧！**

</div>
