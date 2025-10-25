import { Store } from '@/types'

interface StoreCardProps {
  store: Store
}

export default function StoreCard({ store }: StoreCardProps) {
  const { metadata } = store
  
  return (
    <div className="card">
      {metadata.store_image?.imgix_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${metadata.store_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={metadata.store_name}
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{metadata.store_name}</h3>
          <div className="flex items-center gap-1 bg-primary-50 px-3 py-1 rounded-full">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium text-primary-700">
              {metadata.sustainability_rating}/5
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{metadata.location}</p>
        
        {metadata.description && (
          <p className="text-gray-700 mb-4 line-clamp-2">{metadata.description}</p>
        )}
        
        {metadata.eco_features && metadata.eco_features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metadata.eco_features.map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}