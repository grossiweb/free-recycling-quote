'use client'

import Link from 'next/link'

export default function MaterialSelector({
  materials,
}: {
  materials: Array<{ slug: string; name: string; icon: string }>
}) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-[#1a1a1a]">
        What Would You Like to Recycle?
      </h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {materials.map((material) => (
          <Link
            key={material.slug}
            href={`/materials/${material.slug}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center transition-shadow hover:shadow-lg hover:border-[#2DB446]"
          >
            <span className="material-symbols-outlined text-3xl text-[#2DB446]">
              {material.icon}
            </span>
            <span className="text-sm font-medium text-[#1a1a1a]">{material.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
