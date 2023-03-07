import { FC, PropsWithChildren } from 'react'

import { FrontMatter } from '../lib/types'
import { TextSection } from '../components/section'

interface Props {
  frontMatter: FrontMatter
}

const WorkExpLayout: FC<PropsWithChildren<Props>> = ({ children, frontMatter }) => {
  const { title, summary, linkText, linkUrl } = frontMatter

  return (
    <TextSection
      title={title}
      subtitle={summary}
      linkProps={{
        children: linkText,
        href: linkUrl,
      }}
    >
      {children}
    </TextSection>
  )
}

export default WorkExpLayout
