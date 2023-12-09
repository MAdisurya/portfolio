import { FC, HTMLAttributes } from 'react'

import siteMetadata from '../../data/siteMetadata'

import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Threads from './threads.svg'

// Icons taken from: https://simpleicons.org/

export type SocialKeys = keyof typeof siteMetadata.socialUrls

const components: Record<SocialKeys, FC<HTMLAttributes<any>>> = {
  email: Mail,
  github: Github,
  threads: Threads,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

interface Props {
  kind: keyof typeof components
  href: string
  size?: number
}

const SocialIcon: FC<Props> = ({ kind, href, size = 8 }) => {
  const url = kind === 'email' ? `mailto:${href}` : href

  if (!href || (kind === 'email' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(url)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
