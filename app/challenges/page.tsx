import { getChallenges } from '@/lib/cosmic'
import { Challenge } from '@/types'
import ChallengeCard from '@/components/ChallengeCard'

export default async function ChallengesPage() {
  const challenges = await getChallenges() as Challenge[]

  const activeChallenges = challenges.filter((c) => c.metadata.active)
  const inactiveChallenges = challenges.filter((c) => !c.metadata.active)

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎯 Community Challenges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join sustainability challenges, earn points, and make a positive impact with the community.
          </p>
        </div>

        {/* Active Challenges */}
        {activeChallenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </section>
        )}

        {/* Upcoming/Past Challenges */}
        {inactiveChallenges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inactiveChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </section>
        )}

        {challenges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No challenges available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}