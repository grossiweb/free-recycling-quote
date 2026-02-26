'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_MENU, GET_MENU_BY_ID } from '@/lib/queries'

type MenuNode = {
  id?: string; label: string; url?: string | null; path?: string | null
  parentId?: string | null; target?: string | null
}
type MenuItemWithChildren = MenuNode & { id: string; children: MenuItemWithChildren[] }

const fallbackMenu: MenuNode[] = [
  { label: 'Services', url: '/services' },
  { label: 'Materials', url: '/materials' },
  { label: 'Industries', url: '/industries' },
  { label: 'Contact', url: '/contact' },
]

function normalizeHref(item: MenuNode): string {
  const raw = item.path || item.url || '/'
  if (raw.startsWith('/')) return raw !== '/' ? raw.replace(/\/+$/, '') : '/'
  try { const u = new URL(raw); const p = u.pathname||'/'; return p!=='/'?p.replace(/\/+$/,''):'/'; } catch { return '/' }
}

function buildTree(items: MenuNode[]): MenuItemWithChildren[] {
  const map = new Map<string, MenuItemWithChildren>(); const roots: MenuItemWithChildren[] = []
  items.forEach((item, i) => { const id = item.id||`item-${i}`; map.set(id, { ...item, id, children: [] }) })
  items.forEach((item, i) => {
    const id = item.id||`item-${i}`; const node = map.get(id)!
    if (item.parentId && map.has(item.parentId)) { map.get(item.parentId)!.children.push(node) } else { roots.push(node) }
  })
  return roots
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const menuId = process.env.NEXT_PUBLIC_WP_MENU_ID
  const menuLocation = process.env.NEXT_PUBLIC_WP_MENU_LOCATION || 'PRIMARY'
  const { data: menuByIdData } = useQuery(GET_MENU_BY_ID, { variables: { id: menuId as string }, skip: !menuId, errorPolicy: 'ignore', fetchPolicy: 'cache-first' })
  const { data: menuByLocData } = useQuery(GET_MENU, { variables: { location: menuLocation }, skip: !!menuId, errorPolicy: 'ignore', fetchPolicy: 'cache-first' })
  const wpItems: MenuNode[] | undefined = menuByIdData?.menu?.menuItems?.nodes || menuByLocData?.menuItems?.nodes
  const menuItems = buildTree(wpItems?.length ? wpItems : fallbackMenu)

  const navSpacings = ['mr-16', 'mr-[65px]', 'mr-16', '']

  return (
    <header className="self-stretch bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center self-stretch bg-white py-4 sm:py-5 md:py-6 lg:py-7 px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-[162px] gap-4 md:gap-0">
        <Link href="/">
          <Image src="/images/logo.png" alt="Recycling Quote" width={192} height={44} className="w-32 sm:w-40 md:w-48 h-auto object-fill" priority />
        </Link>

        <div className="hidden md:flex shrink-0 items-center">
          {menuItems.map((item, idx) => (
            <div key={item.id} className="relative group">
              {item.children.length > 0 ? (
                <>
                  <button className={`text-[#1F1E1E] text-lg hover:text-[#4BE576] transition-colors flex items-center gap-1 ${navSpacings[idx] || ''}`}>
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.children.map((child) => (
                      <Link key={child.id} href={normalizeHref(child)} className="block px-4 py-2 text-sm text-[#1F1E1E] hover:bg-[#f0fdf4] hover:text-[#4BE576]">{child.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={normalizeHref(item)} className={`text-[#1F1E1E] text-lg hover:text-[#4BE576] transition-colors ${navSpacings[idx] || ''}`}>{item.label}</Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:8179465655" className="flex flex-col shrink-0 items-start bg-[#4BE576] text-left py-[7px] px-6 sm:px-8 md:px-10 rounded-[40px] border-0">
            <span className="text-[#1E1E1E] text-xs sm:text-sm md:text-base font-bold">817-946-5655</span>
          </a>
          <button className="md:hidden p-1 text-[#1F1E1E]" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo.png" alt="Logo" width={140} height={32} className="h-9 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-[#1F1E1E]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.children.length > 0 ? (
                  <>
                    <button className="flex items-center justify-between w-full py-3 text-lg font-semibold text-[#1F1E1E] border-b border-gray-100"
                      onClick={() => setOpenSubmenu(openSubmenu === item.id ? null : item.id)}>
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${openSubmenu === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {openSubmenu === item.id && (
                      <div className="pl-4 py-1">
                        {item.children.map((child) => (
                          <Link key={child.id} href={normalizeHref(child)} className="block py-2 text-base text-[#686767]" onClick={() => setMobileOpen(false)}>{child.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={normalizeHref(item)} className="block py-3 text-lg font-semibold text-[#1F1E1E] border-b border-gray-100" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-gray-100">
            <a href="tel:8179465655" className="block w-full text-center bg-[#4BE576] text-[#1E1E1E] font-bold py-3 rounded-[40px]">817-946-5655</a>
          </div>
        </div>
      )}
    </header>
  )
}
