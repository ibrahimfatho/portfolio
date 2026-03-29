type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'lucide:home',
        },
        programming: {
          name: 'Programming',
          to: '/programming',
          icon: 'lucide:code',
        },
        design: {
          name: 'Design',
          to: '/design',
          icon: 'lucide:palette',
        },
        about: {
          name: 'About',
          to: '/about',
          icon: 'lucide:user',
        },
      }
    default:
      return []
  }
}
