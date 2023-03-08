import { useTheme } from 'next-themes'

import siteMetadata from '../data/siteMetadata'
import SocialIcon, { SocialKeys } from '../components/social-icons'
import CustomLink from '../components/Link'

import PoweredByIcons from './powered-by-icons'

export default function Footer() {
  const { theme } = useTheme()

  const { socialUrls } = siteMetadata

  return (
    <footer className="mt-16">
      <h2 className="mb-4 text-lg">Want to work with me?</h2>
      <h2 className="text-lg">
        Send an email to{' '}
        <CustomLink
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href={`mailto:${socialUrls.email}`}
        >
          {socialUrls.email}
        </CustomLink>{' '}
        and let's get in touch!
      </h2>
      <div className="my-8 flex flex-col gap-y-2 sm:justify-between sm:flex-row sm:items-center">
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
