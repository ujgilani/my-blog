# My Blog

This is a personal blog built with Next.js and Tailwind CSS. The content is written in Markdown and managed locally.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating a New Blog Post

To create a new blog post, add a new `.md` or `.mdx` file to the `content/blog` directory.

The file should have a frontmatter section at the top with the following fields:

```yaml
---
title: "My New Blog Post"
date: "2025-08-27"
author: "Your Name"
---
```

## Key Libraries

*   [Next.js](https://nextjs.org/) - A React framework for building web applications.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
*   [MDX](https://mdxjs.com/) - Allows you to write JSX embedded inside Markdown.
*   [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parses frontmatter from Markdown files.
*   [remark](https://github.com/remarkjs/remark) - A Markdown processor.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)