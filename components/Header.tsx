import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-gray-900">EcoShop</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/stores" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Stores
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/tips" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Eco Tips
            </Link>
            <Link href="/challenges" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Challenges
            </Link>
            <Link href="/achievements" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Achievements
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}