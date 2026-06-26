import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[86.5vh] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
        Blood Bank Documentation
      </p>
      <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-6xl">Blood Bank</h1>
      <p className="mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        End-user documentation for managing donor records, blood collection, screening, storage,
        issue handling, returns, and day-to-day blood bank operations.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/docs/basic-setup"
          className={buttonVariants({ className: 'px-6', size: 'lg' })}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
