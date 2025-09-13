import { defineConfig } from 'rspress/config';

export default defineConfig({

  root: 'docs',
  title: 'L4D2 Wiki',
  description: 'Left 4 Dead 2 综合信息资源网站',



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
        content: 'https://github.com/b9348/l4d2',
      },
    ],

    // 页脚配置
    footer: {
      message: 'Released under the MIT License. Copyright © 2024 L4D2 Wiki Contributors',
    },

    // 编辑链接
    editLink: {
      docRepoBaseUrl: 'https://github.com/b9348/l4d2/tree/main/docs',
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
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: '/giscus-custom.css',
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
        {
          tag: 'script',
          attrs: {
            src: '/giscus.js',
          },
        },
        {
          tag: 'script',
          children: `
            // 初始化 Giscus 评论系统
            if (window.giscusManager) {
              window.giscusManager.init();
            } else {
              // 如果脚本还没加载完成，等待一下
              document.addEventListener('DOMContentLoaded', () => {
                if (window.giscusManager) {
                  window.giscusManager.init();
                }
              });
            }
          `,
        },

      ],
    },
  },
});
