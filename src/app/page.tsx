import Image from 'next/image'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'

export default function Home() {
  // Get your blog posts
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl text-blue-600 mr-3">📈</div>
              <span className="text-xl font-bold text-gray-800">Smart Money Moves</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-blue-600 hover:text-black transition">Start Here</Link>
              <Link href="/blog" className="text-blue-600 hover:text-black transition">Blog</Link>
              <Link href="#" className="text-blue-600 hover:text-black transition">Budget Tools</Link>
              <Link href="#" className="text-blue-600 hover:text-black transition">Debt Calculator</Link>
              <Link href="#" className="text-blue-600 hover:text-black transition">Contact</Link>
            </div>
            <button className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-4 h-0.5 bg-gray-700 mb-1"></span>
                <span className="block w-4 h-0.5 bg-gray-700 mb-1"></span>
                <span className="block w-4 h-0.5 bg-gray-700"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Take Control of Your Financial Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Simple, actionable advice for people 30+ who want to finally get their money right
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/5-step-budget-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
            >
              Start with Our Budget Guide
            </Link>
            <Link
              href="/quiz"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition"
            >
              Take Financial Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Feeling Lost with Your Money?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl text-red-500 mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Drowning in Debt</h3>
              <p className="text-gray-700">Credit cards, student loans, mortgage - it feels like you&apos;ll never be free</p>
            </div>
            <Link href="/no-emergency-fund" className="text-center">
              <div className="text-4xl text-orange-500 mb-4">🐷</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">No Emergency Fund</h3>
              <p className="text-gray-700">Living paycheck to paycheck with nothing saved for unexpected expenses</p>
            </Link>
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Retirement Worries</h3>
              <p className="text-gray-600">You know you should invest, but don&apos;t know where to start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles - NOW USING REAL CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Start Your Journey Here
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Display real blog posts */}
            {posts.slice(0, 3).map((post, index) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className={`text-sm font-semibold mb-2 ${
                    index === 0 ? 'text-blue-600' : 
                    index === 1 ? 'text-green-600' : 'text-purple-600'
                  }`}>
                    {post.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-black transition">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <span className="mr-3">⏱️ {post.readTime}</span>
                    <span>👤 {post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-blue-600 font-semibold hover:text-black transition"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}

            {/* If you have less than 3 posts, show placeholder for remaining */}
            {posts.length < 3 && Array.from({ length: 3 - posts.length }).map((_, index) => (
              <article key={`placeholder-${index}`} className="bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">Next Article Coming Soon</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-600 font-semibold mb-2">COMING SOON</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-700">
                    {index === 0 ? "Emergency Fund Secrets" : 
                     index === 1 ? "Debt Payoff Strategies" : "Investment Basics"}
                  </h3>
                  <p className="text-gray-500 mb-4">We&apos;re working on more amazing content for you!</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-3">⏱️ Coming soon</span>
                    <span>👤 Smart Money Team</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Weekly Money Tips
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 25,000+ people getting practical financial advice every Tuesday
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Get Free Tips
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-2xl text-blue-400 mr-3">📈</div>
                <span className="text-xl font-bold">Smart Money Moves</span>
              </div>
              <p className="text-gray-400">Helping people 30+ take control of their financial future with simple, actionable advice.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Latest Articles</h4>
              <ul className="space-y-2 text-gray-400">
                {posts.slice(0, 4).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="hover:text-white transition">
                      {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Budgeting</Link></li>
                <li><Link href="#" className="hover:text-white transition">Debt Freedom</Link></li>
                <li><Link href="#" className="hover:text-white transition">Emergency Funds</Link></li>
                <li><Link href="#" className="hover:text-white transition">Investing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">📘</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">🐦</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">📷</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">📺</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="text-gray-300">&copy; 2024 Smart Money Moves. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}