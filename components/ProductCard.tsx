import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { metadata } = product
  
  return (
    <div className="card">
      {metadata.product_image?.imgix_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${metadata.product_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={metadata.product_name}
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{metadata.product_name}</h3>
          <div className="bg-primary-50 px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-primary-700">
              {metadata.sustainability_score}/100
            </span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {metadata.category}
          </span>
        </div>
        
        {metadata.description && (
          <p className="text-gray-700 mb-4 line-clamp-2">{metadata.description}</p>
        )}
        
        {metadata.eco_alternative_to && (
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Replaces:</span> {metadata.eco_alternative_to}
          </p>
        )}
        
        {metadata.eco_certifications && metadata.eco_certifications.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metadata.eco_certifications.map((cert, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}