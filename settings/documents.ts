import { type Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Overview",
    href: "/introduction",
    noLink: true,
    items: [
      {
        title: "Overview",
        href: "",
      },
      {
        title: "Key Features",
        href: "/keyfeatures",
      },
      {
        title: "Workflow at a Glance",
        href: "/workflowataglance",
      },
      {
        title: "Getting Started",
        href: "/gettingstarted",
      },
      {
        title: "Initial Setup",
        href: "/initial-setup",
      },
    ],
  },
  {
    heading: "Donor Management",
    title: "Donor Management",
    href: "/donor-management",
    noLink: true,
    items: [
      {
        title: "Overview",
        href: "",
      },
      {
        title: "Donor Records",
        href: "/donor-records",
        noLink: true,
        items: [
          {
            title: "Donor Listing",
            href: "/donor-listing",
          },
          {
            title: "Search",
            href: "/search",
          },
          {
            title: "Filters & Saved Filters",
            href: "/filters-saved-filters",
          },
          {
            title: "Add Donor",
            href: "/add-donor",
          },
          {
            title: "Edit Donor",
            href: "/edit-donor",
          },
          {
            title: "Delete Donor",
            href: "/delete-donor",
          },
          {
            title: "Messaging",
            href: "/messaging",
          },
        ],
      },
      {
        title: "Donor Questionnaire",
        href: "/donor-questionnaire",
      },
      {
        title: "Donor Details",
        href: "/donor-details",
        noLink: true,
        items: [
          {
            title: "Overview",
            href: "",
          },
          {
            title: "Donation Tab",
            href: "/donation-tab",
          },
          {
            title: "Communication Tab",
            href: "/communication-tab",
          },
          {
            title: "Notes Tab",
            href: "/notes-tab",
          },
          {
            title: "Contact Tab",
            href: "/contact-tab",
          },
          {
            title: "Address Tab",
            href: "/address-tab",
          },
        ],
      },
      {
        title: "Important Notes",
        href: "/important-notes",
      },
    ],
  },
  {
    heading: "Master Data",
    title: "Master Data",
    href: "/master-data",
    noLink: true,
    items: [
      {
        title: "Overview",
        href: "",
      },
      {
        title: "Organization",
        href: "/organization",
      },
      {
        title: "Roles Management",
        href: "/roles-management",
      },
      {
        title: "Blood Bank Settings",
        href: "/blood-bank-settings",
      },
      {
        title: "Storage Locations",
        href: "/storage-locations",
      },
      {
        title: "User Management",
        href: "/user-management",
      },
      {
        title: "Collecting Locations",
        href: "/collecting-locations",
      },
      {
        title: "Partner Blood Banks",
        href: "/partner-blood-banks",
      },
      {
        title: "Partner Hospitals",
        href: "/partner-hospitals",
      },
      {
        title: "Phlebotomist",
        href: "/phlebotomist",
      },
      {
        title: "Lab Technicians",
        href: "/lab-technicians",
      },
      {
        title: "Medical Officer",
        href: "/medical-officer",
      },
      {
        title: "Blood Groups",
        href: "/blood-groups",
      },
      {
        title: "Blood Component Types",
        href: "/component-types",
      },
      {
        title: "Rejection Reason",
        href: "/rejection-reason",
      },
      {
        title: "Returns & Discards Reasons",
        href: "/return-discard-reasons",
      },
    ],
  },
  {
    heading: "Tools & Utilities",
    title: "Tools & Utilities",
    href: "/tools-utilities",
    noLink: true,
    items: [
      {
        title: "Donor Card Print",
        href: "/donor-card-print",
      },
      {
        title: "Pre-Print QR Codes",
        href: "/pre-print-qr-codes",
      },
      {
        title: "Blood Camp Manager",
        href: "/blood-camp-manager",
      },
      {
        title: "Blood Group Statistics",
        href: "/blood-group-statistics",
      },
      {
        title: "Donation Reminder",
        href: "/donation-reminder",
      },
      {
        title: "Report Generator",
        href: "/report-generator",
      },
    ],
  },
  {
    heading: "Inventory",
    title: "Inventory",
    href: "/inventory",
    noLink: true,
    items: [
      {
        title: "Overview",
        href: "",
      },
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "Blood Units List",
        href: "/blood-units-list",
      },
      {
        title: "Add Blood Unit",
        href: "/add-blood-unit",
      },
      {
        title: "Blood Unit Details",
        href: "/blood-unit-details",
      },
      {
        title: "Print Barcode & Actions",
        href: "/print-barcode-actions",
      },
      {
        title: "Transfer Blood Unit",
        href: "/transfer-blood-unit",
      },
      {
        title: "Discard & Expired",
        href: "/discard-expired",
      },
      {
        title: "Bulk Transfer",
        href: "/bulk-transfer",
      },
      {
        title: "Storage Units",
        href: "/storage-units",
      },
      {
        title: "Other Bank",
        href: "/other-bank",
      },
      {
        title: "Return",
        href: "/return",
      },
    ],
  },
  {
    heading: "Account Settings",
    title: "Account Settings",
    href: "/account-settings",
    noLink: true,
    items: [
      {
        title: "Overview",
        href: "",
      },
      {
        title: "User Profile",
        href: "/user-profile",
      },
      {
        title: "Change Password",
        href: "/change-password",
      },
      {
        title: "Permission History",
        href: "/permission-history",
      },
      {
        title: "Login History",
        href: "/login-history",
      },
    ],
  },
  {
    title: "Screening & Testing",
    href: "/screening-testing",
  },
  {
    title: "Transfer Blood Units",
    href: "/transfer-blood-units",
  },
  {
    title: "Discarded & Expired Units",
    href: "/discarded-expired-units",
  },
  {
    title: "Notification",
    href: "/notification",
  },
  {
    title: "Blood Request",
    href: "/blood-request",
  },
  {
    title: "Donor Registration",
    href: "/donor-registration",
  },
  {
    title: "Logout",
    href: "/logout",
  },
];
