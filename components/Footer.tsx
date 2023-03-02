import { useTheme } from 'next-themes'

import siteMetadata from '../data/siteMetadata'
import SocialIcon from '../components/social-icons'

import PoweredByIcons from './powered-by-icons'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-row items-center justify-between">
        <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          Powered by <PoweredByIcons theme={theme} />
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
      </div>
    </footer>
  )
}
