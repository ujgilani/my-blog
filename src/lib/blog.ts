import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
  author: string
  tags: string[]
  content: string
  excerpt: string
}

export interface BlogPostPreview {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
  author: string
  tags: string[]
  excerpt: string
}

export function getSortedPostsData(): BlogPostPreview[] {
  try {
    // Get file names under /content/blog
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Calculate reading time
      const readingTimeResult = readingTime(matterResult.content);

      // Create excerpt from content (first 200 characters)
      const excerpt =
        matterResult.content.replace(/[#*`]/g, "").substring(0, 200) + "...";

      return {
        slug,
        excerpt,
        readTime: readingTimeResult.text,
        ...(matterResult.data as Omit<BlogPostPreview, "slug" | "excerpt" | "readTime">),
      };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array as a fallback
  }
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Calculate reading time
  const readingTimeResult = readingTime(matterResult.content)
  
  // Create excerpt
  const excerpt = matterResult.content.replace(/[#*`]/g, '').substring(0, 200) + '...'

  return {
    slug,
    content: contentHtml,
    excerpt,
    readTime: readingTimeResult.text,
    ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'excerpt' | 'readTime'>)
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}