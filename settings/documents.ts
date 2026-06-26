import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Introduction',
    title: 'Overview',
    href: '/basic-setup',
    noLink: true,
    items: [
      {
        title: 'Overview',
        href: '',
      },
      {
        title: 'Key Features',
        href: '/keyfeatures',
      },
      {
        title: 'User Roles & Access',
        href: '/userroles',
      },
      {
        title: 'Getting Started',
        href: '/gettingstarted',
      },
    ],
  },
]
