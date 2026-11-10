import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
          route('/contact', 'routes/contact/route.js');
          route('/projects/slice', 'routes/projects.slice/route.js');
          route('/projects/volkihar-knight', 'routes/projects.volkihar-knight/route.js');
          route('/uses', 'routes/uses/route.js');
          route('/articles', 'routes/articles_._index/route.jsx', { index: true });
          route('/articles/:slug', 'routes/articles/route.jsx');
          route('/api/set-theme', 'routes/api.set-theme.js');
          route('*', 'routes/$.jsx');
        });
      },
    }),
    jsconfigPaths(),
  ],
});
