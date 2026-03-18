import Link from 'next/link'

const columnClasses = {
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
} as const

export default function CityLinksGrid({
  title,
  links,
  columns = 5,
}: {
  title: string
  links: Array<{ name: string; href: string }>
  columns?: 4 | 5 | 6
}) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]">{title}</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-3 ${columnClasses[columns]} gap-3`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-gray-700 hover:text-[#2DB446] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
