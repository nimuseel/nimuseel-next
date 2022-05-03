import fs from 'fs';
import { GetServerSideProps } from 'next';
import { join } from 'path';
import { getArticles } from '../lib/api';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.nimuseel.dev';

  const pagesDirectory = join(process.cwd(), 'pages');

  const staticPages = fs
    .readdirSync(pagesDirectory)
    .filter((staticPage) => {
      return ![
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
        'article',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const articles = getArticles(['category', 'slug']);

  const articlePaths = articles.map((article) => {
    return `${baseUrl}/article/${article.category}/${article.slug}`;
  });

  const allPaths = [...staticPages, ...articlePaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
