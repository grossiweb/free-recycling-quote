import Link from 'next/link'
import { type LinkItem } from '@/lib/types'

const columnClasses = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
} as const

export default function RelatedPages({
  title,
  links,
  columns = 3,
}: {
  title: string
  links: LinkItem[]
  columns?: 2 | 3
}) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]">{title}</h2>
      <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-6`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <div>
              <h3 className="font-semibold text-[#1a1a1a]">{link.label}</h3>
              {link.description && (
                <p className="mt-1 text-sm text-gray-600">{link.description}</p>
              )}
            </div>
            <span className="material-symbols-outlined text-[#2DB446]">arrow_forward</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
