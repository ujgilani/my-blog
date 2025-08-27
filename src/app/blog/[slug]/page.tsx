import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostData, getSortedPostsData } from '@/lib/blog'
import { format } from 'date-fns'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  try {
    const post = await getPostData(params.slug)
    const allPosts = getSortedPostsData()
    const relatedPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 3)

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <div className="text-2xl text-blue-600 mr-3">📈</div>
                <span className="text-xl font-bold text-gray-800">Smart Money Moves</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">All Articles</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition">Tools</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>•</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>•</li>
              <li className="text-gray-800">{post.title}</li>
            </ol>
          </nav>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.description}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>📅 {format(new Date(post.date), 'MMMM d, yyyy')}</span>
              <span>⏱️ {post.readTime}</span>
              <span>👤 {post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-900">
            <div 
              className="
                [&>h1]:text-gray-900 [&>h1]:font-bold [&>h1]:text-3xl [&>h1]:mb-6 [&>h1]:mt-8
                [&>h2]:text-gray-900 [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:mb-4 [&>h2]:mt-8
                [&>h3]:text-gray-900 [&>h3]:font-bold [&>h3]:text-xl [&>h3]:mb-3 [&>h3]:mt-6
                [&>p]:text-gray-800 [&>p]:leading-7 [&>p]:mb-6
                [&>strong]:text-gray-900 [&>strong]:font-semibold
                [&>ul]:my-6 [&>ul]:text-gray-800
                [&>li]:mb-2 [&>li]:text-gray-800
                [&>ol]:my-6 [&>ol]:text-gray-800
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-700
                [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:rounded [&>code]:text-gray-900
                text-gray-800
              "
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      width={400} 
                      height={250}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <div className="text-sm text-blue-600 font-semibold mb-2">
                        {relatedPost.category.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600 transition">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{relatedPost.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">⏱️ {relatedPost.readTime}</span>
                        <span>👤 {relatedPost.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Enjoyed this article?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get more financial tips delivered to your inbox every week
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="text-2xl text-blue-400 mr-3">📈</div>
              <span className="text-xl font-bold">Smart Money Moves</span>
            </div>
            <p className="text-gray-400 mb-6">Helping people 30+ take control of their financial future</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  } catch {
    notFound()
  }
}