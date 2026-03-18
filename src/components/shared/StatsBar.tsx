export default function StatsBar({
  stats,
}: {
  stats: Array<{ value: string; label: string }>
}) {
  return (
    <section className="bg-[#1a1a1a] py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-[#2DB446]">{stat.value}</p>
            <p className="mt-1 text-sm text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
