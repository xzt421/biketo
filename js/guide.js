const datas = new Vue({
	el: "main",
	data: {
		index: 0,
		nav: ['骑什么', '怎么骑', '去哪骑'],
		guide: [
			[{
					pic: 'img/icon1-1.png',
					title: '自行车分类',
					flag: false,
					news: [{
						classid: 3,
						id: 25877,
						title: '细数目前主流的十二个自行车种类'
					}, {
						classid: 15,
						id: 25941,
						title: '公路车在进化：目前主流的公路车型盘点'
					}, {
						classid: 3,
						id: 32664,
						title: '科普频道：主流山地车型介绍'
					}, {
						classid: 38,
						id: 28338,
						title: '韩博士折叠车大讲堂：折叠车的5种基本设计策略'
					}, {
						classid: 115,
						id: 29577,
						title: '骑长途不是活受罪 如何挑选适合自己的旅行车'
					}, {
						classid: 115,
						id: 30931,
						title: '好车天天用：通勤用车大搜罗'
					}, {
						classid: 3,
						id: 29094,
						title: '[骑友分享]如何选择城市通勤折叠自行车'
					}, {
						classid: 3,
						id: 32774,
						title: '知识科普 | 关于BMX你不得不了解的事'
					}, {
						classid: 39,
						id: 7373,
						title: '躺着骑的自行车――躺车的历史'
					}, {
						classid: 15,
						id: 34208,
						title: '新手入门 公路自行车如何握把最高效？'
					}]
				},
				{
					pic: 'img/icon1-2.png',
					title: '选购技巧',
					flag: false,
					news: [{
							classid: 129,
							id: 31776,
							title: '年度总结：2016年，我们测评过的公路车大盘点'
						},
						{
							classid: 129,
							id: 31502,
							title: '年度总结：2016年，我们测评过的山地车盘点'
						},
						{
							classid: 129,
							id: 30468,
							title: '入门山地车？选这些就够了！20款入门车大集合'
						},
						{
							classid: 15,
							id: 23645,
							title: '入门车怎么选？新手3000元购车攻略'
						},
						{
							classid: 129,
							id: 25365,
							title: '破风未退烧 BIKETO评测过的入门公路车介绍'
						},
						{
							classid: 129,
							id: 29069,
							title: '入门之后玩什么：最具性价比的中高端公路车盘点'
						},
						{
							classid: 129,
							id: 29195,
							title: '高端玩家玩什么：2017新款热门高端公路车盘点'
						},
						{
							classid: 117,
							id: 25579,
							title: '旅行车品牌盘点（中国篇）：挑辆好车再去浪'
						},
						{
							classid: 117,
							id: 25706,
							title: '国际旅行车品牌盘点：单车旅行也可以很优雅'
						}
					]
				},
				{
					pic: 'img/icon1-3.png',
					title: '自行车材质',
					flag: false,
					news: [{
							classid: 15,
							id: 10293,
							title: '新手选车指南一二三'
						},
						{
							classid: 15,
							id: 9737,
							title: '钢架管材及工艺'
						},
						{
							classid: 129,
							id: 26896,
							title: '钢架恒久远，一架永流传 自行车钢架传承'
						},
						{
							classid: 3,
							id: 13108,
							title: '认识车架管材―之铝合金篇'
						},
						{
							classid: 38,
							id: 32155,
							title: '深度解析国产碳纤维的现状及其在自行车上的应用'
						},
						{
							classid: 15,
							id: 8391,
							title: '浅析钛合金材料在自行车的运用'
						}
					]
				},
				{
					pic: 'img/icon1-4.png',
					title: '装备指南',
					flag: false,
					news: [{
							classid: 97,
							id: 29574,
							title: '新手向——买前不要再日常  “58、68该选啥？”'
						},
						{
							classid: 15,
							id: 32072,
							title: '发挥最大潜能 避震预压设置'
						},
						{
							classid: 97,
							id: 32504,
							title: '公路轮组买方指南 献给准备升级轮组的新手'
						},
						{
							classid: 15,
							id: 33292,
							title: '单盘还是双盘？来听听Shimano给你的建议'
						},
						{
							classid: 117,
							id: 32844,
							title: '我们该如何选择那些任劳任怨的货架'
						},
						{
							classid: 15,
							id: 31292,
							title: '流言粉碎机：关于“气动”的误区'
						},
						{
							classid: 81,
							id: 32158,
							title: '安全无小事：如何判断头盔何时该更换？'
						},
						{
							classid: 15,
							id: 28671,
							title: '相信科学！自行车圈子有哪些应该破除的谣言'
						},
						{
							classid: 15,
							id: 28436,
							title: '买遍全世界：安利海淘自行车产品攻略'
						},
						{
							classid: 18,
							id: 32896,
							title: '经验谈：2017年川藏骑行装备指南'
						}
					]
				}
			],
			[{
					pic: 'img/icon2-1.png',
					title: '骑行技巧',
					flag: false,
					news: [{
							classid: 15,
							id: 28858,
							title: '铁三训练计划表：4个月备战Ironman70.3'
						},
						{
							classid: 15,
							id: 31082,
							title: '害怕爬坡？6个技巧助你爬坡更给力'
						},
						{
							classid: 15,
							id: 30824,
							title: '冬季山地车技巧指南： 8个技巧让你突飞猛进（一）'
						},
						{
							classid: 15,
							id: 29161,
							title: '新手指南！车手都该掌握的3个核心技巧'
						},
						{
							classid: 15,
							id: 31880,
							title: '还在用120psi胎压？ 论轮胎的正确打气方式'
						},
						{
							classid: 15,
							id: 29270,
							title: '新手指南！夏日骑行常见问题集'
						},
						{
							classid: 15,
							id: 32123,
							title: '气动姿势能多快？风洞中正确姿势的速度优势'
						},
						{
							classid: 15,
							id: 31576,
							title: '从入门到精通 美女教你如何在集团中骑行'
						},
						{
							classid: 15,
							id: 29272,
							title: '只谈风月不谈器材：14题测试你是公路车小白还是大神'
						},
						{
							classid: 36,
							id: 34104,
							title: '男人骑车，这5个习惯能保护前列腺不受伤'
						}
					]
				},
				{
					pic: 'img/icon2-2.png',
					title: '维护保养',
					flag: false,
					news: [{
							classid: 69,
							id: 9790,
							title: '新手DIY：变速器调整图解全攻略(图文)'
						},
						{
							classid: 69,
							id: 29741,
							title: '我想静静 单车九大异响解决方案'
						},
						{
							classid: 69,
							id: 28929,
							title: '车友在家大保健到底需要些啥？'
						},
						{
							classid: 69,
							id: 28498,
							title: '自行车大保健工具盘点：原来修车这么大坑'
						},
						{
							classid: 69,
							id: 22826,
							title: '如何正确清洁你的骑行眼镜'
						},
						{
							classid: 69,
							id: 20975,
							title: '大师傅教你刹车灌油 5分钟极速完成'
						},
						{
							classid: 69,
							id: 19678,
							title: '花鼓勤保养-正确方法长效保护'
						},
						{
							classid: 69,
							id: 14981,
							title: '[视频]山地车的日常维护保养'
						},
						{
							classid: 69,
							id: 13682,
							title: '[技术贴]制动液的类型及选用'
						},
						{
							classid: 69,
							id: 13579,
							title: '山地车SPD自锁脚踏拆卸、清洗、上油、保养教程'
						}
					]
				},
				{
					pic: 'img/icon2-3.png',
					title: '骑行安全',
					flag: false,
					news: [{
							classid: 81,
							id: 32875,
							title: '真假死飞论：山寨神车的锅，死飞不背'
						},
						{
							classid: 81,
							id: 32158,
							title: '安全无小事：如何判断头盔何时该更换？'
						},
						{
							classid: 81,
							id: 31095,
							title: '专治不服：十大马路杀手对应法则'
						},
						{
							classid: 81,
							id: 27720,
							title: '骑行安全常识丨盘点那些年我们摔过的车，新手必看！'
						},
						{
							classid: 81,
							id: 27696,
							title: '美骑保险科普丨保险理赔的几个重要时间点'
						},
						{
							classid: 81,
							id: 24695,
							title: '摔车后你必须要做的6件事'
						},
						{
							classid: 81,
							id: 23935,
							title: '你的骑行安全么？六种常见骑行事故原因分析'
						},
						{
							classid: 81,
							id: 22251,
							title: '车友必看：自行车安全出行指南V1.0 常识篇'
						},
						{
							classid: 81,
							id: 16628,
							title: '孩子安全骑车指导'
						},
						{
							classid: 81,
							id: 13389,
							title: '户外骑行普通伤口处理：擦伤，割伤，磕伤，扭伤及软组织伤(图文)'
						}
					]
				},
				{
					pic: 'img/icon2-4.png',
					title: '体能健康',
					flag: false,
					news: [{
							classid: 36,
							id: 32648,
							title: '知识讲堂：自行车尺寸不适所导致的5种运动损伤'
						},
						{
							classid: 36,
							id: 31854,
							title: '干货！抽筋的成因及预防解决方法'
						},
						{
							classid: 36,
							id: 31628,
							title: '可怕！有关酒精和骑行的真相'
						},
						{
							classid: 36,
							id: 30895,
							title: '骑完想不想啪啪啪？浅析耐力骑行与性冲动'
						},
						{
							classid: 36,
							id: 30596,
							title: '当我们骑车时用到了哪些肌肉？'
						},
						{
							classid: 36,
							id: 28652,
							title: '新手指南：夏季骑行补水的6个小常识'
						}
					]
				}
			],
			[{
					pic: 'img/icon3-1.png',
					title: '城市周边路线',
					flag: false,
					news: [{
							classid: 22,
							id: 31787,
							title: '深圳最适合骑车的7条海边路线，你骑过几条？'
						},
						{
							classid: 22,
							id: 28447,
							title: '城市周边丨雪拥蓝关马不前-西安骑行线路（二）'
						},
						{
							classid: 22,
							id: 24123,
							title: '城市周边丨四川骑行路线：成都周边短途篇'
						},
						{
							classid: 22,
							id: 27615,
							title: '城市周边丨昆明你肯定没骑过的高山峡谷'
						},
						{
							classid: 22,
							id: 26454,
							title: '城市周边骑行路线（长沙篇）'
						},
						{
							classid: 22,
							id: 32600,
							title: '越骑越美！简直不能更赞的6条沈阳休闲骑行路线'
						},
						{
							classid: 22,
							id: 26506,
							title: '[持续更新]国内各城市的公路拉练胜地大汇总！'
						}
					]
				},
				{
					pic: 'img/icon3-2.png',
					title: '自行车场地',
					flag: false,
					news: [{
							classid: 22,
							id: 23656,
							title: '破风越野我都要 国内单车公园盘点'
						},
						{
							classid: 86,
							id: 21581,
							title: '最大室内山地车公园：深埋地下30米'
						},
						{
							classid: 140,
							id: 31919,
							title: '山地车VS滑雪 分享一个不走套路的公园'
						},
						{
							classid: 75,
							id: 31916,
							title: '视频丨《轮回四季》：威尔士山地车公园骑行之旅'
						},
						{
							classid: 89,
							id: 28364,
							title: '速降新嗨法——相约诺客多乐美地山地车公园'
						},
						{
							classid: 38,
							id: 27545,
							title: '剪彩！浙江平湖九龙山国际自行车公园开幕'
						},
						{
							classid: 5,
							id: 25037,
							title: '“城会玩” 重力海岸速降公园开启逗逼模式'
						},
						{
							classid: 10,
							id: 17983,
							title: '天使与魔鬼——美国天使之火山地车公园'
						},
						{
							classid: 38,
							id: 17537,
							title: '美国密尔沃基室内山地车公园 BIKETO记者初体验'
						},
						{
							classid: 10,
							id: 23872,
							title: '除了惠斯勒 加拿大还有个被忽略了的骑行地'
						}
					]
				},
				{
					pic: 'img/icon3-3.png',
					title: '探险路线',
					flag: false,
					news: [{
							classid: 22,
							id: 28882,
							title: '经典路线丨环青海湖骑行攻略与常见问题解答'
						},
						{
							classid: 22,
							id: 25069,
							title: '[XC路线] 各地骑友推荐的越野路线汇总'
						},
						{
							classid: 22,
							id: 25021,
							title: '7个你有生之年必须要去骑一次的地方'
						},
						{
							classid: 22,
							id: 24741,
							title: '国内10条百公里骑行路线推荐'
						},
						{
							classid: 22,
							id: 22440,
							title: '16条藏区骑行路线攻略汇总'
						},
						{
							classid: 22,
							id: 26229,
							title: '经典路线 | 中尼线骑行攻略'
						},
						{
							classid: 22,
							id: 30569,
							title: '亚洲8条史诗级骑行路线，中国就贡献了4.5条'
						}
					]
				},
				{
					pic: 'img/icon3-4.png',
					title: '4+2骑行',
					flag: false,
					news: [{
							classid: 22,
							id: 24974,
							title: '[周末短途]广东最美英西峰林4+2骑行路书'
						},
						{
							classid: 73,
							id: 24760,
							title: '“4+2 ”蓄势待发，万事俱备，只欠东风'
						},
						{
							classid: 22,
							id: 22236,
							title: '4+2要怎么玩：我与泰国有个约会'
						},
						{
							classid: 2,
							id: 12155,
							title: '4+2——六个轮子新运动生活(图文)'
						},
						{
							classid: 10,
							id: 10932,
							title: '[影像志]奔向远方：木里-稻城4+2穿越(图文)'
						},
					]
				}
			]

		]
	},
	methods: {
		choose(i) {
			this.index = i;
		},
		open(i1, i2) {
			let el = $("#guide>ul").eq(i1).children().eq(i2);
			this.guide[i1][i2].flag = !this.guide[i1][i2].flag;
			if(this.guide[i1][i2].flag) {
				el.find(".list").slideDown(100);
				el.find(".arrow").css("transform", "rotateX(0deg)");
			} else {
				el.find(".list").slideUp(100);
				el.find(".arrow").css("transform", "rotateX(180deg)");
			}

		},
		view(v){
			window.location.href = 'newsInfo.html?classid='+v.classid+'&id='+v.id;
		}
	}
})