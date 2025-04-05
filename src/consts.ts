import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'bWrg3r',
  description:
    'We\'re bWrg3r, a CTF team from UTMCyberX',
  href: 'https://bwrg3r.github.io/',
  author: 'bwrg3r',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/bwrg3r',
    label: 'GitHub',
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bwrg3r@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
