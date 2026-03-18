import Link from 'next/link'
import { type LinkItem } from '@/lib/types'

export default function CrossLinkSection({
  title,
  sections,
}: {
  title: string
  sections: Array<{ heading: string; links: LinkItem[] }>
}) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]">{title}</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.heading}>
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]">{section.heading}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-[#2DB446] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
