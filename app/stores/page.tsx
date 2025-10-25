import { getStores } from '@/lib/cosmic'
import { Store } from '@/types'
import StoreCard from '@/components/StoreCard'

export default async function StoresPage() {
  const stores = await getStores() as Store[]

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🏪 Sustainable Stores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover partner stores committed to eco-friendly practices and sustainable shopping experiences.
          </p>
        </div>

        {stores.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No stores available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}