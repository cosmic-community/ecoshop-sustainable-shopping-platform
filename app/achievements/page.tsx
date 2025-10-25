import { getAchievements } from '@/lib/cosmic'
import { Achievement } from '@/types'
import AchievementCard from '@/components/AchievementCard'

export default async function AchievementsPage() {
  const achievements = await getAchievements() as Achievement[]

  // Group achievements by tier
  const tiers = ['platinum', 'gold', 'silver', 'bronze']
  const tierLabels: Record<string, string> = {
    platinum: 'Platinum',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
  }

  const tierColors: Record<string, string> = {
    platinum: 'from-slate-400 to-slate-600',
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-gray-400 to-gray-600',
    bronze: 'from-orange-400 to-orange-600',
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🏆 Achievements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock badges and earn points for your sustainable shopping habits. Track your environmental impact!
          </p>
        </div>

        {achievements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No achievements available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {tiers.map((tier) => {
              const tierAchievements = achievements.filter(
                (achievement) => achievement.metadata.tier?.key === tier
              )

              if (tierAchievements.length === 0) {
                return null
              }

              return (
                <section key={tier}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tierColors[tier]} flex items-center justify-center`}>
                      <span className="text-white text-xl font-bold">
                        {tierLabels[tier][0]}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {tierLabels[tier]} Achievements
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tierAchievements.map((achievement) => (
                      <AchievementCard key={achievement.id} achievement={achievement} />
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