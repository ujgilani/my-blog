import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
// removed unused import 'matter'

const blogDir = path.join(process.cwd(), 'content/blog');

export default function sitemap(): MetadataRoute.Sitemap {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    return {
      url: `https://your-domain.com/blog/${slug}`,
      lastModified: new Date(),
    };
  });

  const routes = [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/blog',
      lastModified: new Date(),
    },
  ];

  return [...routes, ...posts];
}
