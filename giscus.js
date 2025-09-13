/**
 * Giscus 评论系统
 * 优化的评论加载和管理
 * 抽离为独立模块，便于维护和复用
 */

class GiscusManager {
  constructor() {
    this.currentPath = '';
    this.isLoaded = false;
    this.config = {
      repo: 'b9348/l4d2',
      repoId: 'R_kgDOPvHHoQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOPvHHoc4CvZUj',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      loading: 'lazy',
      crossorigin: 'anonymous'
    };
  }

  /**
   * 移除现有的giscus元素
   */
  removeExisting() {
    const existingContainer = document.querySelector('.giscus-container');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    const existingIframe = document.querySelector('iframe[src*="giscus"]');
    if (existingIframe) {
      existingIframe.remove();
    }
  }

  /**
   * 创建评论容器
   */
  createContainer() {
    const container = document.createElement('div');
    container.className = 'giscus-container';

    const title = document.createElement('h2');
    title.textContent = '💬 评论';
    
    const giscusDiv = document.createElement('div');
    giscusDiv.className = 'giscus';
    
    container.appendChild(title);
    container.appendChild(giscusDiv);
    
    return container;
  }

  /**
   * 创建加载状态
   */
  createLoadingState() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'giscus-loading';
    loadingDiv.textContent = '正在加载评论...';
    return loadingDiv;
  }

  /**
   * 判断是否应该显示评论
   */
  shouldShowComments(path) {
    return path !== '/' && path.length > 1;
  }

  /**
   * 获取语言设置
   */
  getLanguage(path) {
    return path.startsWith('/zh') ? 'zh-CN' : 'en';
  }

  /**
   * 查找内容容器
   */
  findContentContainer() {
    const selectors = [
      '.rspress-doc-content',
      '[class*="doc-content"]',
      'main',
      'article',
      '.content',
      '#root > div > div',
      'body'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element;
      }
    }
    
    return document.body;
  }

  /**
   * 加载giscus评论
   */
  load() {
    const newPath = window.location.pathname;
    
    // 如果路径没有变化且已经加载，则跳过
    if (this.currentPath === newPath && this.isLoaded) {
      return;
    }

    this.currentPath = newPath;
    this.removeExisting();

    // 检查是否应该显示评论
    if (!this.shouldShowComments(newPath)) {
      this.isLoaded = false;
      return;
    }

    // 查找内容容器
    const contentContainer = this.findContentContainer();
    if (!contentContainer) {
      setTimeout(() => this.load(), 300);
      return;
    }

    // 创建评论容器
    const container = this.createContainer();
    const loadingState = this.createLoadingState();
    const giscusDiv = container.querySelector('.giscus');
    
    giscusDiv.appendChild(loadingState);
    contentContainer.appendChild(container);

    // 创建giscus脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    // 设置配置属性
    Object.entries(this.config).forEach(([key, value]) => {
      if (key === 'crossorigin') {
        script.setAttribute(key, value);
      } else {
        script.setAttribute(`data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
      }
    });

    // 设置语言
    script.setAttribute('data-lang', this.getLanguage(newPath));
    script.async = true;

    // 监听加载事件
    script.onload = () => {
      this.isLoaded = true;
      setTimeout(() => {
        const loading = container.querySelector('.giscus-loading');
        if (loading && container.querySelector('iframe[src*="giscus"]')) {
          loading.remove();
        }
      }, 1000);
    };

    script.onerror = () => {
      const loading = container.querySelector('.giscus-loading');
      if (loading) {
        loading.textContent = '评论加载失败，请刷新页面重试';
        loading.classList.add('error');
      }
    };

    giscusDiv.appendChild(script);
  }

  /**
   * 初始化giscus管理器
   */
  init() {
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.load());
    } else {
      this.load();
    }

    // 监听路由变化
    const handleRouteChange = () => {
      setTimeout(() => this.load(), 200);
    };

    // 监听各种路由变化事件
    window.addEventListener('popstate', handleRouteChange);
    
    // 劫持pushState和replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
      originalPushState.apply(history, arguments);
      handleRouteChange();
    };
    
    history.replaceState = function() {
      originalReplaceState.apply(history, arguments);
      handleRouteChange();
    };

    // 监听链接点击
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        setTimeout(handleRouteChange, 100);
      }
    });
  }
}

// 创建全局实例
window.giscusManager = new GiscusManager();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GiscusManager;
}
