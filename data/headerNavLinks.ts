import { isDevelopment } from '../lib/environment'

interface HeaderNavLink {
  href: string
  title: string
}

const headerNavLinks: Array<HeaderNavLink | undefined> = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  isDevelopment() ? { href: '/projects', title: 'Projects' } : undefined,
  { href: '/about', title: 'About' },
]

export default headerNavLinks
