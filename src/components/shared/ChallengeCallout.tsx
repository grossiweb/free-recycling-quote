import Link from 'next/link'

export default function ChallengeCallout({
  title,
  description,
  challenges,
}: {
  title: string
  description: string
  challenges: Array<{ name: string; slug: string; icon: string }>
}) {
  return (
    <section className="py-16">
      <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]">{title}</h2>
      <p className="mb-8 text-gray-600">{description}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Link
            key={challenge.slug}
            href={`/challenges/${challenge.slug}`}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-3xl text-[#2DB446]">
              {challenge.icon}
            </span>
            <span className="font-semibold text-[#1a1a1a]">{challenge.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
