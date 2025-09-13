import { defineConfig } from 'rspress/config';

export default defineConfig({

  root: 'docs',
  title: 'L4D2 Wiki',
  description: 'Left 4 Dead 2 综合信息资源网站',
  icon: '/favicon.ico',
  
  // 设置默认语言
  lang: 'zh',

  // 国际化配置
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'L4D2 Wiki',
      description: 'Left 4 Dead 2 综合信息资源网站',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'L4D2 Wiki',
      description: 'Comprehensive Left 4 Dead 2 Information Resource',
    },
  ],

  themeConfig: {
    // 启用搜索功能
    search: true,

    // 禁用动画效果以避免 flushSync 警告
    enableContentAnimation: false,
    enableAppearanceAnimation: false,

    // 导航栏显示设置
    hideNavbar: 'never',

    // 社交链接
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/your-username/l4d2-wiki',
      },
    ],

    // 手动配置导航栏
    nav: [
      {
        text: '游戏指南',
        link: '/zh/guide/',
        activeMatch: '/zh/guide/',
      },
      {
        text: '地图攻略',
        link: '/zh/maps/',
        activeMatch: '/zh/maps/',
      },
      {
        text: '武器装备',
        link: '/zh/weapons/',
        activeMatch: '/zh/weapons/',
      },
      {
        text: 'MOD 推荐',
        link: '/zh/mods/',
        activeMatch: '/zh/mods/',
      },
      {
        text: '服务器',
        link: '/zh/servers/',
        activeMatch: '/zh/servers/',
      },
    ],

    // 手动配置侧边栏
    sidebar: {
      '/zh/guide/': [
        {
          text: '游戏指南',
          items: [
            { text: '游戏介绍', link: '/zh/guide/introduction' },
            { text: '基础操作', link: '/zh/guide/basic-controls' },
          ],
        },
      ],
      '/zh/maps/': [
        {
          text: '地图攻略',
          items: [
            { text: 'Dead Center', link: '/zh/maps/dead-center' },
          ],
        },
      ],
      '/zh/weapons/': [
        {
          text: '武器装备',
          items: [
            { text: '手枪', link: '/zh/weapons/pistols' },
          ],
        },
      ],
      '/zh/mods/': [
        {
          text: 'MOD 推荐',
          items: [],
        },
      ],
      '/zh/servers/': [
        {
          text: '服务器',
          items: [],
        },
      ],
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/en/guide/introduction' },
          ],
        },
      ],
      '/en/maps/': [
        {
          text: 'Maps',
          items: [],
        },
      ],
      '/en/weapons/': [
        {
          text: 'Weapons',
          items: [],
        },
      ],
    },

    // 页脚配置
    footer: {
      message: 'Released under the MIT License. Copyright © 2024 L4D2 Wiki Contributors',
    },

    // 编辑链接
    editLink: {
      docRepoBaseUrl: 'https://github.com/your-username/l4d2-wiki/tree/main/docs',
      text: '在 GitHub 上编辑此页',
    },

    // 上次更新时间
    lastUpdated: true,
  },

  // 构建配置
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Left 4 Dead 2, L4D2, 游戏攻略, 地图攻略, MOD, 服务器',
          },
        },
        {
          tag: 'script',
          children: `
            // 抑制 React Router future flag 警告
            const originalWarn = console.warn;
            console.warn = function(...args) {
              if (args[0] && args[0].includes('React Router Future Flag Warning')) {
                return;
              }
              originalWarn.apply(console, args);
            };
          `,
        },
      ],
    },
  },
});
