export const donorDashboardData = {
    menu: [
        {
            name: 'Dashboard',
            icon: 'fi fi-ss-apps',
            link: '/donor-dashboard/dashboard'
        },
        {
            name: 'Donations',
            icon: 'fi fi-ss-donate',
            link: '/donor-dashboard/donations'
        },
        {
            name: 'Notifications',
            icon: 'fi fi-sr-bell-notification-social-media',
            link: '/donor-dashboard/notifications'
        },
        {
            name: 'Followed NGOs',
            icon: 'fi fi-br-building-ngo',
            link: '/donor-dashboard/followed-ngos'
        }
    ],
    other: [
        {
            name: 'Settings',
            icon: 'fi fi-sr-settings',
            link: '/donor-dashboard/setting'
        },
        {
            name: 'Account',
            icon: 'fi fi-sr-user-trust',
            link: '/donor-dashboard/account'
            
        },
        {
            name: 'Logout',
            icon: 'fi fi-bs-exit',
            link: '/donor-dashboard/logout',
        },
        {
            name: 'Contact & Help',
            icon: 'fi fi-sr-info',
            link: '/donor-dashboard/contact&help',
        }
    ]

}

export const ngoDashboardData = {
    menu: [
        {
            name: 'Dashboard',
            icon: 'fi fi-ss-apps',
            link: '/ngo-dashboard/dashboard'
        },
        {
            name: 'Campaigns',
            icon: 'fi fi-ss-fundraising',
            link: '/ngo-dashboard/campaigns'
        },
        {
            name: 'Donations',
            icon: 'fi fi-ss-donate',
            link: '/ngo-dashboard/donations'
        },
        {
            name: 'Impact Reports',
            icon: 'fi fi-ss-chart-line-up',
            link: '/ngo-dashboard/impact-reports'
        },
        {
            name: 'Messages',
            icon: 'fi fi-ss-comment',
            link: '/ngo-dashboard/messages'
        },
        {
            name: 'Withdrawals',
            icon: 'fi fi-ss-bank',
            link: '/ngo-dashboard/withdrawals'
        },
        {
            name: 'Notifications',
            icon: 'fi fi-sr-bell-notification-social-media',
            link: '/ngo-dashboard/notifications'
        }
    ],
    other: [
        {
            name: 'Profile & Verification',
            icon: 'fi fi-sr-user-trust',
            link: '/ngo-dashboard/profile'
        },
        {
            name: 'Settings',
            icon: 'fi fi-sr-settings',
            link: '/ngo-dashboard/settings'
        },
        {
            name: 'Logout',
            icon: 'fi fi-bs-exit',
            link: '/ngo-dashboard/logout',
        },
        {
            name: 'Contact & Help',
            icon: 'fi fi-sr-info',
            link: '/ngo-dashboard/contact&help',
        }
    ]
}

export const adminDashboardData = {
    menu: [
        {
            name: 'Dashboard',
            icon: 'fi fi-ss-apps',
            link: '/admin-dashboard/dashboard'
        },
        {
            name: 'Moderate NGOs',
            icon: 'fi fi-br-building-ngo',
            link: '/admin-dashboard/ngo-moderation'
        },
        {
            name: 'Users',
            icon: 'fi fi-sr-users',
            link: '/admin-dashboard/users'
        },
        {
            name: 'Reports',
            icon: 'fi fi-sr-flag',
            link: '/admin-dashboard/reports'
        },
        {
            name: 'Notifications',
            icon: 'fi fi-sr-bell-notification-social-media',
            link: '/admin-dashboard/notifications'
        }
    ],
    other: [
        {
            name: 'Settings',
            icon: 'fi fi-sr-settings',
            link: '/admin-dashboard/settings'
        },
        {
            name: 'Logout',
            icon: 'fi fi-bs-exit',
            link: '/admin-dashboard/logout',
        }
    ]
}


export const NgoCategories = [
  "environment",
  "education",
  "children",
  "health",
  "animals",
  "shelter",
  "community",
  "livelihood",
  "research",
  "culture",
  "arts",
  "rural development",
  "technology",
  "elderly"
]


export const dummyNgos = [
  {
    _id: "ngo1",
    name: "Helping Hands Foundation",
    registrationNumber: "MH/2022/1234567",
    officialContactEmail: "contact@helpinghands.org",
    officialContactPhone: "9876543210",
    isEmailVerified: true,
    isActive: true,
    isVerified: true,
    averageRatings: 4.5,
    totalRatings: 120,
    category: ["education", "health"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      district: "Mumbai",
      postalCode: "400001",
      country: "India",
    },
    logo: "https://www.motocms.com/blog/wp-content/uploads/2017/11/1040-563-3.jpg",
    accountDetails: [],
  },
  {
    _id: "ngo2",
    name: "Green Earth Initiative",
    registrationNumber: "DL/2021/7654321",
    officialContactEmail: "info@greenearth.org",
    officialContactPhone: "9012345678",
    isEmailVerified: true,
    isActive: true,
    isVerified: true,
    averageRatings: 4.8,
    totalRatings: 98,
    category: ["environment", "climate"],
    address: {
      city: "Delhi",
      state: "Delhi",
      district: "New Delhi",
      postalCode: "110001",
      country: "India",
    },
    logo: "https://edit.org/photos/editor/json/2018/07/02/0/c/0c0d009b521ef84d0e85019e126a5438_edit.org.jpg-376.jpg",
    accountDetails: [],
  },
  {
    _id: "ngo3",
    name: "Animal Rescue League",
    registrationNumber: "TN/2020/9988776",
    officialContactEmail: "help@arl.org",
    officialContactPhone: "8765432109",
    isEmailVerified: false,
    isActive: true,
    isVerified: false,
    averageRatings: 3.9,
    totalRatings: 45,
    category: ["animal"],
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
      district: "Chennai",
      postalCode: "600001",
      country: "India",
    },
    logo: "https://images.template.net/87832/World-NGO-Day-Youtube-Banner-Template.jpeg",
    accountDetails: [],
  },
  {
    _id: "ngo4",
    name: "Women Empowerment Trust",
    registrationNumber: "KA/2019/1122334",
    officialContactEmail: "support@wet.org",
    officialContactPhone: "8123456789",
    isEmailVerified: true,
    isActive: true,
    isVerified: true,
    averageRatings: 4.7,
    totalRatings: 67,
    category: ["women", "education"],
    address: {
      city: "Bangalore",
      state: "Karnataka",
      district: "Bangalore Urban",
      postalCode: "560001",
      country: "India",
    },
    logo: "https://static.vecteezy.com/system/resources/previews/020/249/804/large_2x/international-ngo-day-theme-template-illustration-suitable-for-poster-banners-campaign-and-greeting-card-free-vector.jpg",
    accountDetails: [],
  },
];