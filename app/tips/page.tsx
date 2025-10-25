import { getEcoTips } from '@/lib/cosmic'
import { EcoTip } from '@/types'
import TipCard from '@/components/TipCard'

export default async function TipsPage() {
  const tips = await getEcoTips() as EcoTip[]

  // Group tips by category
  const categories = ['shopping', 'lifestyle', 'recycling', 'energy']
  const categoryLabels: Record<string, string> = {
    shopping: 'Shopping Tips',
    lifestyle: 'Lifestyle',
    recycling: 'Recycling',
    energy: 'Energy Saving',
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📚 Eco Tips & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn practical tips for sustainable shopping and living. Every small change makes a difference!
          </p>
        </div>

        {tips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tips available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryTips = tips.filter(
                (tip) => tip.metadata.category?.key === category
              )

              if (categoryTips.length === 0) {
                return null
              }

              return (
                <section key={category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {categoryLabels[category] || category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryTips.map((tip) => (
                      <TipCard key={tip.id} tip={tip} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}