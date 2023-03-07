import { FC } from 'react'

import CustomLink, { CustomLinkProps } from '../Link'

interface Props {
  title: string
  subtitle?: string
  linkProps?: CustomLinkProps
  description: string
}

export const TextSection: FC<Props> = ({ title, subtitle, linkProps, description }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <h3 className="text-lg text-gray-400">{subtitle}</h3>
      <CustomLink
        className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        {...linkProps}
      />
      <p className="text-md text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}
