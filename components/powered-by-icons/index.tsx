import { FC } from 'react'

import NextJS from './nextjs-icon.svg'
import Vercel from './vercel-icon.svg'

type Icon = {
  svg: any
  href?: string
}
const icons: Icon[] = [
  { svg: NextJS, href: 'https://nextjs.org/' },
  { svg: Vercel, href: 'https://vercel.com/' },
]

interface Props {
  size?: number
}

const PoweredByIcons: FC<Props> = ({ size = 6 }) => {
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
