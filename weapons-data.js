const commonAvatars = ["🛡️", "🎖️", "🛰️", "🛫", "🚢", "🪖", "📡", "⚙️", "🔥", "⭐"];

function commonsImage(filename, caption, sourceLevel = "Wikimedia Commons 公开图片") {
  return {
    url: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=1400`,
    caption,
    sourceName: "Wikimedia Commons",
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${filename.replace(/ /g, "_")}`,
    sourceLevel,
    license: "按 Wikimedia Commons 文件页授权说明"
  };
}

function source(name, url, level) {
  return { name, url, level };
}

window.weaponAtlasData = {
  avatars: commonAvatars,
  weapons: [
    {
      id: "glock-17",
      nameZh: "格洛克17",
      nameEn: "Glock 17",
      aliases: ["格洛克", "G17", "Glock17"],
      category: "单兵武器",
      subCategory: "手枪",
      country: "奥地利",
      maker: "Glock Ges.m.b.H.",
      status: "现役 / 执法与民用广泛使用",
      credibility: "A",
      summary: "格洛克17是奥地利 Glock 公司推出的 9×19mm 半自动手枪，以聚合物枪身、较轻重量和较高可靠性闻名，是现代执法与军用手枪中极具代表性的型号之一。",
      basic: {
        "中文名": "格洛克17",
        "英文名": "Glock 17",
        "分类": "单兵武器 / 手枪",
        "国家 / 地区": "奥地利",
        "制造商": "Glock Ges.m.b.H.",
        "服役时间": "1982年至今"
      },
      specs: {
        "口径": "9×19mm",
        "全长": "约 204 mm",
        "重量": "约 625 g 空枪",
        "弹匣 / 弹容量": "标准 17 发",
        "操作方式": "短后坐、击针平移式"
      },
      images: [
        commonsImage("Glock 17 Gen 4 Pistol.JPG", "Glock 17 Gen 4 侧面图"),
        commonsImage("Glock 17.JPG", "Glock 17 手枪公开图片")
      ],
      sources: [
        source("Glock 官方产品页", "https://us.glock.com/en/pistols/g17", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/wiki/File:Glock_17_Gen_4_Pistol.JPG", "公开图片库")
      ]
    },
    {
      id: "m1911",
      nameZh: "柯尔特 M1911",
      nameEn: "Colt M1911",
      aliases: ["M1911", "1911手枪", "Colt 1911"],
      category: "单兵武器",
      subCategory: "手枪",
      country: "美国",
      maker: "Colt 等",
      status: "退居次要位置 / 历史经典型号",
      credibility: "B",
      summary: "M1911 是约翰·勃朗宁设计的 .45 ACP 半自动手枪，曾长期作为美军制式手枪，影响了后续大量现代手枪设计。",
      basic: {
        "中文名": "柯尔特 M1911",
        "英文名": "Colt M1911",
        "分类": "单兵武器 / 手枪",
        "国家 / 地区": "美国",
        "设计者": "约翰·勃朗宁",
        "服役时间": "1911年起"
      },
      specs: {
        "口径": ".45 ACP",
        "全长": "约 216 mm",
        "重量": "约 1.1 kg",
        "弹匣 / 弹容量": "常见 7 发",
        "操作方式": "短后坐、单动"
      },
      images: [
        commonsImage("M1911A1 - Army Museum.jpg", "M1911A1 展示图"),
        commonsImage("M1911A1 .45 ACP.jpg", "M1911A1 公开图片")
      ],
      sources: [
        source("Colt 历史资料页", "https://www.colt.com/", "官方制造商"),
        source("Britannica: M1911", "https://www.britannica.com/technology/M1911-pistol", "权威百科")
      ]
    },
    {
      id: "beretta-92",
      nameZh: "贝瑞塔 92",
      nameEn: "Beretta 92",
      aliases: ["M9", "Beretta 92FS", "贝瑞塔手枪"],
      category: "单兵武器",
      subCategory: "手枪",
      country: "意大利",
      maker: "Beretta",
      status: "现役 / 历史广泛服役",
      credibility: "A",
      summary: "贝瑞塔92系列是意大利 Beretta 公司的经典手枪，美军 M9 就源自该系列，在军警领域长期服役。",
      basic: {
        "中文名": "贝瑞塔 92",
        "英文名": "Beretta 92",
        "分类": "单兵武器 / 手枪",
        "国家 / 地区": "意大利",
        "制造商": "Beretta",
        "服役时间": "1970年代起"
      },
      specs: {
        "口径": "9×19mm",
        "全长": "约 217 mm",
        "重量": "约 950 g",
        "弹匣 / 弹容量": "常见 15 发",
        "操作方式": "短后坐、双动 / 单动"
      },
      images: [
        commonsImage("Beretta 92FS Inox with magazine.jpg", "Beretta 92FS 公开图片"),
        commonsImage("M9-pistolet.jpg", "M9 军用型公开图片")
      ],
      sources: [
        source("Beretta 官方产品页", "https://www.beretta.com/", "官方制造商"),
        source("U.S. Army M9 历史资料", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "desert-eagle",
      nameZh: "沙漠之鹰",
      nameEn: "Desert Eagle",
      aliases: ["Desert Eagle", "沙鹰"],
      category: "单兵武器",
      subCategory: "手枪",
      country: "以色列 / 美国",
      maker: "Magnum Research / IMI",
      status: "民用与展示性知名",
      credibility: "B",
      summary: "沙漠之鹰是大口径半自动手枪，以夸张外形和高后坐力而闻名，在流行文化中极具辨识度。",
      basic: {
        "中文名": "沙漠之鹰",
        "英文名": "Desert Eagle",
        "分类": "单兵武器 / 手枪",
        "国家 / 地区": "以色列 / 美国",
        "制造商": "Magnum Research / IMI",
        "服役状态": "以民用与展示知名"
      },
      specs: {
        "口径": ".357 Magnum / .44 Magnum / .50 AE",
        "全长": "随型号不同",
        "重量": "较重，依型号不同",
        "弹匣 / 弹容量": "依口径不同",
        "操作方式": "导气式半自动"
      },
      images: [
        commonsImage("Desert Eagle .50AE black.jpg", "Desert Eagle .50AE"),
        commonsImage("Desert Eagle Pistol.jpg", "沙漠之鹰公开图片")
      ],
      sources: [
        source("Magnum Research 官方资料", "https://www.magnumresearch.com/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "ak-47",
      nameZh: "AK-47",
      nameEn: "AK-47",
      aliases: ["AK", "卡拉什尼科夫"],
      category: "单兵武器",
      subCategory: "步枪",
      country: "苏联",
      maker: "伊热夫斯克机械厂等",
      status: "多国仍在使用",
      credibility: "B",
      summary: "AK-47 是苏联在二战后研制的 7.62×39mm 突击步枪，因结构相对简单、环境适应性强而成为世界范围内最知名的步枪系统之一。",
      basic: {
        "中文名": "AK-47",
        "英文名": "AK-47",
        "分类": "单兵武器 / 步枪",
        "国家 / 地区": "苏联",
        "设计者": "米哈伊尔·卡拉什尼科夫",
        "服役时间": "1949年起"
      },
      specs: {
        "口径": "7.62×39mm",
        "全长": "约 870 mm",
        "重量": "约 3.5 至 4.3 kg",
        "弹匣 / 弹容量": "常见 30 发",
        "操作方式": "长行程导气活塞"
      },
      images: [
        commonsImage("AK-47 type II Part DM-ST-89-01131.jpg", "AK-47 Type II 展示图"),
        commonsImage("AK-47 assault rifle.jpg", "AK-47 公开图片")
      ],
      sources: [
        source("Britannica: AK-47", "https://www.britannica.com/technology/AK-47", "权威百科"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/wiki/File:AK-47_type_II_Part_DM-ST-89-01131.jpg", "公开图片库")
      ]
    },
    {
      id: "m16",
      nameZh: "M16 步枪",
      nameEn: "M16 rifle",
      aliases: ["M16", "AR-15 军用系谱"],
      category: "单兵武器",
      subCategory: "步枪",
      country: "美国",
      maker: "Colt 等",
      status: "历史服役广泛 / 部分型号仍使用",
      credibility: "A",
      summary: "M16 是美军长期装备的 5.56×45mm 制式步枪，轻量化与小口径高速弹理念影响深远。",
      basic: {
        "中文名": "M16 步枪",
        "英文名": "M16 rifle",
        "分类": "单兵武器 / 步枪",
        "国家 / 地区": "美国",
        "制造商": "Colt 等",
        "服役时间": "1960年代起"
      },
      specs: {
        "口径": "5.56×45mm NATO",
        "全长": "约 1000 mm，依型号不同",
        "重量": "约 3.3 kg 起",
        "弹匣 / 弹容量": "20 / 30 发常见",
        "操作方式": "导气式旋转闭锁"
      },
      images: [
        commonsImage("M16A2 noBG.jpg", "M16A2 公开图片"),
        commonsImage("M16A4 rifle.jpg", "M16A4 公开图片")
      ],
      sources: [
        source("U.S. Army Fact Files", "https://www.army.mil/", "国家 / 军方公开资料入口"),
        source("Colt 官方资料", "https://www.colt.com/", "官方制造商")
      ]
    },
    {
      id: "hk416",
      nameZh: "HK416",
      nameEn: "HK416",
      aliases: ["HK 416", "Heckler & Koch 416"],
      category: "单兵武器",
      subCategory: "步枪",
      country: "德国",
      maker: "Heckler & Koch",
      status: "现役 / 特种作战常见",
      credibility: "A",
      summary: "HK416 是德国 Heckler & Koch 推出的导气活塞式步枪，兼具 AR 平台操作习惯与更强环境适应性，被多国军警力量采用。",
      basic: {
        "中文名": "HK416",
        "英文名": "HK416",
        "分类": "单兵武器 / 步枪",
        "国家 / 地区": "德国",
        "制造商": "Heckler & Koch",
        "服役状态": "现役"
      },
      specs: {
        "口径": "5.56×45mm NATO",
        "全长": "依枪管长度不同",
        "重量": "约 3.1 kg 起",
        "弹匣 / 弹容量": "30 发常见",
        "操作方式": "短行程活塞"
      },
      images: [
        commonsImage("HK416A5 - noBG.png", "HK416A5 公开图片"),
        commonsImage("HK416.jpg", "HK416 公开展示图")
      ],
      sources: [
        source("Heckler & Koch 官方产品页", "https://www.heckler-koch.com/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "qbz-95",
      nameZh: "95式自动步枪",
      nameEn: "QBZ-95",
      aliases: ["QBZ-95", "95式", "95式步枪"],
      category: "单兵武器",
      subCategory: "步枪",
      country: "中国",
      maker: "中国兵器工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "95式自动步枪是中国小口径无托步枪系统的重要代表型号，长期装备中国军队。",
      basic: {
        "中文名": "95式自动步枪",
        "英文名": "QBZ-95",
        "分类": "单兵武器 / 步枪",
        "国家 / 地区": "中国",
        "服役时间": "1990年代后期起",
        "当前状态": "现役"
      },
      specs: {
        "口径": "5.8×42mm",
        "全长": "约 746 mm",
        "重量": "约 3.25 kg",
        "弹匣 / 弹容量": "30 发",
        "操作方式": "导气式"
      },
      images: [
        commonsImage("QBZ-95 noBG.jpg", "QBZ-95 公开图片"),
        commonsImage("QBZ-95B.jpg", "QBZ-95B 公开图片")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "mp5",
      nameZh: "MP5 冲锋枪",
      nameEn: "MP5",
      aliases: ["HK MP5", "MP5 冲锋枪"],
      category: "单兵武器",
      subCategory: "冲锋枪",
      country: "德国",
      maker: "Heckler & Koch",
      status: "现役 / 历史广泛使用",
      credibility: "A",
      summary: "MP5 是 Heckler & Koch 推出的 9mm 冲锋枪，以可控性和精度闻名，在军警反恐行动中极具代表性。",
      basic: {
        "中文名": "MP5 冲锋枪",
        "英文名": "MP5",
        "分类": "单兵武器 / 冲锋枪",
        "国家 / 地区": "德国",
        "制造商": "Heckler & Koch",
        "服役时间": "1960年代起"
      },
      specs: {
        "口径": "9×19mm",
        "全长": "依型号不同",
        "重量": "约 2.5 至 3.4 kg",
        "弹匣 / 弹容量": "15 / 30 发常见",
        "操作方式": "滚柱延迟反冲"
      },
      images: [
        commonsImage("HK-MP5A5.JPG", "MP5A5 公开图片"),
        commonsImage("MP5A3.jpg", "MP5A3 公开图片")
      ],
      sources: [
        source("Heckler & Koch 官方产品页", "https://www.heckler-koch.com/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "p90",
      nameZh: "P90 冲锋枪",
      nameEn: "FN P90",
      aliases: ["P90", "FN P90"],
      category: "单兵武器",
      subCategory: "冲锋枪",
      country: "比利时",
      maker: "FN Herstal",
      status: "现役 / 特种用途明显",
      credibility: "A",
      summary: "P90 是 FN Herstal 推出的个人防卫武器，以紧凑无托布局和上置供弹机构著称。",
      basic: {
        "中文名": "P90 冲锋枪",
        "英文名": "FN P90",
        "分类": "单兵武器 / 冲锋枪",
        "国家 / 地区": "比利时",
        "制造商": "FN Herstal",
        "服役状态": "现役"
      },
      specs: {
        "口径": "5.7×28mm",
        "全长": "约 500 mm",
        "重量": "约 2.5 kg",
        "弹匣 / 弹容量": "50 发",
        "操作方式": "自由枪机反冲"
      },
      images: [
        commonsImage("FN P90 noBG.png", "FN P90 公开图片"),
        commonsImage("P90-smg.jpg", "P90 展示图")
      ],
      sources: [
        source("FN Herstal 官方产品页", "https://fnherstal.com/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "barrett-m82",
      nameZh: "巴雷特 M82",
      nameEn: "Barrett M82",
      aliases: ["M82", "M107", "巴雷特"],
      category: "单兵武器",
      subCategory: "狙击步枪",
      country: "美国",
      maker: "Barrett Firearms",
      status: "现役 / 远程反器材任务常见",
      credibility: "A",
      summary: "巴雷特 M82 系列是美国产 .50 BMG 半自动反器材步枪，以远程破坏能力和强烈辨识度闻名。",
      basic: {
        "中文名": "巴雷特 M82",
        "英文名": "Barrett M82",
        "分类": "单兵武器 / 狙击步枪",
        "国家 / 地区": "美国",
        "制造商": "Barrett Firearms",
        "服役状态": "现役"
      },
      specs: {
        "口径": ".50 BMG",
        "全长": "约 1.45 m",
        "重量": "约 13 kg 以上",
        "弹匣 / 弹容量": "10 发常见",
        "操作方式": "短后坐半自动"
      },
      images: [
        commonsImage("M82A1 4682.jpg", "Barrett M82A1 公开图片"),
        commonsImage("Barrett M82A1 .50cal.jpg", "Barrett M82A1 展示图")
      ],
      sources: [
        source("Barrett 官方产品页", "https://barrett.net/", "官方制造商"),
        source("U.S. military public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "rpg-7",
      nameZh: "RPG-7",
      nameEn: "RPG-7",
      aliases: ["火箭筒", "反坦克火箭筒", "RPG"],
      category: "单兵武器",
      subCategory: "火箭筒 / 榴弹发射器",
      country: "苏联",
      maker: "Bazalt 等",
      status: "多国仍在使用",
      credibility: "B",
      summary: "RPG-7 是苏联研制的肩射式反装甲武器，结构简单、成本较低、弹种丰富，在世界多地被长期使用。",
      basic: {
        "中文名": "RPG-7",
        "英文名": "RPG-7",
        "分类": "单兵武器 / 火箭筒",
        "国家 / 地区": "苏联",
        "服役时间": "1961年前后起",
        "主要用途": "反装甲 / 火力支援"
      },
      specs: {
        "口径": "发射筒约 40 mm",
        "弹药": "火箭助推榴弹",
        "全长": "约 950 mm",
        "重量": "约 7 kg",
        "操作方式": "肩射、无后坐发射"
      },
      images: [
        commonsImage("RPG-7 detached.jpg", "RPG-7 发射器与弹药"),
        commonsImage("RPG-7.JPG", "RPG-7 展示图")
      ],
      sources: [
        source("US Army OPFOR Worldwide Equipment Guide", "https://odin.tradoc.army.mil/WEG", "国家 / 军方公开资料"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/wiki/File:RPG-7_detached.jpg", "公开图片库")
      ]
    },
    {
      id: "m1-abrams",
      nameZh: "M1 艾布拉姆斯主战坦克",
      nameEn: "M1 Abrams",
      aliases: ["M1A1", "M1A2", "艾布拉姆斯", "Abrams"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "美国",
      maker: "General Dynamics Land Systems",
      status: "现役",
      credibility: "A",
      summary: "M1 Abrams 是美国主战坦克家族，采用复合装甲和燃气轮机动力，M1A1 与 M1A2 等型号长期作为美国陆军装甲力量核心。",
      basic: {
        "中文名": "M1 艾布拉姆斯主战坦克",
        "英文名": "M1 Abrams",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "美国",
        "制造商": "General Dynamics Land Systems",
        "服役时间": "1980年至今"
      },
      specs: {
        "战斗全重": "约 60 吨以上",
        "乘员": "4 人",
        "主炮": "120 mm 滑膛炮",
        "副武器": "机枪等",
        "发动机": "燃气轮机",
        "最大速度": "公路约 67 km/h"
      },
      images: [
        commonsImage("M1A2 Abrams Tank - Flickr - DVIDSHUB.jpg", "M1A2 Abrams 主战坦克", "国家 / 军方公开资料"),
        commonsImage("Abrams-transparent.png", "M1 Abrams 公开展示图")
      ],
      sources: [
        source("U.S. Army: M1 Abrams", "https://www.army.mil/article/92126/m1_abrams", "国家 / 军方公开资料"),
        source("General Dynamics Land Systems: Abrams", "https://www.gdls.com/products/tracked-combat/Abrams.html", "官方制造商")
      ]
    },
    {
      id: "leopard-2",
      nameZh: "豹2主战坦克",
      nameEn: "Leopard 2",
      aliases: ["Leopard 2", "豹2坦克"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "德国",
      maker: "Krauss-Maffei Wegmann",
      status: "现役 / 多国装备",
      credibility: "A",
      summary: "豹2是德国主战坦克家族，凭借火力、防护和机动性的平衡在欧洲及多国军队中长期服役。",
      basic: {
        "中文名": "豹2主战坦克",
        "英文名": "Leopard 2",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "德国",
        "制造商": "Krauss-Maffei Wegmann",
        "服役状态": "现役 / 多国装备"
      },
      specs: {
        "战斗全重": "依型号不同",
        "乘员": "4 人",
        "主炮": "120 mm 滑膛炮",
        "副武器": "机枪等",
        "发动机": "柴油发动机",
        "最大速度": "约 68 至 72 km/h"
      },
      images: [
        commonsImage("Leopard 2 A7.JPG", "Leopard 2A7 公开图片"),
        commonsImage("Leopard 2A6M CAN tank.jpg", "Leopard 2A6M 展示图")
      ],
      sources: [
        source("KMW 官方资料", "https://www.knds.com/", "官方制造商"),
        source("德国联邦国防军公开资料", "https://www.bundeswehr.de/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "t-90",
      nameZh: "T-90 主战坦克",
      nameEn: "T-90",
      aliases: ["T90", "T-90坦克"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "俄罗斯",
      maker: "Uralvagonzavod",
      status: "现役",
      credibility: "B",
      summary: "T-90 是俄罗斯主战坦克家族，延续了苏俄坦克紧凑布局路线，并持续发展多种现代化改型。",
      basic: {
        "中文名": "T-90 主战坦克",
        "英文名": "T-90",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "俄罗斯",
        "制造商": "Uralvagonzavod",
        "服役状态": "现役"
      },
      specs: {
        "战斗全重": "约 46 至 50 吨，依型号不同",
        "乘员": "3 人",
        "主炮": "125 mm 滑膛炮",
        "副武器": "机枪等",
        "发动机": "柴油发动机",
        "最大速度": "约 60 km/h 级别"
      },
      images: [
        commonsImage("T-90A tank - Flickr - Jayel Aheram.jpg", "T-90A 公开图片"),
        commonsImage("T-90 Tank.jpg", "T-90 展示图")
      ],
      sources: [
        source("Uralvagonzavod 官方资料", "https://uvz.ru/", "官方制造商"),
        source("Jane's / Britannica 等权威资料参考", "https://www.britannica.com/", "权威资料入口")
      ]
    },
    {
      id: "type-99",
      nameZh: "99式主战坦克",
      nameEn: "Type 99 tank",
      aliases: ["99式", "ZTZ-99"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "中国",
      maker: "中国兵器工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "99式主战坦克是中国第三代主战坦克代表型号之一，装备中国陆军装甲部队。",
      basic: {
        "中文名": "99式主战坦克",
        "英文名": "Type 99 tank",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "中国",
        "服役状态": "现役",
        "主要用途": "主战坦克"
      },
      specs: {
        "战斗全重": "公开资料存在不同说法",
        "乘员": "3 人",
        "主炮": "125 mm 滑膛炮",
        "副武器": "机枪等",
        "发动机": "公开资料有限",
        "最大速度": "公开资料有限"
      },
      images: [
        commonsImage("Type 99A tank front left side.jpg", "99A 型公开图片"),
        commonsImage("Type 99A MBT 20170902.jpg", "99A 型展示图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "m2-bradley",
      nameZh: "M2 布雷德利步兵战车",
      nameEn: "M2 Bradley",
      aliases: ["Bradley", "M2 Bradley"],
      category: "陆战装备",
      subCategory: "装甲车",
      country: "美国",
      maker: "BAE Systems",
      status: "现役",
      credibility: "A",
      summary: "M2 Bradley 是美军重要步兵战车平台，兼具机动运兵与直瞄火力支援能力。",
      basic: {
        "中文名": "M2 布雷德利步兵战车",
        "英文名": "M2 Bradley",
        "分类": "陆战装备 / 装甲车",
        "国家 / 地区": "美国",
        "制造商": "BAE Systems",
        "服役状态": "现役"
      },
      specs: {
        "战斗全重": "依型号不同",
        "乘员": "3 + 载员",
        "主炮": "25 mm 机关炮",
        "副武器": "TOW 导弹、机枪等",
        "发动机": "柴油发动机",
        "最大速度": "约 56 km/h 级别"
      },
      images: [
        commonsImage("Bradley Fighting Vehicle.jpg", "Bradley 步兵战车"),
        commonsImage("M2A3 Bradley in Iraq.jpg", "M2A3 Bradley 公开图片")
      ],
      sources: [
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口"),
        source("BAE Systems 官方资料", "https://www.baesystems.com/", "官方制造商")
      ]
    },
    {
      id: "himars",
      nameZh: "HIMARS 火箭炮系统",
      nameEn: "M142 HIMARS",
      aliases: ["HIMARS", "M142"],
      category: "陆战装备",
      subCategory: "自行火炮",
      country: "美国",
      maker: "Lockheed Martin",
      status: "现役",
      credibility: "A",
      summary: "M142 HIMARS 是美军高机动火箭炮系统，以快速部署和远程火力打击能力受到广泛关注。",
      basic: {
        "中文名": "HIMARS 火箭炮系统",
        "英文名": "M142 HIMARS",
        "分类": "陆战装备 / 自行火炮",
        "国家 / 地区": "美国",
        "制造商": "Lockheed Martin",
        "服役状态": "现役"
      },
      specs: {
        "底盘": "轮式高机动平台",
        "乘员": "3 人常见",
        "武器": "227 mm 火箭弹 / 战术导弹",
        "最大速度": "公路高机动",
        "特点": "快速部署与撤收"
      },
      images: [
        commonsImage("M142 HIMARS.jpg", "M142 HIMARS 公开图片"),
        commonsImage("US Army M142 HIMARS fires rocket.jpg", "HIMARS 发射训练图", "国家 / 军方公开资料")
      ],
      sources: [
        source("Lockheed Martin: HIMARS", "https://www.lockheedmartin.com/", "官方制造商"),
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "f-16",
      nameZh: "F-16 战隼",
      nameEn: "F-16 Fighting Falcon",
      aliases: ["F16", "战隼"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "美国",
      maker: "General Dynamics / Lockheed Martin",
      status: "现役 / 多国服役",
      credibility: "A",
      summary: "F-16 是经典单发多用途战斗机，以高机动、成本相对适中和多任务能力广受欢迎。",
      basic: {
        "中文名": "F-16 战隼",
        "英文名": "F-16 Fighting Falcon",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "美国",
        "制造商": "Lockheed Martin",
        "服役状态": "现役 / 多国服役"
      },
      specs: {
        "机型": "第四代多用途战斗机",
        "乘员": "1 人或双座型",
        "发动机": "单发涡扇发动机",
        "最大速度": "约 Mach 2 级别",
        "武器挂载": "多挂点多用途"
      },
      images: [
        commonsImage("General Dynamics F-16 Fighting Falcon.jpg", "F-16 公开图片"),
        commonsImage("F-16C Falcon.jpg", "F-16C 展示图")
      ],
      sources: [
        source("Lockheed Martin: F-16", "https://www.lockheedmartin.com/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "f-22",
      nameZh: "F-22 猛禽",
      nameEn: "F-22 Raptor",
      aliases: ["F22", "猛禽"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "美国",
      maker: "Lockheed Martin / Boeing",
      status: "现役",
      credibility: "A",
      summary: "F-22 是美国第五代制空战斗机代表型号，以隐身、超巡和态势感知能力著称。",
      basic: {
        "中文名": "F-22 猛禽",
        "英文名": "F-22 Raptor",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "美国",
        "制造商": "Lockheed Martin / Boeing",
        "服役状态": "现役"
      },
      specs: {
        "机型": "第五代制空战斗机",
        "乘员": "1 人",
        "发动机": "双发涡扇发动机",
        "最大速度": "Mach 2 级别",
        "特点": "隐身、超音速巡航"
      },
      images: [
        commonsImage("F-22 Raptor edit1.jpg", "F-22 公开图片"),
        commonsImage("F-22A Raptor in flight (cropped).jpg", "F-22 飞行图")
      ],
      sources: [
        source("Lockheed Martin: F-22", "https://www.lockheedmartin.com/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "f-35",
      nameZh: "F-35 闪电 II",
      nameEn: "F-35 Lightning II",
      aliases: ["F35", "Lightning II", "闪电2"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "美国 / 多国项目",
      maker: "Lockheed Martin",
      status: "现役",
      credibility: "A",
      summary: "F-35 是洛克希德·马丁主承包的第五代多用途隐身战斗机，包含 F-35A、F-35B、F-35C 三种主要型号。",
      basic: {
        "中文名": "F-35 闪电 II",
        "英文名": "F-35 Lightning II",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "美国 / 多国项目",
        "制造商": "Lockheed Martin",
        "服役状态": "现役"
      },
      specs: {
        "机型": "第五代多用途战斗机",
        "乘员": "1 人",
        "发动机": "Pratt & Whitney F135",
        "最大速度": "约 Mach 1.6",
        "雷达 / 航电": "AN/APG-81 AESA 等"
      },
      images: [
        commonsImage("F-35A flight (cropped).jpg", "F-35A 飞行图", "国家 / 军方公开资料"),
        commonsImage("F-35 Lightning II.jpg", "F-35 公开图片")
      ],
      sources: [
        source("Lockheed Martin: F-35", "https://www.lockheedmartin.com/en-us/products/f-35.html", "官方制造商"),
        source("F-35 Joint Program Office", "https://www.f35.com/", "官方项目资料")
      ]
    },
    {
      id: "j-20",
      nameZh: "歼-20",
      nameEn: "Chengdu J-20",
      aliases: ["J-20", "威龙", "歼20"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "中国",
      maker: "成都飞机工业集团",
      status: "现役",
      credibility: "C",
      summary: "歼-20 是中国研制的第五代隐身战斗机。公开资料相对有限，因此这里对部分参数采用保守描述。",
      basic: {
        "中文名": "歼-20",
        "英文名": "Chengdu J-20",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "中国",
        "设计单位": "成都飞机工业集团",
        "服役状态": "现役"
      },
      specs: {
        "机型": "第五代隐身战斗机",
        "乘员": "1 人",
        "发动机": "公开资料存在不同阶段型号",
        "最大速度": "公开资料未统一确认",
        "雷达 / 航电": "公开资料有限"
      },
      images: [
        commonsImage("J-20 at Airshow China 2016.jpg", "歼-20 在航展飞行展示"),
        commonsImage("Chengdu J-20 at Airshow China 2022.jpg", "歼-20 公开航展图片")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "su-27",
      nameZh: "苏-27 战斗机",
      nameEn: "Sukhoi Su-27",
      aliases: ["Su-27", "侧卫"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "苏联 / 俄罗斯",
      maker: "Sukhoi",
      status: "现役 / 大量衍生",
      credibility: "B",
      summary: "苏-27 是苏霍伊设计局研制的重型战斗机，为后续苏-30、苏-33、苏-35 等家族奠定基础。",
      basic: {
        "中文名": "苏-27 战斗机",
        "英文名": "Sukhoi Su-27",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "苏联 / 俄罗斯",
        "制造商": "Sukhoi",
        "服役状态": "现役 / 大量衍生"
      },
      specs: {
        "机型": "重型战斗机",
        "乘员": "1 人",
        "发动机": "双发涡扇发动机",
        "最大速度": "Mach 2 级别",
        "特点": "大航程、高机动"
      },
      images: [
        commonsImage("Sukhoi Su-27 in flight.jpg", "苏-27 飞行图"),
        commonsImage("Su-27SM3.JPG", "苏-27 公开图片")
      ],
      sources: [
        source("Sukhoi 官方资料入口", "https://www.uacrussia.ru/en/", "官方制造商入口"),
        source("Britannica / 权威资料入口", "https://www.britannica.com/", "权威资料入口")
      ]
    },
    {
      id: "b-2",
      nameZh: "B-2 幽灵战略轰炸机",
      nameEn: "B-2 Spirit",
      aliases: ["B-2", "幽灵轰炸机"],
      category: "空中装备",
      subCategory: "轰炸机",
      country: "美国",
      maker: "Northrop Grumman",
      status: "现役",
      credibility: "A",
      summary: "B-2 Spirit 是美国隐身战略轰炸机，以飞翼布局和远程渗透打击能力闻名。",
      basic: {
        "中文名": "B-2 幽灵战略轰炸机",
        "英文名": "B-2 Spirit",
        "分类": "空中装备 / 轰炸机",
        "国家 / 地区": "美国",
        "制造商": "Northrop Grumman",
        "服役状态": "现役"
      },
      specs: {
        "机型": "隐身战略轰炸机",
        "乘员": "2 人",
        "发动机": "4 发涡扇发动机",
        "特点": "隐身、远程对地打击",
        "武器挂载": "内置弹舱"
      },
      images: [
        commonsImage("B-2 Spirit side.jpg", "B-2 Spirit 公开图片"),
        commonsImage("B-2 Spirit close up.jpg", "B-2 飞行展示图")
      ],
      sources: [
        source("Northrop Grumman: B-2", "https://www.northropgrumman.com/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "ah-64",
      nameZh: "AH-64 阿帕奇",
      nameEn: "AH-64 Apache",
      aliases: ["阿帕奇", "AH64"],
      category: "空中装备",
      subCategory: "直升机",
      country: "美国",
      maker: "Boeing",
      status: "现役",
      credibility: "A",
      summary: "AH-64 Apache 是美国经典武装直升机，以反装甲、侦察与对地火力支援任务著称。",
      basic: {
        "中文名": "AH-64 阿帕奇",
        "英文名": "AH-64 Apache",
        "分类": "空中装备 / 直升机",
        "国家 / 地区": "美国",
        "制造商": "Boeing",
        "服役状态": "现役"
      },
      specs: {
        "机型": "武装直升机",
        "乘员": "2 人",
        "发动机": "双发涡轴发动机",
        "武器挂载": "机炮、火箭弹、反坦克导弹",
        "特点": "低空突防、对地攻击"
      },
      images: [
        commonsImage("AH-64D Apache Longbow.jpg", "AH-64D Apache Longbow"),
        commonsImage("AH-64 Apache in flight.jpg", "AH-64 飞行图")
      ],
      sources: [
        source("Boeing 官方产品页", "https://www.boeing.com/defense/ah-64-apache/", "官方制造商"),
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "mq-9",
      nameZh: "MQ-9 死神无人机",
      nameEn: "MQ-9 Reaper",
      aliases: ["死神", "MQ9", "Reaper"],
      category: "空中装备",
      subCategory: "无人机",
      country: "美国",
      maker: "General Atomics",
      status: "现役",
      credibility: "A",
      summary: "MQ-9 Reaper 是美国高空长航时察打一体无人机，被广泛用于侦察、监视与精确打击任务。",
      basic: {
        "中文名": "MQ-9 死神无人机",
        "英文名": "MQ-9 Reaper",
        "分类": "空中装备 / 无人机",
        "国家 / 地区": "美国",
        "制造商": "General Atomics",
        "服役状态": "现役"
      },
      specs: {
        "机型": "察打一体无人机",
        "乘员": "地面控制",
        "发动机": "单发螺旋桨发动机",
        "特点": "长航时侦察与打击",
        "武器挂载": "导弹、制导炸弹等"
      },
      images: [
        commonsImage("MQ-9 Reaper unmanned aerial vehicle (cropped).jpg", "MQ-9 Reaper 公开图片"),
        commonsImage("MQ-9 Reaper in flight (cropped).jpg", "MQ-9 飞行图")
      ],
      sources: [
        source("General Atomics 官方资料", "https://www.ga-asi.com/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "nimitz",
      nameZh: "尼米兹级航空母舰",
      nameEn: "Nimitz-class aircraft carrier",
      aliases: ["Nimitz", "CVN-68"],
      category: "海上装备",
      subCategory: "航空母舰",
      country: "美国",
      maker: "Newport News Shipbuilding",
      status: "现役 / 部分退役进程中",
      credibility: "A",
      summary: "尼米兹级航空母舰是美国海军大型核动力航母家族，长期是美国全球海上力量投送核心平台。",
      basic: {
        "中文名": "尼米兹级航空母舰",
        "英文名": "Nimitz-class aircraft carrier",
        "分类": "海上装备 / 航空母舰",
        "国家 / 地区": "美国",
        "制造商": "Newport News Shipbuilding",
        "动力": "核动力"
      },
      specs: {
        "舰种": "航空母舰",
        "排水量": "10万吨级",
        "舰长": "约 333 m",
        "动力系统": "核动力",
        "航速": "30 节以上",
        "舰载机": "固定翼舰载机与直升机"
      },
      images: [
        commonsImage("USS Nimitz (CVN-68).jpg", "尼米兹级公开图片", "国家 / 军方公开资料"),
        commonsImage("USS Nimitz (CVN-68) underway 2009.jpg", "尼米兹级航行图", "国家 / 军方公开资料")
      ],
      sources: [
        source("U.S. Navy Fact File: Aircraft Carriers", "https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169781/aircraft-carriers-cvn/", "国家 / 军方公开资料"),
        source("Naval Vessel Register", "https://www.nvr.navy.mil/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "ford",
      nameZh: "福特级航空母舰",
      nameEn: "Gerald R. Ford-class aircraft carrier",
      aliases: ["Ford-class", "CVN-78", "福特级"],
      category: "海上装备",
      subCategory: "航空母舰",
      country: "美国",
      maker: "Newport News Shipbuilding",
      status: "现役 / 建造中扩编",
      credibility: "A",
      summary: "福特级是美国海军新一代核动力航空母舰，强调电磁弹射、 sortie 效率提升与新舰载系统整合。",
      basic: {
        "中文名": "福特级航空母舰",
        "英文名": "Gerald R. Ford-class aircraft carrier",
        "分类": "海上装备 / 航空母舰",
        "国家 / 地区": "美国",
        "制造商": "Newport News Shipbuilding",
        "动力": "核动力"
      },
      specs: {
        "舰种": "航空母舰",
        "排水量": "10万吨级",
        "舰长": "约 333 m",
        "动力系统": "核动力",
        "航速": "30 节以上",
        "特点": "电磁弹射与新舰载系统"
      },
      images: [
        commonsImage("USS Gerald R. Ford (CVN-78) in Atlantic Ocean.jpg", "福特级公开图片", "国家 / 军方公开资料"),
        commonsImage("USS Gerald R. Ford launching aircraft.jpg", "福特级舰载机运行图", "国家 / 军方公开资料")
      ],
      sources: [
        source("U.S. Navy Fact File: Aircraft Carriers", "https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169781/aircraft-carriers-cvn/", "国家 / 军方公开资料"),
        source("HII 官方资料", "https://www.hii.com/", "官方制造商")
      ]
    },
    {
      id: "arleigh-burke",
      nameZh: "阿利·伯克级驱逐舰",
      nameEn: "Arleigh Burke-class destroyer",
      aliases: ["DDG-51", "伯克级"],
      category: "海上装备",
      subCategory: "驱逐舰",
      country: "美国",
      maker: "Bath Iron Works / Ingalls Shipbuilding",
      status: "现役",
      credibility: "A",
      summary: "阿利·伯克级是美国海军主力宙斯盾导弹驱逐舰，可执行防空、反潜、反舰和对陆打击等任务。",
      basic: {
        "中文名": "阿利·伯克级驱逐舰",
        "英文名": "Arleigh Burke-class destroyer",
        "分类": "海上装备 / 驱逐舰",
        "国家 / 地区": "美国",
        "服役时间": "1991年至今",
        "核心系统": "Aegis Combat System"
      },
      specs: {
        "舰种": "导弹驱逐舰",
        "排水量": "依 Flight 型号不同",
        "舰长": "约 154 至 155 m",
        "动力系统": "燃气轮机",
        "航速": "30 节以上",
        "舰载武器": "Mk 41 VLS、舰炮、反潜系统等"
      },
      images: [
        commonsImage("USS Arleigh Burke (DDG-51) underway in the Atlantic Ocean on 31 March 2010 (100331-N-1831S-115).jpg", "USS Arleigh Burke 航行图", "国家 / 军方公开资料"),
        commonsImage("USS Kidd (DDG-100).jpg", "伯克级 USS Kidd 公开图片", "国家 / 军方公开资料")
      ],
      sources: [
        source("U.S. Navy Fact File: Destroyers - DDG", "https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169871/destroyers-ddg/", "国家 / 军方公开资料"),
        source("Naval Vessel Register", "https://www.nvr.navy.mil/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "type-055",
      nameZh: "055型驱逐舰",
      nameEn: "Type 055 destroyer",
      aliases: ["055", "南昌舰", "Renhai-class"],
      category: "海上装备",
      subCategory: "驱逐舰",
      country: "中国",
      maker: "中国船舶工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "055型驱逐舰是中国海军大型导弹驱逐舰，具备区域防空、反舰、反潜和编队指挥等任务能力。",
      basic: {
        "中文名": "055型驱逐舰",
        "英文名": "Type 055 destroyer",
        "分类": "海上装备 / 驱逐舰",
        "国家 / 地区": "中国",
        "首舰": "南昌舰",
        "服役状态": "现役"
      },
      specs: {
        "舰种": "导弹驱逐舰",
        "排水量": "公开资料多称万吨级",
        "舰长": "公开资料约 180 m",
        "动力系统": "公开资料未统一详列",
        "舰载武器": "垂直发射系统、舰炮等"
      },
      images: [
        commonsImage("PLANS Nanchang (DDG-101) 20210427.jpg", "055型驱逐舰南昌舰公开图片"),
        commonsImage("PLANS Nanchang (DDG-101) 20210427.jpg", "Type 055 destroyer 公开图片")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "virginia",
      nameZh: "弗吉尼亚级攻击核潜艇",
      nameEn: "Virginia-class submarine",
      aliases: ["Virginia-class", "SSN-774"],
      category: "海上装备",
      subCategory: "潜艇",
      country: "美国",
      maker: "General Dynamics Electric Boat / HII",
      status: "现役",
      credibility: "A",
      summary: "弗吉尼亚级是美国海军主力攻击核潜艇家族，兼顾情报侦察、反潜和对陆打击等任务。",
      basic: {
        "中文名": "弗吉尼亚级攻击核潜艇",
        "英文名": "Virginia-class submarine",
        "分类": "海上装备 / 潜艇",
        "国家 / 地区": "美国",
        "动力": "核动力",
        "服役状态": "现役"
      },
      specs: {
        "舰种": "攻击核潜艇",
        "排水量": "依批次不同",
        "动力系统": "核动力",
        "特点": "多用途水下作战",
        "舰载武器": "鱼雷、巡航导弹等"
      },
      images: [
        commonsImage("USS Virginia (SSN-774).jpg", "弗吉尼亚级公开图片", "国家 / 军方公开资料"),
        commonsImage("USS New Hampshire (SSN-778).jpg", "弗吉尼亚级潜艇公开图片", "国家 / 军方公开资料")
      ],
      sources: [
        source("U.S. Navy Fact File: Submarines", "https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169320/attack-submarines-ssn/", "国家 / 军方公开资料"),
        source("General Dynamics Electric Boat", "https://www.gdeb.com/", "官方制造商")
      ]
    },
    {
      id: "tomahawk",
      nameZh: "战斧巡航导弹",
      nameEn: "Tomahawk cruise missile",
      aliases: ["Tomahawk", "BGM-109", "战斧导弹"],
      category: "导弹与弹药",
      subCategory: "巡航导弹",
      country: "美国",
      maker: "Raytheon / RTX",
      status: "现役 / 持续升级",
      credibility: "A",
      summary: "Tomahawk 是美国海军长期使用的远程巡航导弹系统，可由水面舰艇和潜艇发射，用于远程精确打击任务。",
      basic: {
        "中文名": "战斧巡航导弹",
        "英文名": "Tomahawk cruise missile",
        "分类": "导弹与弹药 / 巡航导弹",
        "国家 / 地区": "美国",
        "制造商": "Raytheon / RTX",
        "发射平台": "水面舰艇 / 潜艇"
      },
      specs: {
        "类型": "远程巡航导弹",
        "速度": "亚音速",
        "制导方式": "惯性 / 地形匹配 / GPS 等",
        "弹头": "常规弹头等",
        "推进方式": "涡扇发动机"
      },
      images: [
        commonsImage("Tomahawk Block IV cruise missile - cropped.jpg", "Tomahawk Block IV 巡航导弹", "国家 / 军方公开资料"),
        commonsImage("US Navy 050407-N-0000X-001 A Tactical Tomahawk missile launches from USS Stethem (DDG 63).jpg", "舰艇发射 Tomahawk 导弹", "国家 / 军方公开资料")
      ],
      sources: [
        source("U.S. Navy Fact File: Tomahawk Cruise Missile", "https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/Article/2169229/tomahawk-cruise-missile/", "国家 / 军方公开资料"),
        source("RTX: Tomahawk", "https://www.rtx.com/raytheon/what-we-do/integrated-air-and-missile-defense/tomahawk-cruise-missile", "官方制造商")
      ]
    },
    {
      id: "aim-120",
      nameZh: "AIM-120 AMRAAM",
      nameEn: "AIM-120 AMRAAM",
      aliases: ["AMRAAM", "先进中程空空导弹", "AIM120"],
      category: "导弹与弹药",
      subCategory: "空空导弹",
      country: "美国",
      maker: "Raytheon / RTX",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "AIM-120 AMRAAM 是主动雷达制导的中程空空导弹，被多型战斗机使用，是西方空战武器体系中的代表型号。",
      basic: {
        "中文名": "AIM-120 AMRAAM",
        "英文名": "AIM-120 AMRAAM",
        "分类": "导弹与弹药 / 空空导弹",
        "国家 / 地区": "美国",
        "制造商": "Raytheon / RTX",
        "发射平台": "战斗机"
      },
      specs: {
        "类型": "中程空空导弹",
        "速度": "超音速",
        "制导方式": "主动雷达制导等",
        "弹头": "高爆破片弹头",
        "服役平台": "F-15 / F-16 / F/A-18 / F-35 等"
      },
      images: [
        commonsImage("AIM-120 AMRAAM 02.jpg", "AIM-120 AMRAAM 导弹", "国家 / 军方公开资料"),
        commonsImage("AIM-120 AMRAAM on F-16.jpg", "F-16 挂载 AIM-120")
      ],
      sources: [
        source("RTX: AMRAAM", "https://www.rtx.com/raytheon/what-we-do/air-warfare/advanced-medium-range-air-to-air-missile-amraam", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "aim-9",
      nameZh: "AIM-9 响尾蛇",
      nameEn: "AIM-9 Sidewinder",
      aliases: ["Sidewinder", "响尾蛇导弹", "AIM-9"],
      category: "导弹与弹药",
      subCategory: "空空导弹",
      country: "美国",
      maker: "Raytheon / RTX",
      status: "现役 / 长期迭代",
      credibility: "A",
      summary: "AIM-9 响尾蛇是美国经典近距空空导弹家族，因服役历史长、改型众多而极具代表性。",
      basic: {
        "中文名": "AIM-9 响尾蛇",
        "英文名": "AIM-9 Sidewinder",
        "分类": "导弹与弹药 / 空空导弹",
        "国家 / 地区": "美国",
        "制造商": "Raytheon / RTX",
        "服役状态": "现役"
      },
      specs: {
        "类型": "近距空空导弹",
        "制导方式": "红外制导",
        "速度": "高超声速区间以下的高速导弹",
        "弹头": "高爆破片弹头",
        "特点": "近距格斗广泛使用"
      },
      images: [
        commonsImage("AIM-9L Sidewinder.jpg", "AIM-9L Sidewinder"),
        commonsImage("AIM-9 Sidewinder (1).jpg", "AIM-9 公开图片")
      ],
      sources: [
        source("RTX: Sidewinder", "https://www.rtx.com/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "javelin",
      nameZh: "标枪反坦克导弹",
      nameEn: "FGM-148 Javelin",
      aliases: ["Javelin", "FGM-148", "标枪"],
      category: "导弹与弹药",
      subCategory: "反坦克导弹",
      country: "美国",
      maker: "Javelin Joint Venture",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "FGM-148 Javelin 是便携式反坦克导弹系统，采用发射后不管能力和红外成像制导。",
      basic: {
        "中文名": "标枪反坦克导弹",
        "英文名": "FGM-148 Javelin",
        "分类": "导弹与弹药 / 反坦克导弹",
        "国家 / 地区": "美国",
        "制造商": "Javelin Joint Venture",
        "发射平台": "单兵便携 / 车辆平台"
      },
      specs: {
        "类型": "反坦克导弹",
        "制导方式": "红外成像制导",
        "弹头": "串联战斗部",
        "推进方式": "固体火箭发动机",
        "特点": "发射后不管"
      },
      images: [
        commonsImage("Javelin missile firing.jpg", "Javelin 发射训练图", "国家 / 军方公开资料"),
        commonsImage("FGM-148 Javelin.jpg", "FGM-148 Javelin 系统公开图片")
      ],
      sources: [
        source("Lockheed Martin: Javelin", "https://www.lockheedmartin.com/en-us/products/javelin.html", "官方制造商"),
        source("RTX: Javelin", "https://www.rtx.com/raytheon/what-we-do/land-warfare/javelin", "官方制造商")
      ]
    },
    {
      id: "patriot",
      nameZh: "爱国者防空导弹系统",
      nameEn: "MIM-104 Patriot",
      aliases: ["Patriot", "爱国者", "MIM-104"],
      category: "导弹与弹药",
      subCategory: "防空导弹",
      country: "美国",
      maker: "Raytheon / RTX",
      status: "现役 / 多国部署",
      credibility: "A",
      summary: "爱国者防空导弹系统是美国重要地空导弹系统，承担区域防空和反导等任务。",
      basic: {
        "中文名": "爱国者防空导弹系统",
        "英文名": "MIM-104 Patriot",
        "分类": "导弹与弹药 / 防空导弹",
        "国家 / 地区": "美国",
        "制造商": "Raytheon / RTX",
        "服役状态": "现役 / 多国部署"
      },
      specs: {
        "类型": "地空导弹系统",
        "发射平台": "地面发射",
        "特点": "区域防空与反导",
        "制导方式": "多型多批次发展",
        "组成": "雷达、发射车、导弹等"
      },
      images: [
        commonsImage("Patriot missile system 2.jpg", "Patriot 系统公开图片"),
        commonsImage("Patriot missile launch.jpg", "Patriot 发射图", "国家 / 军方公开资料")
      ],
      sources: [
        source("RTX: Patriot", "https://www.rtx.com/raytheon/what-we-do/integrated-air-and-missile-defense/patriot", "官方制造商"),
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "exocet",
      nameZh: "飞鱼反舰导弹",
      nameEn: "Exocet",
      aliases: ["Exocet", "飞鱼导弹"],
      category: "导弹与弹药",
      subCategory: "反舰导弹",
      country: "法国",
      maker: "MBDA",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "飞鱼导弹是法国著名反舰导弹家族，因海战实战影响而广为人知。",
      basic: {
        "中文名": "飞鱼反舰导弹",
        "英文名": "Exocet",
        "分类": "导弹与弹药 / 反舰导弹",
        "国家 / 地区": "法国",
        "制造商": "MBDA",
        "服役状态": "现役 / 多国使用"
      },
      specs: {
        "类型": "反舰导弹",
        "制导方式": "主动雷达制导",
        "速度": "亚音速",
        "发射平台": "舰艇、飞机、岸基",
        "特点": "海上掠海攻击"
      },
      images: [
        commonsImage("Exocet missile at SIAE 2013 01.jpg", "Exocet 公开图片"),
        commonsImage("Exocet MM40 Block 3.jpg", "Exocet MM40 Block 3")
      ],
      sources: [
        source("MBDA 官方资料", "https://www.mbda-systems.com/", "官方制造商"),
        source("Britannica / 权威资料入口", "https://www.britannica.com/", "权威资料入口")
      ]
    },
    {
      id: "df-21",
      nameZh: "东风-21",
      nameEn: "DF-21",
      aliases: ["DF21", "东风21"],
      category: "导弹与弹药",
      subCategory: "弹道导弹",
      country: "中国",
      maker: "中国航天科技相关单位",
      status: "现役",
      credibility: "C",
      summary: "东风-21 是中国中程弹道导弹家族。公开资料对不同改型能力描述存在差异，因此这里保守展示。",
      basic: {
        "中文名": "东风-21",
        "英文名": "DF-21",
        "分类": "导弹与弹药 / 弹道导弹",
        "国家 / 地区": "中国",
        "服役状态": "现役",
        "公开资料特点": "多改型并存"
      },
      specs: {
        "类型": "中程弹道导弹",
        "推进方式": "固体推进",
        "发射平台": "地面机动发射",
        "射程": "公开资料依改型不同",
        "特点": "多种任务衍生"
      },
      images: [
        commonsImage("DF-21 transporter erector launcher.jpg", "DF-21 公开图片"),
        commonsImage("Dongfeng 21D missile launcher.jpg", "东风-21 发射车公开图片")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "t-14-armata",
      nameZh: "T-14 阿玛塔主战坦克",
      nameEn: "T-14 Armata",
      aliases: ["T-14", "Armata", "阿玛塔"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "俄罗斯",
      maker: "Uralvagonzavod",
      status: "少量公开展示 / 服役状态有限",
      credibility: "B",
      summary: "T-14 Armata 是俄罗斯新一代主战坦克项目，采用无人炮塔和装甲乘员舱等设计，公开信息显示其仍处于有限装备与持续发展状态。",
      basic: {
        "中文名": "T-14 阿玛塔主战坦克",
        "英文名": "T-14 Armata",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "俄罗斯",
        "制造商": "Uralvagonzavod",
        "当前状态": "有限装备 / 公开资料有限"
      },
      specs: {
        "战斗全重": "公开资料约 50 吨级",
        "乘员": "3 人",
        "主炮": "125 mm 滑膛炮",
        "特点": "无人炮塔、装甲乘员舱",
        "发动机": "公开资料存在不同说法"
      },
      images: [
        commonsImage("T-14 Armata in Alabino 2016.jpg", "T-14 Armata 公开图片"),
        commonsImage("T-14 Armata tank at the 2015 Moscow Victory Day Parade rehearsal.jpg", "T-14 阅兵训练图")
      ],
      sources: [
        source("Uralvagonzavod 官方资料入口", "https://uvz.ru/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "challenger-2",
      nameZh: "挑战者2主战坦克",
      nameEn: "Challenger 2",
      aliases: ["Challenger 2", "挑战者2"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "英国",
      maker: "Vickers Defence Systems / BAE Systems",
      status: "现役 / 现代化升级中",
      credibility: "A",
      summary: "挑战者2是英国陆军主战坦克，以防护能力和线膛主炮传统著称，并已启动后续现代化升级计划。",
      basic: {
        "中文名": "挑战者2主战坦克",
        "英文名": "Challenger 2",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "英国",
        "制造商": "Vickers / BAE Systems",
        "当前状态": "现役"
      },
      specs: {
        "战斗全重": "约 60 吨级",
        "乘员": "4 人",
        "主炮": "120 mm 线膛炮",
        "副武器": "机枪等",
        "特点": "重防护、英军主力坦克"
      },
      images: [
        commonsImage("Challenger 2 MBT.jpg", "Challenger 2 公开图片"),
        commonsImage("Challenger 2 tank MOD 45152942.jpg", "挑战者2训练图")
      ],
      sources: [
        source("英国国防部公开资料", "https://www.gov.uk/government/organisations/ministry-of-defence", "国家 / 军方公开资料"),
        source("BAE Systems 官方资料", "https://www.baesystems.com/", "官方制造商")
      ]
    },
    {
      id: "merkava-mk4",
      nameZh: "梅卡瓦 Mk 4 主战坦克",
      nameEn: "Merkava Mark IV",
      aliases: ["Merkava", "Merkava Mk 4", "梅卡瓦4"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "以色列",
      maker: "以色列国防工业体系",
      status: "现役",
      credibility: "B",
      summary: "梅卡瓦 Mk 4 是以色列梅卡瓦坦克家族的重要型号，强调乘员生存、防护和本土作战环境适应。",
      basic: {
        "中文名": "梅卡瓦 Mk 4 主战坦克",
        "英文名": "Merkava Mark IV",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "以色列",
        "制造体系": "以色列国防工业",
        "当前状态": "现役"
      },
      specs: {
        "战斗全重": "60 吨级以上",
        "乘员": "4 人",
        "主炮": "120 mm 滑膛炮",
        "特点": "重视乘员生存与防护",
        "防护系统": "可集成主动防护系统"
      },
      images: [
        commonsImage("Merkava Mark IV 1.jpg", "Merkava Mk 4 公开图片"),
        commonsImage("Merkava4m-Windbreaker-003.jpg", "梅卡瓦 Mk 4M 展示图")
      ],
      sources: [
        source("以色列国防军公开资料入口", "https://www.idf.il/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "eurofighter-typhoon",
      nameZh: "欧洲台风战斗机",
      nameEn: "Eurofighter Typhoon",
      aliases: ["Typhoon", "欧洲台风"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "英国 / 德国 / 意大利 / 西班牙",
      maker: "Eurofighter consortium",
      status: "现役 / 多国装备",
      credibility: "A",
      summary: "欧洲台风是欧洲多国联合研制的双发多用途战斗机，承担制空、对地打击和防空拦截等任务。",
      basic: {
        "中文名": "欧洲台风战斗机",
        "英文名": "Eurofighter Typhoon",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "欧洲多国项目",
        "制造商": "Eurofighter consortium",
        "当前状态": "现役"
      },
      specs: {
        "机型": "多用途战斗机",
        "乘员": "1 人或双座型",
        "发动机": "双发涡扇发动机",
        "最大速度": "Mach 2 级别",
        "特点": "制空与多用途任务"
      },
      images: [
        commonsImage("Eurofighter Typhoon RIAT 2015.jpg", "Eurofighter Typhoon 飞行图"),
        commonsImage("RAF Eurofighter EF-2000 Typhoon F2 Lofting-1.jpg", "台风战斗机公开图片")
      ],
      sources: [
        source("Eurofighter 官方资料", "https://www.eurofighter.com/", "官方项目资料"),
        source("英国皇家空军公开资料", "https://www.raf.mod.uk/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "rafale",
      nameZh: "阵风战斗机",
      nameEn: "Dassault Rafale",
      aliases: ["Rafale", "达索阵风", "阵风"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "法国",
      maker: "Dassault Aviation",
      status: "现役 / 多国采购",
      credibility: "A",
      summary: "阵风是法国达索公司研制的双发多用途战斗机，可执行制空、对地、反舰和核威慑等多种任务。",
      basic: {
        "中文名": "阵风战斗机",
        "英文名": "Dassault Rafale",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "法国",
        "制造商": "Dassault Aviation",
        "当前状态": "现役"
      },
      specs: {
        "机型": "多用途战斗机",
        "乘员": "1 人或双座型",
        "发动机": "双发涡扇发动机",
        "最大速度": "Mach 1.8 级别",
        "特点": "多任务、舰载/陆基型号"
      },
      images: [
        commonsImage("Dassault Rafale C01.jpg", "Dassault Rafale 公开图片"),
        commonsImage("Rafale - RIAT 2009 (3751416421).jpg", "阵风战斗机飞行图")
      ],
      sources: [
        source("Dassault Aviation 官方资料", "https://www.dassault-aviation.com/", "官方制造商"),
        source("法国空天军公开资料入口", "https://www.defense.gouv.fr/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "su-57",
      nameZh: "苏-57 战斗机",
      nameEn: "Sukhoi Su-57",
      aliases: ["Su-57", "苏57"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "俄罗斯",
      maker: "Sukhoi",
      status: "现役 / 持续生产",
      credibility: "B",
      summary: "苏-57 是俄罗斯第五代战斗机项目，强调隐身、超机动和多用途作战能力。",
      basic: {
        "中文名": "苏-57 战斗机",
        "英文名": "Sukhoi Su-57",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "俄罗斯",
        "制造商": "Sukhoi",
        "当前状态": "现役 / 持续生产"
      },
      specs: {
        "机型": "第五代多用途战斗机",
        "乘员": "1 人",
        "发动机": "双发涡扇发动机",
        "特点": "隐身、超机动、多用途",
        "武器挂载": "内置弹舱与外挂点"
      },
      images: [
        commonsImage("Sukhoi T-50 in 2011 (4).jpg", "Su-57 原型机公开图片"),
        commonsImage("Sukhoi Su-57 at MAKS 2019.jpg", "苏-57 航展图")
      ],
      sources: [
        source("UAC 官方资料入口", "https://www.uacrussia.ru/en/", "官方制造商入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "bayraktar-tb2",
      nameZh: "拜拉克塔尔 TB2 无人机",
      nameEn: "Bayraktar TB2",
      aliases: ["TB2", "Bayraktar", "拜拉克塔尔"],
      category: "空中装备",
      subCategory: "无人机",
      country: "土耳其",
      maker: "Baykar",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "Bayraktar TB2 是土耳其 Baykar 公司研制的察打一体无人机，因多场冲突中的使用而受到广泛关注。",
      basic: {
        "中文名": "拜拉克塔尔 TB2 无人机",
        "英文名": "Bayraktar TB2",
        "分类": "空中装备 / 无人机",
        "国家 / 地区": "土耳其",
        "制造商": "Baykar",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "察打一体无人机",
        "乘员": "地面控制",
        "特点": "中空长航时、侦察打击",
        "武器挂载": "轻型制导弹药",
        "发动机": "螺旋桨发动机"
      },
      images: [
        commonsImage("Bayraktar TB2 runway.jpg", "Bayraktar TB2 公开图片"),
        commonsImage("Bayraktar TB2 in Teknofest2021.jpg", "TB2 展示图")
      ],
      sources: [
        source("Baykar 官方资料", "https://baykartech.com/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "type-052d",
      nameZh: "052D型驱逐舰",
      nameEn: "Type 052D destroyer",
      aliases: ["052D", "旅洋III级", "Type 052D"],
      category: "海上装备",
      subCategory: "驱逐舰",
      country: "中国",
      maker: "中国船舶工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "052D型驱逐舰是中国海军现代化导弹驱逐舰，装备相控阵雷达和垂直发射系统，是中国水面舰艇体系的重要型号。",
      basic: {
        "中文名": "052D型驱逐舰",
        "英文名": "Type 052D destroyer",
        "分类": "海上装备 / 驱逐舰",
        "国家 / 地区": "中国",
        "当前状态": "现役",
        "公开代号": "Luyang III-class"
      },
      specs: {
        "舰种": "导弹驱逐舰",
        "排水量": "公开资料约 7000 吨级",
        "动力系统": "燃气轮机 / 柴油机组合公开资料",
        "舰载武器": "垂直发射系统、舰炮、反潜系统等",
        "特点": "区域防空与多用途作战"
      },
      images: [
        commonsImage("PLANS Xiamen (DDG-154) 20210427.jpg", "052D型驱逐舰公开图片"),
        commonsImage("Chinese destroyer Xiamen (154) at RIMPAC 2016.jpg", "052D型厦门舰公开图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "ohio-class",
      nameZh: "俄亥俄级核潜艇",
      nameEn: "Ohio-class submarine",
      aliases: ["Ohio class", "俄亥俄级", "SSBN"],
      category: "海上装备",
      subCategory: "潜艇",
      country: "美国",
      maker: "General Dynamics Electric Boat",
      status: "现役 / 逐步被哥伦比亚级替换",
      credibility: "A",
      summary: "俄亥俄级是美国海军战略导弹核潜艇家族，也包括巡航导弹改装型，是美国海基核威慑的重要平台。",
      basic: {
        "中文名": "俄亥俄级核潜艇",
        "英文名": "Ohio-class submarine",
        "分类": "海上装备 / 潜艇",
        "国家 / 地区": "美国",
        "制造商": "General Dynamics Electric Boat",
        "动力": "核动力"
      },
      specs: {
        "舰种": "战略导弹核潜艇 / 巡航导弹核潜艇",
        "动力系统": "核动力",
        "主要武器": "潜射弹道导弹或巡航导弹",
        "特点": "海基战略威慑",
        "服役状态": "现役"
      },
      images: [
        commonsImage("USS Ohio (SSGN-726) 2.jpg", "俄亥俄级公开图片"),
        commonsImage("USS Michigan (SSBN-727).jpg", "俄亥俄级潜艇公开图")
      ],
      sources: [
        source("U.S. Navy Fact File: Ballistic Missile Submarines", "https://www.navy.mil/Resources/Fact-Files/", "国家 / 军方公开资料"),
        source("General Dynamics Electric Boat", "https://www.gdeb.com/", "官方制造商")
      ]
    },
    {
      id: "s-400",
      nameZh: "S-400 防空导弹系统",
      nameEn: "S-400 missile system",
      aliases: ["S-400", "Triumf", "凯旋"],
      category: "导弹与弹药",
      subCategory: "防空导弹",
      country: "俄罗斯",
      maker: "Almaz-Antey",
      status: "现役 / 多国采购",
      credibility: "B",
      summary: "S-400 是俄罗斯远程防空导弹系统，面向飞机、巡航导弹和部分弹道目标防御任务。",
      basic: {
        "中文名": "S-400 防空导弹系统",
        "英文名": "S-400 missile system",
        "分类": "导弹与弹药 / 防空导弹",
        "国家 / 地区": "俄罗斯",
        "制造商": "Almaz-Antey",
        "当前状态": "现役"
      },
      specs: {
        "类型": "远程地空导弹系统",
        "发射平台": "地面机动发射",
        "组成": "雷达、指挥车、发射车、导弹",
        "特点": "多目标防空",
        "射程": "依导弹型号不同"
      },
      images: [
        commonsImage("S-400 Triumph air defence missile system.jpg", "S-400 系统公开图片"),
        commonsImage("S-400 Triumf TEL.jpg", "S-400 发射车公开图")
      ],
      sources: [
        source("Almaz-Antey 官方资料入口", "https://www.almaz-antey.ru/", "官方制造商"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "thaad",
      nameZh: "萨德反导系统",
      nameEn: "THAAD",
      aliases: ["THAAD", "Terminal High Altitude Area Defense", "萨德"],
      category: "导弹与弹药",
      subCategory: "防空导弹",
      country: "美国",
      maker: "Lockheed Martin",
      status: "现役",
      credibility: "A",
      summary: "THAAD 是美国末段高空区域防御系统，用于拦截短中程弹道导弹，是美国反导体系的重要组成。",
      basic: {
        "中文名": "萨德反导系统",
        "英文名": "THAAD",
        "分类": "导弹与弹药 / 防空导弹",
        "国家 / 地区": "美国",
        "制造商": "Lockheed Martin",
        "当前状态": "现役"
      },
      specs: {
        "类型": "末段高空区域防御系统",
        "发射平台": "地面机动发射",
        "目标": "短中程弹道导弹",
        "特点": "高空末段拦截",
        "组成": "雷达、发射车、指挥控制系统"
      },
      images: [
        commonsImage("THAAD missile launcher.jpg", "THAAD 发射车公开图片"),
        commonsImage("THAAD interceptor launch.jpg", "THAAD 拦截弹发射图")
      ],
      sources: [
        source("Lockheed Martin: THAAD", "https://www.lockheedmartin.com/en-us/products/thaad.html", "官方制造商"),
        source("Missile Defense Agency", "https://www.mda.mil/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "harpoon",
      nameZh: "鱼叉反舰导弹",
      nameEn: "Harpoon missile",
      aliases: ["Harpoon", "鱼叉导弹", "AGM-84"],
      category: "导弹与弹药",
      subCategory: "反舰导弹",
      country: "美国",
      maker: "Boeing",
      status: "现役 / 多平台使用",
      credibility: "A",
      summary: "鱼叉导弹是美国经典反舰导弹家族，可由飞机、舰艇、潜艇和岸基平台发射。",
      basic: {
        "中文名": "鱼叉反舰导弹",
        "英文名": "Harpoon missile",
        "分类": "导弹与弹药 / 反舰导弹",
        "国家 / 地区": "美国",
        "制造商": "Boeing",
        "当前状态": "现役 / 多平台使用"
      },
      specs: {
        "类型": "反舰导弹",
        "发射平台": "飞机、舰艇、潜艇、岸基",
        "制导方式": "主动雷达制导",
        "速度": "亚音速",
        "特点": "掠海反舰攻击"
      },
      images: [
        commonsImage("AGM-84 Harpoon missile.jpg", "Harpoon 导弹公开图片"),
        commonsImage("RGM-84 Harpoon launch.jpg", "鱼叉导弹发射图")
      ],
      sources: [
        source("Boeing: Harpoon", "https://www.boeing.com/defense/harpoon/", "官方制造商"),
        source("U.S. Navy public info", "https://www.navy.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "c-17",
      nameZh: "C-17 环球霸王 III",
      nameEn: "Boeing C-17 Globemaster III",
      aliases: ["C-17", "Globemaster III", "环球霸王"],
      category: "空中装备",
      subCategory: "运输机",
      country: "美国",
      maker: "Boeing",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "C-17 Globemaster III 是美制大型战略/战术运输机，具备远程运输、短距起降和重型装备投送能力。",
      basic: {
        "中文名": "C-17 环球霸王 III",
        "英文名": "Boeing C-17 Globemaster III",
        "分类": "空中装备 / 运输机",
        "国家 / 地区": "美国",
        "制造商": "Boeing",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "大型军用运输机",
        "乘员": "飞行机组若干",
        "发动机": "4 发涡扇发动机",
        "特点": "战略运输、短距起降",
        "任务": "人员、车辆、物资投送"
      },
      images: [
        commonsImage("C-17 Globemaster III aircraft.jpg", "C-17 公开图片"),
        commonsImage("C-17 Globemaster III in flight.jpg", "C-17 飞行图")
      ],
      sources: [
        source("Boeing: C-17", "https://www.boeing.com/defense/c-17-globemaster-iii/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "a-10",
      nameZh: "A-10 雷电 II 攻击机",
      nameEn: "Fairchild Republic A-10 Thunderbolt II",
      aliases: ["A-10", "Warthog", "雷电II"],
      category: "空中装备",
      subCategory: "攻击机",
      country: "美国",
      maker: "Fairchild Republic",
      status: "现役 / 逐步延寿或替换讨论中",
      credibility: "A",
      summary: "A-10 Thunderbolt II 是美国近距空中支援攻击机，以强大的 GAU-8 机炮和较强战场生存性闻名。",
      basic: {
        "中文名": "A-10 雷电 II 攻击机",
        "英文名": "A-10 Thunderbolt II",
        "分类": "空中装备 / 攻击机",
        "国家 / 地区": "美国",
        "制造商": "Fairchild Republic",
        "当前状态": "现役"
      },
      specs: {
        "机型": "近距空中支援攻击机",
        "乘员": "1 人",
        "发动机": "双发涡扇发动机",
        "主要武器": "GAU-8/A 30 mm 机炮",
        "特点": "对地支援、生存性强"
      },
      images: [
        commonsImage("A-10 Thunderbolt II In-flight-2.jpg", "A-10 飞行图"),
        commonsImage("A-10 Thunderbolt II firing cannon.jpg", "A-10 公开训练图")
      ],
      sources: [
        source("U.S. Air Force: A-10", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "p-8",
      nameZh: "P-8 海神反潜巡逻机",
      nameEn: "Boeing P-8 Poseidon",
      aliases: ["P-8", "Poseidon", "海神"],
      category: "空中装备",
      subCategory: "巡逻机",
      country: "美国",
      maker: "Boeing",
      status: "现役 / 多国采购",
      credibility: "A",
      summary: "P-8 Poseidon 是基于 Boeing 737 平台发展的海上巡逻与反潜机，承担反潜、反舰、侦察与海上监视任务。",
      basic: {
        "中文名": "P-8 海神反潜巡逻机",
        "英文名": "Boeing P-8 Poseidon",
        "分类": "空中装备 / 巡逻机",
        "国家 / 地区": "美国",
        "制造商": "Boeing",
        "当前状态": "现役"
      },
      specs: {
        "机型": "海上巡逻 / 反潜机",
        "平台": "Boeing 737 衍生",
        "任务": "反潜、反舰、海上监视",
        "特点": "远程巡逻与传感器任务",
        "武器挂载": "鱼雷、反舰武器等"
      },
      images: [
        commonsImage("Boeing P-8A Poseidon in flight.jpg", "P-8A Poseidon 飞行图"),
        commonsImage("P-8A Poseidon Patrol Aircraft.jpg", "P-8A 公开图片")
      ],
      sources: [
        source("Boeing: P-8", "https://www.boeing.com/defense/maritime-surveillance/p-8-poseidon/", "官方制造商"),
        source("U.S. Navy public info", "https://www.navy.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "ticonderoga",
      nameZh: "提康德罗加级巡洋舰",
      nameEn: "Ticonderoga-class cruiser",
      aliases: ["Ticonderoga", "CG-47", "提康德罗加级"],
      category: "海上装备",
      subCategory: "巡洋舰",
      country: "美国",
      maker: "Ingalls Shipbuilding / Bath Iron Works",
      status: "现役末期 / 逐步退役",
      credibility: "A",
      summary: "提康德罗加级是美国海军宙斯盾导弹巡洋舰，长期承担编队防空、指挥和多用途作战任务。",
      basic: {
        "中文名": "提康德罗加级巡洋舰",
        "英文名": "Ticonderoga-class cruiser",
        "分类": "海上装备 / 巡洋舰",
        "国家 / 地区": "美国",
        "服役时间": "1980年代起",
        "核心系统": "Aegis Combat System"
      },
      specs: {
        "舰种": "导弹巡洋舰",
        "排水量": "约 9000 吨级",
        "动力系统": "燃气轮机",
        "舰载武器": "Mk 41 VLS、舰炮、反潜系统等",
        "特点": "编队防空与指挥"
      },
      images: [
        commonsImage("USS Bunker Hill (CG-52) 2008.jpg", "提康德罗加级公开图片"),
        commonsImage("USS Ticonderoga (CG-47).jpg", "USS Ticonderoga 公开图")
      ],
      sources: [
        source("U.S. Navy Fact File: Cruisers", "https://www.navy.mil/Resources/Fact-Files/", "国家 / 军方公开资料"),
        source("Naval Vessel Register", "https://www.nvr.navy.mil/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "seawolf",
      nameZh: "海狼级攻击核潜艇",
      nameEn: "Seawolf-class submarine",
      aliases: ["Seawolf", "SSN-21", "海狼级"],
      category: "海上装备",
      subCategory: "潜艇",
      country: "美国",
      maker: "General Dynamics Electric Boat",
      status: "现役",
      credibility: "A",
      summary: "海狼级是美国冷战后期建造的高性能攻击核潜艇，数量较少但性能定位很高。",
      basic: {
        "中文名": "海狼级攻击核潜艇",
        "英文名": "Seawolf-class submarine",
        "分类": "海上装备 / 潜艇",
        "国家 / 地区": "美国",
        "制造商": "General Dynamics Electric Boat",
        "动力": "核动力"
      },
      specs: {
        "舰种": "攻击核潜艇",
        "动力系统": "核动力",
        "任务": "反潜、反舰、情报任务",
        "特点": "高性能、低建造数量",
        "舰载武器": "鱼雷、巡航导弹等"
      },
      images: [
        commonsImage("USS Seawolf (SSN-21).jpg", "海狼级公开图片"),
        commonsImage("USS Connecticut (SSN-22).jpg", "USS Connecticut 公开图")
      ],
      sources: [
        source("U.S. Navy Fact File: Attack Submarines", "https://www.navy.mil/Resources/Fact-Files/", "国家 / 军方公开资料"),
        source("General Dynamics Electric Boat", "https://www.gdeb.com/", "官方制造商")
      ]
    },
    {
      id: "pzh-2000",
      nameZh: "PzH 2000 自行榴弹炮",
      nameEn: "Panzerhaubitze 2000",
      aliases: ["PzH 2000", "Panzerhaubitze 2000"],
      category: "陆战装备",
      subCategory: "自行火炮",
      country: "德国",
      maker: "Krauss-Maffei Wegmann / Rheinmetall",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "PzH 2000 是德国 155 mm 自行榴弹炮，以较高自动化、射速和远程火力支援能力著称。",
      basic: {
        "中文名": "PzH 2000 自行榴弹炮",
        "英文名": "Panzerhaubitze 2000",
        "分类": "陆战装备 / 自行火炮",
        "国家 / 地区": "德国",
        "制造商": "KMW / Rheinmetall",
        "当前状态": "现役"
      },
      specs: {
        "类型": "155 mm 自行榴弹炮",
        "乘员": "5 人常见",
        "主炮": "155 mm 榴弹炮",
        "特点": "高自动化、高射速",
        "任务": "远程炮兵火力支援"
      },
      images: [
        commonsImage("Panzerhaubitze 2000 front view.jpg", "PzH 2000 公开图片"),
        commonsImage("PzH 2000 firing.jpg", "PzH 2000 射击图")
      ],
      sources: [
        source("KNDS 官方资料", "https://www.knds.com/", "官方制造商"),
        source("德国联邦国防军公开资料", "https://www.bundeswehr.de/", "国家 / 军方公开资料")
      ]
    },
    {
      id: "type-10",
      nameZh: "10式主战坦克",
      nameEn: "Type 10 tank",
      aliases: ["Type 10", "10式", "日本10式"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "日本",
      maker: "Mitsubishi Heavy Industries",
      status: "现役",
      credibility: "A",
      summary: "10式主战坦克是日本陆上自卫队现代主战坦克，强调机动性、信息化和本土道路环境适应。",
      basic: {
        "中文名": "10式主战坦克",
        "英文名": "Type 10 tank",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "日本",
        "制造商": "Mitsubishi Heavy Industries",
        "当前状态": "现役"
      },
      specs: {
        "战斗全重": "约 44 吨级",
        "乘员": "3 人",
        "主炮": "120 mm 滑膛炮",
        "特点": "信息化、机动性强",
        "任务": "本土防卫装甲作战"
      },
      images: [
        commonsImage("JGSDF Type 10 tank 20120527-01.JPG", "10式主战坦克公开图片"),
        commonsImage("Type 10 tank of JGSDF.jpg", "日本10式坦克展示图")
      ],
      sources: [
        source("日本防卫省公开资料", "https://www.mod.go.jp/", "国家 / 军方公开资料"),
        source("Mitsubishi Heavy Industries", "https://www.mhi.com/", "官方制造商")
      ]
    },
    {
      id: "iskander",
      nameZh: "伊斯坎德尔导弹系统",
      nameEn: "9K720 Iskander",
      aliases: ["Iskander", "9K720", "伊斯坎德尔"],
      category: "导弹与弹药",
      subCategory: "弹道导弹",
      country: "俄罗斯",
      maker: "KB Mashinostroyeniya",
      status: "现役",
      credibility: "B",
      summary: "9K720 Iskander 是俄罗斯战术弹道导弹系统，用于地面机动发射和战役战术打击任务。",
      basic: {
        "中文名": "伊斯坎德尔导弹系统",
        "英文名": "9K720 Iskander",
        "分类": "导弹与弹药 / 弹道导弹",
        "国家 / 地区": "俄罗斯",
        "制造商": "KB Mashinostroyeniya",
        "当前状态": "现役"
      },
      specs: {
        "类型": "战术弹道导弹系统",
        "发射平台": "地面机动发射车",
        "推进方式": "固体推进",
        "特点": "机动部署、战役战术打击",
        "射程": "依型号和公开资料不同"
      },
      images: [
        commonsImage("Iskander-M missile system.jpg", "Iskander-M 系统公开图片"),
        commonsImage("9K720 Iskander TEL.jpg", "9K720 发射车公开图")
      ],
      sources: [
        source("俄罗斯国防工业公开资料入口", "https://rostec.ru/en/", "官方资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "f-15",
      nameZh: "F-15 鹰式战斗机",
      nameEn: "McDonnell Douglas F-15 Eagle",
      aliases: ["F-15", "F15", "鹰式"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "美国",
      maker: "McDonnell Douglas / Boeing",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "F-15 Eagle 是美国双发制空战斗机家族，后续衍生出多用途打击型号，长期服役于美国及多个盟国空军。",
      basic: {
        "中文名": "F-15 鹰式战斗机",
        "英文名": "McDonnell Douglas F-15 Eagle",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "美国",
        "制造商": "McDonnell Douglas / Boeing",
        "当前状态": "现役"
      },
      specs: {
        "机型": "双发制空 / 多用途战斗机",
        "乘员": "1 人或双座型",
        "发动机": "双发涡扇发动机",
        "最大速度": "Mach 2 级别",
        "特点": "制空、远程拦截、多用途衍生"
      },
      images: [
        commonsImage("F-15, 71st Fighter Squadron, in flight.JPG", "F-15 飞行图"),
        commonsImage("F-15 Eagle flies over Kadena Air Base.jpg", "F-15 公开图片")
      ],
      sources: [
        source("Boeing: F-15", "https://www.boeing.com/defense/f-15/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "fa-18",
      nameZh: "F/A-18 大黄蜂",
      nameEn: "F/A-18 Hornet",
      aliases: ["F/A-18", "F-18", "大黄蜂"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "美国",
      maker: "McDonnell Douglas / Boeing",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "F/A-18 Hornet 是美国舰载多用途战斗攻击机家族，兼具空战与对地攻击能力，是航母舰载航空兵的重要型号。",
      basic: {
        "中文名": "F/A-18 大黄蜂",
        "英文名": "F/A-18 Hornet",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "美国",
        "制造商": "McDonnell Douglas / Boeing",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "舰载多用途战斗攻击机",
        "乘员": "1 人或双座型",
        "发动机": "双发涡扇发动机",
        "任务": "制空、对地、舰载作战",
        "特点": "航母起降、多用途"
      },
      images: [
        commonsImage("F-A-18C Hornet launches from USS Kitty Hawk.jpg", "F/A-18 舰载起飞图"),
        commonsImage("F-A-18 Hornet VFA-113.jpg", "F/A-18 公开图片")
      ],
      sources: [
        source("Boeing: F/A-18", "https://www.boeing.com/defense/fa-18-super-hornet/", "官方制造商"),
        source("U.S. Navy public info", "https://www.navy.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "mig-29",
      nameZh: "米格-29 战斗机",
      nameEn: "Mikoyan MiG-29",
      aliases: ["MiG-29", "米格29", "Fulcrum"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "苏联 / 俄罗斯",
      maker: "Mikoyan",
      status: "现役 / 多国使用",
      credibility: "B",
      summary: "MiG-29 是苏联研制的双发战斗机，强调前线制空和高机动能力，广泛出口并发展出多种改型。",
      basic: {
        "中文名": "米格-29 战斗机",
        "英文名": "Mikoyan MiG-29",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "苏联 / 俄罗斯",
        "制造商": "Mikoyan",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "双发前线战斗机",
        "乘员": "1 人或双座型",
        "发动机": "双发涡扇发动机",
        "特点": "高机动、前线制空",
        "最大速度": "Mach 2 级别"
      },
      images: [
        commonsImage("Mikoyan-Gurevich MiG-29 Fulcrum.jpg", "MiG-29 公开图片"),
        commonsImage("MiG-29 at RIAT 2015.jpg", "MiG-29 航展图")
      ],
      sources: [
        source("UAC 官方资料入口", "https://www.uacrussia.ru/en/", "官方制造商入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "b-52",
      nameZh: "B-52 同温层堡垒轰炸机",
      nameEn: "Boeing B-52 Stratofortress",
      aliases: ["B-52", "B52", "同温层堡垒"],
      category: "空中装备",
      subCategory: "轰炸机",
      country: "美国",
      maker: "Boeing",
      status: "现役 / 延寿升级中",
      credibility: "A",
      summary: "B-52 Stratofortress 是美国远程战略轰炸机，服役时间极长，承担常规和战略打击任务。",
      basic: {
        "中文名": "B-52 同温层堡垒轰炸机",
        "英文名": "Boeing B-52 Stratofortress",
        "分类": "空中装备 / 轰炸机",
        "国家 / 地区": "美国",
        "制造商": "Boeing",
        "当前状态": "现役 / 延寿升级中"
      },
      specs: {
        "机型": "远程战略轰炸机",
        "乘员": "多人机组",
        "发动机": "8 发涡扇发动机",
        "任务": "战略/常规远程打击",
        "特点": "大航程、大载荷"
      },
      images: [
        commonsImage("B-52H Stratofortress.jpg", "B-52H 公开图片"),
        commonsImage("B-52 Stratofortress in flight.jpg", "B-52 飞行图")
      ],
      sources: [
        source("Boeing: B-52", "https://www.boeing.com/defense/b-52-bomber/", "官方制造商"),
        source("U.S. Air Force fact sheets", "https://www.af.mil/About-Us/Fact-Sheets/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "tu-160",
      nameZh: "图-160 战略轰炸机",
      nameEn: "Tupolev Tu-160",
      aliases: ["Tu-160", "图160", "Blackjack"],
      category: "空中装备",
      subCategory: "轰炸机",
      country: "苏联 / 俄罗斯",
      maker: "Tupolev",
      status: "现役 / 现代化升级中",
      credibility: "B",
      summary: "Tu-160 是苏联研制、俄罗斯继续使用的超音速变后掠翼战略轰炸机，是世界上体型最大的作战轰炸机之一。",
      basic: {
        "中文名": "图-160 战略轰炸机",
        "英文名": "Tupolev Tu-160",
        "分类": "空中装备 / 轰炸机",
        "国家 / 地区": "苏联 / 俄罗斯",
        "制造商": "Tupolev",
        "当前状态": "现役"
      },
      specs: {
        "机型": "超音速战略轰炸机",
        "乘员": "4 人",
        "发动机": "4 发涡扇发动机",
        "特点": "变后掠翼、远程打击",
        "武器挂载": "巡航导弹等"
      },
      images: [
        commonsImage("Tupolev Tu-160 inflight Mishin.jpg", "Tu-160 飞行图"),
        commonsImage("Tupolev Tu-160 at MAKS-2007.jpg", "Tu-160 航展图")
      ],
      sources: [
        source("UAC 官方资料入口", "https://www.uacrussia.ru/en/", "官方制造商入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "uh-60",
      nameZh: "UH-60 黑鹰直升机",
      nameEn: "Sikorsky UH-60 Black Hawk",
      aliases: ["UH-60", "Black Hawk", "黑鹰"],
      category: "空中装备",
      subCategory: "直升机",
      country: "美国",
      maker: "Sikorsky",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "UH-60 Black Hawk 是美国通用运输直升机家族，被广泛用于人员运输、医疗后送、特种作战和支援任务。",
      basic: {
        "中文名": "UH-60 黑鹰直升机",
        "英文名": "Sikorsky UH-60 Black Hawk",
        "分类": "空中装备 / 直升机",
        "国家 / 地区": "美国",
        "制造商": "Sikorsky",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "通用运输直升机",
        "乘员": "机组 + 载员",
        "发动机": "双发涡轴发动机",
        "任务": "运输、医疗后送、支援",
        "特点": "多用途、可靠性高"
      },
      images: [
        commonsImage("UH-60 Black Hawk helicopter flies in Iraq.jpg", "UH-60 黑鹰飞行图"),
        commonsImage("Sikorsky UH-60 Black Hawk.jpg", "UH-60 公开图片")
      ],
      sources: [
        source("Lockheed Martin / Sikorsky: Black Hawk", "https://www.lockheedmartin.com/en-us/products/sikorsky-black-hawk-helicopter.html", "官方制造商"),
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "mi-24",
      nameZh: "米-24 雌鹿武装直升机",
      nameEn: "Mil Mi-24",
      aliases: ["Mi-24", "米24", "Hind"],
      category: "空中装备",
      subCategory: "直升机",
      country: "苏联 / 俄罗斯",
      maker: "Mil",
      status: "现役 / 多国使用",
      credibility: "B",
      summary: "Mi-24 是苏联研制的武装直升机，兼具攻击与有限运兵能力，外形和作战定位都极具辨识度。",
      basic: {
        "中文名": "米-24 雌鹿武装直升机",
        "英文名": "Mil Mi-24",
        "分类": "空中装备 / 直升机",
        "国家 / 地区": "苏联 / 俄罗斯",
        "制造商": "Mil",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "机型": "武装直升机",
        "乘员": "2 人 + 有限载员",
        "发动机": "双发涡轴发动机",
        "武器": "机炮、火箭弹、反坦克导弹等",
        "特点": "攻击与运兵结合"
      },
      images: [
        commonsImage("Mil Mi-24P Hind-F.jpg", "Mi-24P 公开图片"),
        commonsImage("Mi-24 Hind Helicopter.jpg", "Mi-24 飞行展示图")
      ],
      sources: [
        source("Russian Helicopters 官方资料入口", "https://russianhelicopters.aero/en/", "官方制造商入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "k2-black-panther",
      nameZh: "K2 黑豹主战坦克",
      nameEn: "K2 Black Panther",
      aliases: ["K2", "黑豹坦克", "K2 Black Panther"],
      category: "陆战装备",
      subCategory: "主战坦克",
      country: "韩国",
      maker: "Hyundai Rotem",
      status: "现役 / 出口扩展中",
      credibility: "A",
      summary: "K2 Black Panther 是韩国现代主战坦克，强调火控、机动和主动/被动防护能力，并进入国际出口市场。",
      basic: {
        "中文名": "K2 黑豹主战坦克",
        "英文名": "K2 Black Panther",
        "分类": "陆战装备 / 主战坦克",
        "国家 / 地区": "韩国",
        "制造商": "Hyundai Rotem",
        "当前状态": "现役"
      },
      specs: {
        "战斗全重": "约 55 吨级",
        "乘员": "3 人",
        "主炮": "120 mm 滑膛炮",
        "特点": "先进火控、机动性强",
        "任务": "现代装甲作战"
      },
      images: [
        commonsImage("K2 Black Panther MBT.jpg", "K2 Black Panther 公开图片"),
        commonsImage("K2 Black Panther tank 2014.jpg", "K2 黑豹展示图")
      ],
      sources: [
        source("Hyundai Rotem 官方资料", "https://www.hyundai-rotem.co.kr/", "官方制造商"),
        source("韩国国防部公开资料入口", "https://www.mnd.go.kr/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "k9-thunder",
      nameZh: "K9 雷霆自行榴弹炮",
      nameEn: "K9 Thunder",
      aliases: ["K9", "K9 Thunder", "雷霆"],
      category: "陆战装备",
      subCategory: "自行火炮",
      country: "韩国",
      maker: "Hanwha Aerospace",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "K9 Thunder 是韩国 155 mm 自行榴弹炮，因性能、成本和出口表现而成为国际市场上的重要自行火炮型号。",
      basic: {
        "中文名": "K9 雷霆自行榴弹炮",
        "英文名": "K9 Thunder",
        "分类": "陆战装备 / 自行火炮",
        "国家 / 地区": "韩国",
        "制造商": "Hanwha Aerospace",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "类型": "155 mm 自行榴弹炮",
        "乘员": "5 人常见",
        "主炮": "155 mm 榴弹炮",
        "特点": "机动炮兵火力支援",
        "任务": "远程火力打击"
      },
      images: [
        commonsImage("K-9 Thunder self-propelled howitzer.jpg", "K9 Thunder 公开图片"),
        commonsImage("K9 Thunder in action.jpg", "K9 自行火炮训练图")
      ],
      sources: [
        source("Hanwha Aerospace 官方资料", "https://www.hanwhaaerospace.com/", "官方制造商"),
        source("韩国国防部公开资料入口", "https://www.mnd.go.kr/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "m270",
      nameZh: "M270 多管火箭系统",
      nameEn: "M270 Multiple Launch Rocket System",
      aliases: ["M270", "MLRS", "M270 MLRS"],
      category: "陆战装备",
      subCategory: "自行火炮",
      country: "美国",
      maker: "Lockheed Martin 等",
      status: "现役 / 多国使用",
      credibility: "A",
      summary: "M270 MLRS 是履带式多管火箭系统，可发射火箭弹和战术导弹，是美军及多国陆军远程火力平台。",
      basic: {
        "中文名": "M270 多管火箭系统",
        "英文名": "M270 MLRS",
        "分类": "陆战装备 / 自行火炮",
        "国家 / 地区": "美国",
        "制造商": "Lockheed Martin 等",
        "当前状态": "现役 / 多国使用"
      },
      specs: {
        "类型": "履带式多管火箭系统",
        "发射平台": "履带式装甲车辆",
        "武器": "227 mm 火箭弹 / 战术导弹",
        "特点": "远程区域火力",
        "任务": "炮兵火力支援"
      },
      images: [
        commonsImage("M270 Multiple Launch Rocket System.JPEG", "M270 MLRS 公开图片"),
        commonsImage("M270 MLRS firing.jpg", "M270 发射图")
      ],
      sources: [
        source("Lockheed Martin: MLRS", "https://www.lockheedmartin.com/", "官方制造商"),
        source("U.S. Army public info", "https://www.army.mil/", "国家 / 军方公开资料入口")
      ]
    },
    {
      id: "zumwalt",
      nameZh: "朱姆沃尔特级驱逐舰",
      nameEn: "Zumwalt-class destroyer",
      aliases: ["Zumwalt", "DDG-1000", "朱姆沃尔特"],
      category: "海上装备",
      subCategory: "驱逐舰",
      country: "美国",
      maker: "Bath Iron Works",
      status: "现役 / 少量建造",
      credibility: "A",
      summary: "朱姆沃尔特级是美国海军隐身导弹驱逐舰，采用独特舰体设计和高度电力化系统，建造数量较少。",
      basic: {
        "中文名": "朱姆沃尔特级驱逐舰",
        "英文名": "Zumwalt-class destroyer",
        "分类": "海上装备 / 驱逐舰",
        "国家 / 地区": "美国",
        "制造商": "Bath Iron Works",
        "当前状态": "现役 / 少量建造"
      },
      specs: {
        "舰种": "导弹驱逐舰",
        "排水量": "万吨级以上",
        "动力系统": "综合电力推进",
        "特点": "隐身外形、高度电力化",
        "舰载武器": "导弹垂发系统等"
      },
      images: [
        commonsImage("USS Zumwalt (DDG-1000) at sea 2016.jpg", "USS Zumwalt 公开图片"),
        commonsImage("Zumwalt-class destroyer USS Zumwalt.jpg", "朱姆沃尔特级航行图")
      ],
      sources: [
        source("U.S. Navy Fact File: Zumwalt", "https://www.navy.mil/Resources/Fact-Files/", "国家 / 军方公开资料"),
        source("General Dynamics Bath Iron Works", "https://gdbiw.com/", "官方制造商")
      ]
    },
    {
      id: "queen-elizabeth-class",
      nameZh: "伊丽莎白女王级航空母舰",
      nameEn: "Queen Elizabeth-class aircraft carrier",
      aliases: ["Queen Elizabeth-class", "伊丽莎白女王级", "HMS Queen Elizabeth"],
      category: "海上装备",
      subCategory: "航空母舰",
      country: "英国",
      maker: "Aircraft Carrier Alliance",
      status: "现役",
      credibility: "A",
      summary: "伊丽莎白女王级是英国皇家海军大型航空母舰，主要搭载 F-35B 短距起飞/垂直降落战斗机执行舰载航空任务。",
      basic: {
        "中文名": "伊丽莎白女王级航空母舰",
        "英文名": "Queen Elizabeth-class aircraft carrier",
        "分类": "海上装备 / 航空母舰",
        "国家 / 地区": "英国",
        "制造联盟": "Aircraft Carrier Alliance",
        "当前状态": "现役"
      },
      specs: {
        "舰种": "航空母舰",
        "排水量": "约 65000 吨级",
        "舰载机": "F-35B、直升机等",
        "特点": "滑跃甲板、STOVL 舰载机",
        "任务": "舰载航空力量投送"
      },
      images: [
        commonsImage("HMS Queen Elizabeth (R08) at sea.jpg", "HMS Queen Elizabeth 航行图"),
        commonsImage("HMS Queen Elizabeth entering Portsmouth.jpg", "伊丽莎白女王级公开图片")
      ],
      sources: [
        source("Royal Navy: HMS Queen Elizabeth", "https://www.royalnavy.mod.uk/", "国家 / 军方公开资料"),
        source("BAE Systems 官方资料", "https://www.baesystems.com/", "官方制造商")
      ]
    },
    {
      id: "j-10",
      nameZh: "歼-10 战斗机",
      nameEn: "Chengdu J-10",
      aliases: ["J-10", "歼10", "猛龙"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "中国",
      maker: "成都飞机工业集团",
      status: "现役 / 多批次改进",
      credibility: "C",
      summary: "歼-10 是中国自主研制的单发多用途战斗机，采用鸭式布局，是中国空军现代化换装中的重要型号。",
      basic: {
        "中文名": "歼-10 战斗机",
        "英文名": "Chengdu J-10",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "中国",
        "设计单位": "成都飞机工业集团",
        "当前状态": "现役"
      },
      specs: {
        "机型": "单发多用途战斗机",
        "乘员": "1 人或双座型",
        "发动机": "单发涡扇发动机",
        "特点": "鸭式布局、多用途任务",
        "武器挂载": "空空、空地武器等"
      },
      images: [
        commonsImage("Chengdu J-10 at Airshow China 2014.jpg", "歼-10 航展公开图片"),
        commonsImage("J-10AY of August 1st Aerobatics Team.jpg", "歼-10 表演队公开图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "j-16",
      nameZh: "歼-16 战斗机",
      nameEn: "Shenyang J-16",
      aliases: ["J-16", "歼16"],
      category: "空中装备",
      subCategory: "战斗机",
      country: "中国",
      maker: "沈阳飞机工业集团",
      status: "现役",
      credibility: "C",
      summary: "歼-16 是中国双座双发多用途战斗机，公开资料通常将其定位为重型多用途/打击平台。",
      basic: {
        "中文名": "歼-16 战斗机",
        "英文名": "Shenyang J-16",
        "分类": "空中装备 / 战斗机",
        "国家 / 地区": "中国",
        "设计单位": "沈阳飞机工业集团",
        "当前状态": "现役"
      },
      specs: {
        "机型": "双发双座多用途战斗机",
        "乘员": "2 人",
        "发动机": "双发涡扇发动机",
        "特点": "远程打击、多用途任务",
        "武器挂载": "空空、空地、反舰武器等"
      },
      images: [
        commonsImage("Shenyang J-16 at Changchun Air Show 2019.jpg", "歼-16 公开图片"),
        commonsImage("J-16 fighter at Airshow China.jpg", "歼-16 航展图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "y-20",
      nameZh: "运-20 运输机",
      nameEn: "Xi'an Y-20",
      aliases: ["Y-20", "运20", "鲲鹏"],
      category: "空中装备",
      subCategory: "运输机",
      country: "中国",
      maker: "西安飞机工业集团",
      status: "现役",
      credibility: "C",
      summary: "运-20 是中国大型军用运输机，用于战略空运、人员与装备投送，是中国空军远程投送能力的重要平台。",
      basic: {
        "中文名": "运-20 运输机",
        "英文名": "Xi'an Y-20",
        "分类": "空中装备 / 运输机",
        "国家 / 地区": "中国",
        "制造商": "西安飞机工业集团",
        "当前状态": "现役"
      },
      specs: {
        "机型": "大型军用运输机",
        "发动机": "4 发涡扇发动机",
        "任务": "战略运输、装备投送",
        "特点": "大载荷、远程投送",
        "乘员": "飞行机组若干"
      },
      images: [
        commonsImage("Xian Y-20 at Airshow China 2014.jpg", "运-20 航展公开图片"),
        commonsImage("Xian Y-20 Kunpeng.jpg", "运-20 公开图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "z-10",
      nameZh: "直-10 武装直升机",
      nameEn: "CAIC Z-10",
      aliases: ["Z-10", "直10", "霹雳火"],
      category: "空中装备",
      subCategory: "直升机",
      country: "中国",
      maker: "中国航空工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "直-10 是中国专用武装直升机，承担反装甲、火力支援和低空突击等任务。",
      basic: {
        "中文名": "直-10 武装直升机",
        "英文名": "CAIC Z-10",
        "分类": "空中装备 / 直升机",
        "国家 / 地区": "中国",
        "制造体系": "中国航空工业相关单位",
        "当前状态": "现役"
      },
      specs: {
        "机型": "武装直升机",
        "乘员": "2 人",
        "发动机": "双发涡轴发动机",
        "武器": "机炮、火箭弹、反坦克导弹等",
        "任务": "反装甲、火力支援"
      },
      images: [
        commonsImage("CAIC Z-10 at Airshow China 2012.jpg", "直-10 航展公开图片"),
        commonsImage("Changhe Z-10 attack helicopter.jpg", "直-10 公开图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    },
    {
      id: "shandong-carrier",
      nameZh: "山东舰航空母舰",
      nameEn: "Chinese aircraft carrier Shandong",
      aliases: ["山东舰", "Shandong", "17号航母"],
      category: "海上装备",
      subCategory: "航空母舰",
      country: "中国",
      maker: "中国船舶工业相关单位",
      status: "现役",
      credibility: "C",
      summary: "山东舰是中国第一艘国产航空母舰，采用滑跃起飞甲板，是中国海军航母力量的重要组成。",
      basic: {
        "中文名": "山东舰航空母舰",
        "英文名": "Chinese aircraft carrier Shandong",
        "分类": "海上装备 / 航空母舰",
        "国家 / 地区": "中国",
        "舷号": "17",
        "当前状态": "现役"
      },
      specs: {
        "舰种": "航空母舰",
        "舰载机": "舰载战斗机、直升机等",
        "甲板": "滑跃起飞甲板",
        "任务": "舰载航空力量投送",
        "特点": "中国国产航母"
      },
      images: [
        commonsImage("Chinese aircraft carrier Shandong 20190502.jpg", "山东舰公开图片"),
        commonsImage("PLAN aircraft carrier Shandong.jpg", "山东舰航行图")
      ],
      sources: [
        source("中国军网公开报道检索", "http://www.81.cn/", "国家 / 军方公开资料入口"),
        source("Wikimedia Commons 文件页", "https://commons.wikimedia.org/", "公开图片库")
      ]
    }
  ]
};
