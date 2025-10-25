import { getProducts } from '@/lib/cosmic'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'

export default async function ProductsPage() {
  const products = await getProducts() as Product[]

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🛍️ Eco-Friendly Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse sustainable alternatives for everyday items. Make better choices for the planet.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}