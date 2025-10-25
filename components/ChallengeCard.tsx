import { Challenge } from '@/types'

interface ChallengeCardProps {
  challenge: Challenge
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const { metadata } = challenge
  
  return (
    <div className="card border-2 border-primary-200">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl">{metadata.challenge_icon || '🎯'}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {metadata.challenge_name}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                {metadata.challenge_type?.value || 'Challenge'}
              </span>
              <span>{metadata.duration_days} days</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{metadata.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="font-bold text-primary-600">
              {metadata.points_reward} points
            </span>
          </div>
          
          {metadata.active && (
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Active Now
            </span>
          )}
        </div>
      </div>
    </div>
  )
}