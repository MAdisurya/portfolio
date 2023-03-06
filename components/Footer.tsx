import { useTheme } from 'next-themes'

import siteMetadata from '../data/siteMetadata'
import SocialIcon, { SocialKeys } from '../components/social-icons'

import PoweredByIcons from './powered-by-icons'

export default function Footer() {
  const { theme } = useTheme()

  const { socialUrls } = siteMetadata

  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col gap-y-2 sm:justify-between sm:flex-row sm:items-center">
        <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          Powered by <PoweredByIcons theme={theme} />
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          {Object.entries(socialUrls).map(([kind, url]) => (
            <SocialIcon key={kind} kind={kind as SocialKeys} href={url} size={6} />
          ))}
        </div>
      </div>
    </footer>
  )
}
