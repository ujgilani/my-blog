import Link from 'next/link';

export default function NoEmergencyFundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-2xl text-blue-600 mr-3">📈</div>
                <span className="text-xl font-bold text-gray-800">Smart Money Moves</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#start" className="text-gray-700 hover:text-blue-600 transition">Start Here</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
              <Link href="/#tools" className="text-gray-700 hover:text-blue-600 transition">Budget Tools</Link>
              <Link href="/#calculator" className="text-gray-700 hover:text-blue-600 transition">Debt Calculator</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">The &apos;I Can&apos;t Save&apos; Guide to Building an Emergency Fund</h1>
          <p className="text-lg text-gray-600 mb-8">How to build a $1,000 safety net faster than you think, even if you&apos;re starting from zero.</p>

          <p className="mb-6">Hey there,</p>
          <p className="mb-6">Does the thought of an unexpected bill make your stomach drop? A car repair, a dental emergency, a sudden job loss? If you&apos;re living without a financial safety net, you&apos;re not just living on the edge—you&apos;re living with a constant, low-grade hum of anxiety.</p>
          <p className="mb-6">You&apos;re not alone. <strong className="text-blue-600">Nearly 40% of adults don&apos;t have enough savings to cover a $400 emergency.</strong></p>
          <p className="mb-6">But what if you could change that? What if you could build a buffer between you and life&apos;s inevitable curveballs? This isn&apos;t another article that will just tell you to &quot;save more.&quot; This is a realistic, step-by-step guide to building your first emergency fund, starting today.</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Let&apos;s Bust Some Myths: Why You *Think* You Can&apos;t Save</h2>
          <ul className="list-disc list-inside space-y-4 mb-6">
            <li><strong className="font-semibold">&quot;I don&apos;t make enough money.&quot;</strong> The problem usually isn&apos;t how much you make, but where it goes. We&apos;ll find the money, I promise.</li>
            <li><strong className="font-semibold">&quot;I have too much debt.&quot;</strong> An emergency fund is *more* important when you have debt. It&apos;s what prevents you from going into *more* debt when something goes wrong.</li>
            <li><strong className="font-semibold">&quot;I&apos;ll start when [I get a raise / I pay off my credit card / next month].&quot;</strong> The perfect time to start is a myth. The best time to start is now, with what you have.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Your First Goal: The $1,000 &quot;Mini-Fund&quot;</h2>
          <p className="mb-6">Forget about saving 6 months of expenses for now. That number is intimidating. Our only goal is to get to <strong className="text-blue-600">$1,000</strong>. This is your &quot;flat tire&quot; fund, your &quot;unexpected dental bill&quot; fund. It&apos;s the first wall of defense.</p>
          <p className="mb-6">Here&apos;s how we&apos;re going to do it.</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Give Your Fund a Purpose</h3>
              <p className="mb-4">This might sound silly, but it works. Log into your bank account and open a new savings account. Name it something that motivates you.</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                <li>&quot;Peace of Mind Fund&quot;</li>
                <li>&quot;Life Happens Fund&quot;</li>
                <li>&quot;Future Me Fund&quot;</li>
              </ul>
              <p>This simple act makes it real. It&apos;s no longer an abstract idea; it&apos;s a tangible goal.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Make It Live Somewhere Else</h3>
              <p className="mb-4">Your emergency fund should <strong className="font-semibold">not</strong> be in your regular checking account. It&apos;s too easy to spend.</p>
              <p className="mb-4">Open a <strong className="text-blue-600">high-yield savings account (HYSA)</strong> at a separate online bank.</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                <li><strong className="font-semibold">Why separate?</strong> It adds a layer of friction. You have to consciously transfer money out, which makes you think twice.</li>
                <li><strong className="font-semibold">Why high-yield?</strong> Your money will actually grow (a little) while it sits there, thanks to higher interest rates.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: The &quot;Found Money&quot; Challenge: Your First $50</h3>
              <p className="mb-4">Let&apos;s get the first deposit in there *this week*. Here are some ideas to &quot;find&quot; $50 without touching your regular budget:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                <li><strong className="font-semibold">Cancel a subscription you forgot about.</strong> That old streaming service? The monthly &quot;mystery box&quot;? Cancel it and transfer the savings.</li>
                <li><strong className="font-semibold">Sell one thing.</strong> Look around your home. That old gadget, the clothes you never wear? List one item on Facebook Marketplace or eBay.</li>
                <li><strong className="font-semibold">Have a &quot;no-spend&quot; weekend.</strong> Challenge yourself to a weekend of free activities. Cook at home, go for a hike, visit the library. Transfer the money you would have spent.</li>
                <li><strong className="font-semibold">Negotiate a bill.</strong> Call your cable or cell phone provider and ask for a better rate. It&apos;s a 15-minute call that could save you hundreds a year.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Automate Your Way to $1,000</h3>
              <p className="mb-4">This is the most important step. <strong className="font-semibold">You cannot rely on willpower alone.</strong></p>
              <p className="mb-4">Set up an automatic transfer from your checking account to your new HYSA.</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                <li><strong className="font-semibold">Start small.</strong> Can you spare $25 a week? That&apos;s $100 a month. You&apos;ll have $1,000 in 10 months without even thinking about it.</li>
                <li><strong className="font-semibold">Paycheck direct deposit.</strong> Some employers let you split your direct deposit. Have a small portion of every paycheck go directly into your emergency fund. You&apos;ll never even see it, so you won&apos;t miss it.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">From $1,000 to Financial Fortress: The Full Fund</h2>
          <p className="mb-6">Once you hit your $1,000 goal, take a moment to celebrate! You&apos;ve built a powerful financial habit.</p>
          <p className="mb-6">Now, it&apos;s time to aim for the full emergency fund: <strong className="text-blue-600">3 to 6 months of essential living expenses.</strong></p>
          <ul className="list-disc list-inside space-y-4 mb-6">
            <li><strong className="font-semibold">Calculate your number:</strong> Add up your monthly &quot;must-have&quot; expenses: rent/mortgage, utilities, groceries, transportation, insurance, minimum debt payments. Multiply that by 3 to get your minimum goal.</li>
            <li><strong className="font-semibold">Use these &quot;accelerators&quot; to get there faster:</strong>
              <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                <li><strong className="font-semibold">The Windfall Rule:</strong> Any unexpected money—a bonus, a tax refund, a birthday gift—goes directly into your emergency fund.</li>
                <li><strong className="font-semibold">The Raise Rule:</strong> Get a raise? Automatically increase your savings transfer by half of the new amount.</li>
                <li><strong className="font-semibold">The &quot;Debt-Free&quot; Snowball:</strong> Just paid off a credit card or a car loan? Redirect that old payment amount straight into your emergency fund.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">What&apos;s a *Real* Emergency?</h2>
          <p className="mb-6">An emergency fund is for true, unexpected emergencies that would otherwise put you into debt.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong className="text-green-600">YES:</strong> Job loss, medical emergency, urgent home repair (like a burst pipe), major car trouble.</li>
            <li><strong className="text-red-600">NO:</strong> A last-minute vacation, concert tickets, a new phone, holiday gifts.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Your Challenge for This Week</h2>
          <p className="mb-6">Don&apos;t just read this and forget it. Take action.</p>
          <ol className="list-decimal list-inside space-y-2 mb-6 font-semibold">
            <li>Open a high-yield savings account. It takes 10 minutes.</li>
            <li>Name it.</li>
            <li>Find your first $50.</li>
            <li>Set up an automatic transfer. Even if it&apos;s just $10.</li>
          </ol>
          <p className="text-lg">You&apos;ll be amazed at how quickly you can build a buffer that lets you sleep better at night. You&apos;ve got this.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Smart Money Moves. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
