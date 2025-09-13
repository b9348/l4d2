import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({

  root: 'docs',
  title: 'L4D资源 - Left 4 Dead 2 综合资源网站',
  description: 'L4D资源是专业的Left 4 Dead 2中文资源网站，提供L4D2模组推荐、地图攻略、服务器列表、开服教程等全面游戏资源，助力玩家畅享求生之路2',

  // 全局UI组件
  globalUIComponents: [
    path.join(__dirname, 'docs/components/GiscusComments.tsx'),
  ],



  // 设置默认语言
  lang: 'zh',

  // 启用 SSG 严格模式以确保最佳性能
  ssg: {
    strict: true,
  },

  // 路由配置优化
  route: {
    cleanUrls: true, // 生成更简洁的 URL
  },

  // 国际化配置
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'L4D资源 - Left 4 Dead 2 综合资源网站',
      description: 'L4D资源是专业的Left 4 Dead 2中文资源网站，提供L4D2模组推荐、地图攻略、服务器列表、开服教程等全面游戏资源，助力玩家畅享求生之路2',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'L4D Resources - Left 4 Dead 2 Comprehensive Resource Site',
      description: 'L4D Resources is a professional Left 4 Dead 2 resource website providing L4D2 mod recommendations, map guides, server lists, and comprehensive gaming resources for players',
    },
  ],

  // 搜索配置优化
  search: {
    codeBlocks: true, // 启用代码块搜索
    versioned: false, // 当前不使用多版本
  },

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
      message: 'Released under the MIT License. Copyright © 2024 L4D资源团队',
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
            content: 'L4D资源, L4D2资源, Left 4 Dead 2, 求生之路2, L4D2模组, L4D2地图, L4D2服务器, L4D2攻略, 模组推荐, 地图下载, 找服玩, 开服教程, MOD推荐, 服务器列表, 游戏资源',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'L4D资源团队',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'L4D资源 - Left 4 Dead 2 综合资源网站',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'L4D资源是专业的Left 4 Dead 2中文资源网站，提供L4D2模组推荐、地图攻略、服务器列表、开服教程等全面游戏资源',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'L4D资源',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'L4D资源 - Left 4 Dead 2 综合资源网站',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content: 'L4D资源是专业的Left 4 Dead 2中文资源网站，提供L4D2模组推荐、地图攻略、服务器列表、开服教程等全面游戏资源',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        },

        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://giscus.app',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'canonical',
            href: 'https://b9348.github.io/l4d2/',
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
          attrs: {
            type: 'application/ld+json',
          },
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "L4D资源",
            "alternateName": "L4D Resources",
            "url": "https://b9348.github.io/l4d2/",
            "description": "L4D资源是专业的Left 4 Dead 2中文资源网站，提供L4D2模组推荐、地图攻略、服务器列表、开服教程等全面游戏资源",
            "inLanguage": ["zh-CN", "en-US"],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://b9348.github.io/l4d2/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "L4D资源团队",
              "url": "https://b9348.github.io/l4d2/"
            },
            "about": {
              "@type": "VideoGame",
              "name": "Left 4 Dead 2",
              "alternateName": "求生之路2",
              "genre": "Survival Horror",
              "publisher": "Valve Corporation"
            }
          }),
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
    // 性能优化配置
    performance: {
      chunkSplit: {
        strategy: 'split-by-experience',
      },
    },
  },
});
