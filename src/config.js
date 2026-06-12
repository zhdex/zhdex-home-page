const config = {

	//网页元数据
	metaData: {
		title: '景行的个人主页',
		description: '欢迎来到景行的个人主页！',
		keywords: 'zhdex,景行,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm 景行", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 100, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "video",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm",
			},
		},
		"mobile": {   //移动端
			"type": "video",
			"datainfo": {
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4",
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/zhdex" },
		{ icon: "mdi-web", link: "https://www.douyin.com/user/placeholder" },
		{ icon: "mdi-television", link: "https://space.bilibili.com/3546733181144000" }
	],

	//打字机
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image-.png" },
			{ "title": "暗夜绿发", "preview": "/img/wallpaper/static/暗夜绿发/image.png", "url": "/img/wallpaper/static/暗夜绿发/image.png" },
			{ "title": "金克斯", "preview": "/img/wallpaper/static/金克斯/image.png", "url": "/img/wallpaper/static/金克斯/image.png" },
			{ "title": "悟空", "preview": "/img/wallpaper/static/悟空/image.png", "url": "/img/wallpaper/static/悟空/image.png" },
			{ "title": "光影插画", "preview": "/img/wallpaper/static/光影插画/image.png", "url": "/img/wallpaper/static/光影插画/image.png" },
			{ "title": "少女绿感", "preview": "/img/wallpaper/static/少女绿感/image.png", "url": "/img/wallpaper/static/少女绿感/image.png" },
			{ "title": "游泳猫", "preview": "/img/wallpaper/static/游泳猫/image.png", "url": "/img/wallpaper/static/游泳猫/image.png" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "少女插画", "preview": "/img/wallpaper/static-mobile/少女插画/image.png", "url": "/img/wallpaper/static-mobile/少女插画/image.png" },
			{ "title": "上班族", "preview": "/img/wallpaper/static-mobile/上班族/image.png", "url": "/img/wallpaper/static-mobile/上班族/image.png" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "企鹅",
				"preview": "/img/wallpaper/dynamic/企鹅/企鹅.mp4",
				"url": "/img/wallpaper/dynamic/企鹅/企鹅.mp4"
			},
			{
				"title": "武士",
				"preview": "/img/wallpaper/dynamic/武士/武士.mp4",
				"url": "/img/wallpaper/dynamic/武士/武士.mp4"
			},
			{
				"title": "剑光",
				"preview": "/img/wallpaper/dynamic/剑光/剑光.mp4",
				"url": "/img/wallpaper/dynamic/剑光/剑光.mp4"
			},
			{
				"title": "彩色插画",
				"preview": "/img/wallpaper/dynamic/彩色插画/彩色插画.mp4",
				"url": "/img/wallpaper/dynamic/彩色插画/彩色插画.mp4"
			},
			{
				"title": "少年校服",
				"preview": "/img/wallpaper/dynamic/少年校服/少年校服.mp4",
				"url": "/img/wallpaper/dynamic/少年校服/少年校服.mp4"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
			{
				"title": "原神",
				"preview": "/img/wallpaper/dynamic-mobile/原神/原神.mp4",
				"url": "/img/wallpaper/dynamic-mobile/原神/原神.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🔬 前往", img: "/img/wallpaper/static/少女绿感/image.png", title: "科研学术", subtitle: "论文 · 研究方法 · 学术工具", text: "论文、研究方法、学术工具、文献管理", url: "#", show: false },
		{ go: "🌐 前往", img: "/img/wallpaper/static/光影插画/image.png", title: "网站项目", subtitle: "Web开发 · 前端/后端 · 部署运维", text: "Web开发、前端/后端技术、项目架构、部署运维", url: "#", show: false },
		{ go: "🤖 前往", img: "/img/wallpaper/static/悟空/image.png", title: "Agent基础", subtitle: "AI Agent · 框架 · 自动化工作流", text: "AI Agent原理、框架、工具链、提示工程、自动化工作流", url: "#", show: false },
		{ go: "💾 前往", img: "/img/wallpaper/static/金克斯/image.png", title: "技能备份", subtitle: "Hermes技能 · 开发经验 · 最佳实践", text: "Hermes技能、开发经验、配置记录、最佳实践", url: "#", show: false },
	],

	statement: ["Copyright © 2025 景行"],
}

export default config
