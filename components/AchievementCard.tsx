import { Achievement } from '@/types'

interface AchievementCardProps {
  achievement: Achievement
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const { metadata } = achievement
  
  const tierColors: Record<string, string> = {
    platinum: 'from-slate-400 to-slate-600',
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-gray-400 to-gray-600',
    bronze: 'from-orange-400 to-orange-600',
  }
  
  const tierKey = metadata.tier?.key || 'bronze'
  
  return (
    <div className="card">
      <div className={`h-2 bg-gradient-to-r ${tierColors[tierKey]}`}></div>
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tierColors[tierKey]} flex items-center justify-center text-3xl`}>
            {metadata.badge_icon || '🏆'}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {metadata.badge_name}
            </h3>
            <span className="text-sm text-gray-600">
              {metadata.tier?.value || 'Badge'}
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{metadata.description}</p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600 mb-1">Unlock Criteria:</p>
          <p className="text-sm font-medium text-gray-900">
            {metadata.unlock_criteria}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-bold text-primary-600">
              {metadata.points_value} points
            </span>
          </div>
          <button className="text-sm text-gray-600 hover:text-primary-600">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}