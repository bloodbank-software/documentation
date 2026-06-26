'use client'

import { usePathname } from 'next/navigation'

import { SubLink } from '@/components/sidebar/sublink'
import { Separator } from '@/components/ui/separator'
import { Routes } from '@/lib/pageroutes'

export function PageMenu({ isSheet = false }) {
  const path = usePathname()

  if (!path.startsWith('/docs')) return null

  return (
    <div className="flex flex-col gap-3.5 pb-6">
      {Routes.map((item, index) => {
        if ('spacer' in item) {
          return <Separator key={`spacer-${index}`} className="my-2" />
        }

        if ('noLink' in item && item.noLink && item.items) {
          return (
            <div key={item.title + index}>
              {item.heading && <div className="mb-4 text-sm font-bold">{item.heading}</div>}
              <div className="mt-2.5 flex flex-col items-start gap-3 border-l pl-4 text-sm">
                {item.items.map((innerLink) => {
                  if (!('title' in innerLink && 'href' in innerLink)) return null

                  return (
                    <SubLink
                      key={innerLink.title + innerLink.href}
                      {...{
                        ...innerLink,
                        href: `/docs${item.href}${innerLink.href}`,
                        level: 1,
                        isSheet,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )
        }

        return (
          <div key={item.title + index}>
            {item.heading && <div className="mb-4 text-sm font-bold">{item.heading}</div>}
            <SubLink
              {...{
                ...item,
                href: `/docs${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
