// ============================================================================
//  站点内容配置  ——  修改本文件即可更新整站文案 / 数据 / 联系方式
//  注意：以下均为【占位内容】，请替换为你简历中的真实信息。
//  图片：把文件放到 public/media/ 目录，然后填写 "/media/xxx.jpg" 路径；
//        留空则使用内置渐变占位图，不影响运行与预览。
// ============================================================================

export const profile = {
  name: '林墨',
  nameEn: 'MO LIN',
  monogram: 'LM',
  version: 'v2026',
  roleLine: '视觉设计 · AI 设计 · 品牌设计',
  location: '中国 · 上海',
  status: '2026 档期开放中',

  // 首屏左侧 / 顶部小字
  verticalText: 'BUILDING WITH AI · THINKING WITH STORIES',
  statusLine: {
    cn: '林墨',
    en: 'MO LIN',
  },
  tagline: 'CREATIVE / AIGC / BRAND DESIGN · 2026',

  // 可选视频背景（放入 public/media/hero-loop.mp4 后启用）
  heroVideo: '',

  // 首屏大标题（3 行，每行可独立设置样式）
  // style: 'fill' 实心白 | 'outline-italic' 镂空斜体 | 'accent' 渐变色
  hero: {
    lines: [
      { text: '视觉', style: 'fill' },
      { text: 'AI', style: 'outline-italic' },
      { text: '设计', style: 'accent' },
    ],
    sub: 'AIGC 内容策略 & 创意运营',
    caption: 'CONTENT STRATEGIST · DESIGNER',
    ctaPrimaryLabel: '查看作品',
    ctaPrimaryHref: '#work',
    ctaSecondaryLabel: '与我联系',
    ctaSecondaryHref: '#contact',
  },

  // 首屏右侧"身份卡"
  identity: {
    portrait: '', // 例：'/media/portrait.jpg'
    name: '林墨',
    role: '视觉 · AI · 品牌设计师',
    talkLabel: 'TAP TO TALK',
    talkHref: '#contact',
    badgeLabel: 'AI',
    badgeSubLabel: 'AGENT',
    onlineLabel: '林墨 AI · ONLINE',
  },

  // 首屏底部状态条
  statusBar: [
    { dot: 'green', label: 'SYSTEM ONLINE' },
    { dot: 'green', label: 'OPEN TO WORK' },
    { dot: 'accent', label: 'AI DEPUTY ACTIVE' },
    { dot: 'gray', label: 'UPDATED 2026' },
  ],
}

// 导航结构
export const nav = {
  brand: {
    mark: 'LM',
    cn: '林墨',
    en: 'MO LIN',
    version: 'v2026',
  },
  links: [
    { label: '首页', en: 'HOME', href: '#top' },
    { label: '关于', en: 'ABOUT', href: '#about' },
    { label: '作品', en: 'WORK', href: '#work' },
    { label: '优势', en: 'SKILLS', href: '#skills' },
    { label: '联系', en: 'CONTACT', href: '#contact' },
  ],
  soundOn: true,
  lang: 'CN',
  langOptions: ['CN', 'EN'],
  cta: {
    label: 'TALK TO ME',
    href: '#contact',
  },
}

export const about = {
  index: '01',
  label: 'ABOUT',
  title: '关于我',
  lead: '我是一名横跨品牌、视觉与 AI 的设计师，相信好的设计是理性与直觉的平衡。',
  paragraphs: [
    '过去十年，我为消费品牌、科技公司与创意团队打造从品牌识别、视觉系统到电商与包装的完整表达。近年持续探索 AI 与设计的结合，用生成式工具重塑创意流程，让灵感更快抵达落地。',
    '我习惯从「问题」而不是「风格」出发：先理解品牌要说什么，再决定它长什么样。克制、精准、有记忆点，是我对每一个项目的标准。',
  ],
  contacts: [
    { label: '邮箱', value: 'hello@linmo.design', href: 'mailto:hello@linmo.design' },
    { label: '电话', value: '+86 138 0000 0000', href: 'tel:+8613800000000' },
    { label: '微信', value: 'linmo_design', href: '' },
    { label: '城市', value: '中国 · 上海', href: '' },
  ],
  stats: [
    { value: 10, suffix: '+', label: '年设计经验' },
    { value: 128, suffix: '+', label: '交付项目' },
    { value: 46, suffix: '', label: '服务品牌' },
    { value: 12, suffix: '', label: '设计奖项' },
  ],
  portrait: '',
}

