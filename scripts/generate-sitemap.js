const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'app/**/*.tsx',
    'pages/**/*.tsx',
    '!app/**/_*.tsx',
    '!pages/**/_*.tsx',
    '!pages/**/[*.tsx',
    '!pages/api',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('app', '')
            .replace('.tsx', '')
            .replace('/page', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>https://aminofabian.com${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
