import { FC, AnchorHTMLAttributes } from 'react'
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const CustomLink: FC<Props> = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink