export default defineAppConfig({
  global: {
    meetingLink: 'https://wa.me/qr/XTDJAOG5YNIEF1',
    available: true,
  },
  profile: {
    name: 'Ibrahim Fatho',
    job: 'Graphic designer and developer',
    email: 'ibrahimfatho@gmail.com',
    phone: '+966 55 833 4958',
    picture: '/my-photo.jpeg',
  },
  socials: {
    github: 'https://github.com/ibrahimfatho',
    twitter: 'https://x.com/ibrahim_fatho',
    linkedin: 'https://www.linkedin.com/in/ibrahim-fatho-193755256?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: 'https://www.instagram.com/ibrahim_fatho/',
    behance: 'https://www.behance.net/97bafcc4',
  },
  seo: {
    title: 'portfolio',
    description: 'beautiful portfolio for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
    url: 'https://github.com/ibrahimfatho',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
})