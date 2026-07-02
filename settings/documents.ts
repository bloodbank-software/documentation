import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Introduction',
    title: 'Overview',
    href: '/introduction',
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
        title: 'Workflow at a Glance',
        href: '/workflowataglance',
      },
      {
        title: 'Getting Started',
        href: '/gettingstarted',
      },
    ],
  },
  {
    heading: 'Master Data',
    title: 'Master Data',
    href: '/master-data',
    noLink: true,
    items: [
      {
        title: 'Overview',
        href: '',
      },
      {
        title: 'Collecting Locations',
        href: '/collecting-locations',
      },
      {
        title: 'Partner Blood Banks',
        href: '/partner-blood-banks',
      },
      {
        title: 'Partner Hospitals',
        href: '/partner-hospitals',
      },
      {
        title: 'Phlebotomist',
        href: '/phlebotomist',
      },
      {
        title: 'Lab Technicians',
        href: '/lab-technicians',
      },
      {
        title: 'Blood Groups',
        href: '/blood-groups',
      },
    ],
  },
]
