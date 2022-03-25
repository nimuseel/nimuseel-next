import React, { useEffect, useRef } from 'react';

export const ArticleComments = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'nimuseel/nimuseel-next',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
      'issue-term': 'pathname',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <div className="comments" ref={ref} />;
};
