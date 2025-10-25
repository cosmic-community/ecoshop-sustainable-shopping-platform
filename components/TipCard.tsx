import { EcoTip } from '@/types'

interface TipCardProps {
  tip: EcoTip
}

export default function TipCard({ tip }: TipCardProps) {
  const { metadata } = tip
  
  const impactColors: Record<string, string> = {
    Low: 'bg-blue-100 text-blue-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-green-100 text-green-700',
  }
  
  return (
    <div className="card">
      {metadata.featured_image?.imgix_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={metadata.tip_title}
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{metadata.tip_title}</h3>
          {metadata.impact_level && (
            <span className={`text-xs px-3 py-1 rounded-full ${impactColors[metadata.impact_level] || 'bg-gray-100 text-gray-700'}`}>
              {metadata.impact_level} Impact
            </span>
          )}
        </div>
        
        {metadata.category && (
          <div className="mb-4">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {metadata.category.value}
            </span>
          </div>
        )}
        
        <div className="text-gray-700 prose prose-sm line-clamp-3">
          {metadata.content.substring(0, 150)}...
        </div>
        
        <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
          Read More →
        </button>
      </div>
    </div>
  )
}