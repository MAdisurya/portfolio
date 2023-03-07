import { FC, PropsWithChildren } from 'react'

import CustomLink, { CustomLinkProps } from '../Link'

interface Props {
  title: string
  subtitle?: string
  linkProps?: CustomLinkProps
}

export const TextSection: FC<PropsWithChildren<Props>> = ({
  title,
  subtitle,
  linkProps,
  children,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      {subtitle && <h3 className="text-lg text-gray-400">{subtitle}</h3>}
      {linkProps && (
        <span>
          <CustomLink
            className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            {...linkProps}
          />
        </span>
      )}
      <p className="prose dark:prose-dark">{children}</p>
    </div>
  )
}
