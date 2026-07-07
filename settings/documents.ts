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
        title: 'User Management',
        href: '/user-management',
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
      {
        title: 'Blood Component Types',
        href: '/component-types',
      },
      {
        title: 'Returns & Discards Reasons',
        href: '/return-discard-reasons',
      },
    ],
  },
  {
    heading: 'Tools & Utilities',
    title: 'Tools & Utilities',
    href: '/tools-utilities',
    noLink: true,
    items: [
      {
        title: 'Donor Card Print',
        href: '/donor-card-print',
      },
      {
        title: 'Pre-Print QR Codes',
        href: '/pre-print-qr-codes',
      },
      {
        title: 'Blood Camp Manager',
        href: '/blood-camp-manager',
      },
      {
        title: 'Blood Group Statistics',
        href: '/blood-group-statistics',
      },
      {
        title: 'Donation Reminder',
        href: '/donation-reminder',
      },
      {
        title: 'Report Generator',
        href: '/report-generator',
      },
    ],
  },
]
