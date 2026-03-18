import Link from 'next/link'
import { type CardItem } from '@/lib/types'

const columnClasses = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
} as const

export default function GridCards({
  items,
  columns = 3,
}: {
  items: CardItem[]
  columns?: 2 | 3 | 4
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${columnClasses[columns]} gap-6`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative flex flex-col items-start rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
        >
          {item.badge && (
            <span className="absolute top-3 right-3 rounded-full bg-[#2DB446] px-3 py-0.5 text-xs font-semibold text-white">
              {item.badge}
            </span>
          )}
          {item.icon && (
            <span className="material-symbols-outlined mb-3 text-3xl text-[#2DB446]">
              {item.icon}
            </span>
          )}
          <h3 className="mb-1 text-lg font-semibold text-[#1a1a1a]">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </Link>
      ))}
    </div>
  )
}
