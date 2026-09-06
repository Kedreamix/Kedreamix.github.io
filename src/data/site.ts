export const site = {
  name: 'Kedreamix',
  title: 'Kedreamix · 数字人实验笔记',
  description:
    '深圳大学 Kedreamix 的实验笔记本：说话头合成、数字人系统，以及把它们跑起来时留下的工程记录。',
  url: 'https://kedreamix.github.io',
  author: 'Kedreamix',
  role: '硕士在读',
  affiliation: '深圳大学',
  email: 'kedreamix@gmail.com',
  github: 'https://github.com/Kedreamix',
  zhihu: 'https://www.zhihu.com/people/kedreamix',
  bilibili: 'https://space.bilibili.com/241286257',
  csdn: 'https://redamancy.blog.csdn.net/',
};

export const kinds = {
  project: { label: '项目', blurb: '自己做出来的系统' },
  paper: { label: '论文', blurb: '说话头 / 3D 阅读笔记' },
  note: { label: '工程', blurb: '训练、接口、工具踩坑' },
  linux: { label: 'Linux', blurb: '服务器怎么活下去' },
  cuda: { label: 'CUDA', blurb: '算子和加速' },
} as const;

export type Kind = keyof typeof kinds;

export const featuredProjects = [
  {
    name: 'Linly-Talker',
    href: '/Project/Linly-Talker/',
    repo: 'https://github.com/Kedreamix/Linly-Talker',
    summary: '大模型 + 说话头。上传一张脸，就能语音对话。',
    mark: '3.4k★',
  },
  {
    name: 'Linly-Dubbing',
    href: 'https://github.com/Kedreamix/Linly-Dubbing',
    repo: 'https://github.com/Kedreamix/Linly-Dubbing',
    summary: '视频多语言配音与翻译，把声音从一条时间线搬到另一条。',
    mark: '3.3k★',
    external: true,
  },
  {
    name: 'Awesome Talking Head',
    href: '/Paper/Awesome-Talking-Head-Synthesis/',
    repo: 'https://github.com/Kedreamix/Awesome-Talking-Head-Synthesis',
    summary: '说话头合成的论文、代码和资料索引，持续更新。',
    mark: '1.5k★',
  },
];
