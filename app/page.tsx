import { getStores, getProducts, getChallenges, getAchievements } from '@/lib/cosmic'
import { Store, Product, Challenge, Achievement } from '@/types'
import StoreCard from '@/components/StoreCard'
import ProductCard from '@/components/ProductCard'
import ChallengeCard from '@/components/ChallengeCard'
import AchievementCard from '@/components/AchievementCard'
import Link from 'next/link'

export default async function HomePage() {
  const [stores, products, challenges, achievements] = await Promise.all([
    getStores(),
    getProducts(),
    getChallenges(),
    getAchievements(),
  ])

  const featuredStores = (stores as Store[]).slice(0, 3)
  const featuredProducts = (products as Product[]).slice(0, 3)
  const activeChallenges = (challenges as Challenge[]).filter(c => c.metadata.active).slice(0, 2)
  const topAchievements = (achievements as Achievement[]).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Shop Sustainably, <span className="text-primary-600">Live Responsibly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover eco-friendly stores, sustainable products, and join a community committed to making shopping better for our planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/stores" className="btn-primary">
                Explore Stores
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">🏪 Featured Sustainable Stores</h2>
            <p className="section-subtitle">
              Partner stores committed to eco-friendly practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/stores" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Stores →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">🛍️ Eco-Friendly Products</h2>
            <p className="section-subtitle">
              Sustainable alternatives for everyday items
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Active Challenges */}
      {activeChallenges.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">🎯 Active Challenges</h2>
              <p className="section-subtitle">
                Join the community and earn points
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {activeChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/challenges" className="text-primary-600 hover:text-primary-700 font-medium">
                View All Challenges →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Achievements Preview */}
      <section className="py-16 bg-gradient-to-br from-earth-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">🏆 Unlock Achievements</h2>
            <p className="section-subtitle">
              Earn badges and track your environmental impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/achievements" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Achievements →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious shoppers making sustainable choices every day.
          </p>
          <Link href="/tips" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors">
            Learn Sustainable Shopping Tips
          </Link>
        </div>
      </section>
    </div>
  )
}