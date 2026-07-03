'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'

import { SubLink } from '@/components/sidebar/sublink'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { type Paths, Routes } from '@/lib/pageroutes'
import { cn } from '@/lib/utils'

type SectionRoute = {
  title: string
  href: string
  noLink?: true
  heading?: string
  items: Paths[]
}

function isSectionRoute(item: Paths): item is SectionRoute {
  return 'title' in item && 'href' in item && 'items' in item
}

export function PageMenu({ isSheet = false }) {
  const path = usePathname()

  if (!path.startsWith('/docs')) return null

  return (
    <div className="flex flex-col gap-3.5 pb-6">
      {Routes.map((item, index) => {
        if ('spacer' in item) {
          return <Separator key={`spacer-${index}`} className="my-2" />
        }

        if (isSectionRoute(item) && item.noLink) {
          return (
            <CollapsibleSection key={item.title + index} item={item} isSheet={isSheet} />
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

function CollapsibleSection({
  item,
  isSheet,
}: {
  item: SectionRoute
  isSheet: boolean
}) {
  const path = usePathname()
  const sectionLabel = item.heading ?? item.title
  const isActiveSection = useMemo(() => path.startsWith(`/docs${item.href}`), [path, item.href])
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (isActiveSection) setIsOpen(true)
  }, [isActiveSection])

  return (
    <div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="mb-3 flex items-center gap-2">
          <div
            className={cn(
              'text-sm font-bold',
              isActiveSection ? 'text-foreground' : 'text-foreground/90'
            )}
          >
            {sectionLabel}
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="ml-auto rounded-full border border-border/70 bg-background shadow-sm hover:bg-muted"
              aria-label={`Toggle ${sectionLabel}`}
            >
              {isOpen ? (
                <LuChevronDown className="h-4 w-4" />
              ) : (
                <LuChevronRight className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="CollapsibleContent">
          <div className="mt-1 flex flex-col items-start gap-3 border-l pl-4 text-sm">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