export const projects = {
  index: '02',
  label: 'SELECTED WORK',
  title: '精选项目',
  sub: '挑选近年具有代表性的品牌与视觉项目，涵盖识别系统、AI 生成视觉与产品体验。',
  items: [
    {
      index: '01',
      title: '星尘 NEBULA',
      en: 'Brand Identity',
      year: '2025',
      desc: '为新锐科技品牌构建从标识、字体到动态识别的完整视觉系统，建立可延展的品牌语言。',
      tags: ['品牌识别', '视觉系统', '动效'],
      cover: '',
    },
    {
      index: '02',
      title: '潮汐 TIDE',
      en: 'AI Visual System',
      year: '2025',
      desc: '以生成式流程搭建可批量产出的 AI 视觉体系，为内容团队提供稳定的风格化素材输出。',
      tags: ['AI 生成', '工作流', '视觉规范'],
      cover: '',
    },
    {
      index: '03',
      title: '无界 BOUNDLESS',
      en: 'E-commerce Campaign',
      year: '2024',
      desc: '面向大促节点的电商视觉战役，从主视觉、详情页到社媒素材的一体化设计与落地。',
      tags: ['电商视觉', '主视觉', '社媒'],
      cover: '',
    },
    {
      index: '04',
      title: '光年 LIGHTYEAR',
      en: 'Product Interface',
      year: '2024',
      desc: '为智能硬件产品设计界面与交互视觉，用克制的设计语言传递科技感与温度。',
      tags: ['产品界面', '交互视觉', '组件'],
      cover: '',
    },
    {
      index: '05',
      title: '拾光 MOMENT',
      en: 'Packaging Design',
      year: '2023',
      desc: '围绕品牌内核的包装系统设计，从结构、材质到印刷工艺的整体把控与打样落地。',
      tags: ['包装设计', '结构', '落地交付'],
      cover: '',
    },
  ],
}

export const strengths = {
  index: '03',
  label: 'CAPABILITIES',
  title: '个人优势',
  sub: '从品牌策略到视觉落地，从传统设计工具到 AI 工作流，覆盖完整创意链路。',
  items: [
    {
      icon: 'brand',
      title: '品牌视觉系统',
      desc: '从 0 到 1 构建可延展的品牌识别，让品牌在每一个触点保持一致且有辨识度。',
    },
    {
      icon: 'spark',
      title: 'AI 创意工作流',
      desc: '熟练运用 Midjourney / ComfyUI 等工具搭建生成式流程，把创意产出效率与稳定性同时拉满。',
    },
    {
      icon: 'layers',
      title: '跨媒介落地',
      desc: '平面、动效、电商、包装全链路交付，兼顾审美表达与工程落地的可执行性。',
    },
    {
      icon: 'story',
      title: '视觉叙事',
      desc: '用图像与版面讲清品牌故事，把抽象的品牌价值转化为直观、可被记住的画面。',
    },
    {
      icon: 'team',
      title: '高效协作',
      desc: '与产品、运营、供应链同频推进，在清晰的工作流中保证项目按期高质量交付。',
    },
    {
      icon: 'trend',
      title: '趋势洞察',
      desc: '持续关注审美与市场趋势，把新鲜的设计语言转化为适合品牌的具体方案。',
    },
  ],
}

export const contact = {
  index: '04',
  label: 'GET IN TOUCH',
  kicker: '有项目或合作想法？',
  title: '一起创造',
  titleAccent: '点什么',
  sub: '欢迎通过邮件或微信联系我，通常会在 24 小时内回复。',
  email: 'hello@linmo.design',
  links: [
    { label: 'Behance', value: 'behance.net/linmo', href: '#' },
    { label: '小红书', value: '@林墨设计', href: '#' },
    { label: '微信', value: 'linmo_design', href: '' },
  ],
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} 林墨 Mo Lin`,
  note: '视觉 / AI / 品牌设计',
}