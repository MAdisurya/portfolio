import { FC } from 'react'

import NextJSDark from './nextjs-icon-dark.svg'
import NextJSLight from './nextjs-icon-light.svg'
import VercelDark from './vercel-icon-dark.svg'
import VercelLight from './vercel-icon-light.svg'

type Icon = {
  svg: any
  href?: string
}

const darkIcons: Icon[] = [
  { svg: NextJSDark, href: 'https://nextjs.org/' },
  { svg: VercelDark, href: 'https://vercel.com/' },
]

const lightIcons: Icon[] = [
  { svg: NextJSLight, href: 'https://nextjs.org/' },
  { svg: VercelLight, href: 'https://vercel.com/' },
]

interface Props {
  theme?: string
  size?: number
}

const PoweredByIcons: FC<Props> = ({ theme = 'light', size = 6 }) => {
  const icons = theme === 'light' ? darkIcons : lightIcons

  return (
    <>
      {icons.map((icon, index) => {
        const Svg = <icon.svg className={`fill-current w-${size} h-${size}`} />

        return icon.href ? (
          <a key={index} target="_blank" rel="noopener noreferrer" href={icon.href}>
            {Svg}
          </a>
        ) : (
          Svg
        )
      })}
    </>
  )
}

export default PoweredByIcons
