import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'rspress/runtime';

interface GiscusCommentsProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping?: string;
  strict?: string;
  reactionsEnabled?: string;
  emitMetadata?: string;
  inputPosition?: 'top' | 'bottom';
  theme?: string;
  lang?: string;
  loading?: 'lazy' | 'eager';
}

const GiscusComments: React.FC<GiscusCommentsProps> = ({
  repo = 'b9348/l4d2',
  repoId = 'R_kgDOPvHHoQ',
  category = 'Announcements',
  categoryId = 'DIC_kwDOPvHHoc4CvZUj',
  mapping = 'pathname',
  strict = '0',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  theme = 'preferred_color_scheme',
  loading = 'lazy',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isClient, setIsClient] = useState(false);

  // 确保只在客户端渲染
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!ref.current || !isClient) return;

    // 检查是否应该显示评论（排除首页）
    const shouldShowComments = location.pathname !== '/' && location.pathname.length > 1;
    if (!shouldShowComments) return;

    // 清理现有的giscus
    const existingScript = ref.current.querySelector('script[src*="giscus"]');
    if (existingScript) {
      existingScript.remove();
    }

    // 清理现有的iframe
    const existingIframe = ref.current.querySelector('iframe[src*="giscus"]');
    if (existingIframe) {
      existingIframe.remove();
    }

    // 创建新的giscus脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', strict);
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', location.pathname.startsWith('/zh') ? 'zh-CN' : 'en');
    script.setAttribute('data-loading', loading);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    ref.current.appendChild(script);
  }, [isClient, location.pathname, repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, theme, loading]);

  // 服务端渲染时不显示任何内容
  if (!isClient) {
    return null;
  }

  // 不在文档页面时不渲染
  const shouldShowComments = location.pathname !== '/' && location.pathname.length > 1;
  if (!shouldShowComments) {
    return null;
  }

  return (
    <div className="giscus-container">
      <h2>💬 评论</h2>
      <div ref={ref} className="giscus" />
    </div>
  );
};

export default GiscusComments;
