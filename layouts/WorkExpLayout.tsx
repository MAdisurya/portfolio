import { FC, PropsWithChildren } from 'react'

import { FrontMatter } from '../lib/types'
import { TextSection } from '../components/section'

interface Props {
  frontMatter: FrontMatter
}

const WorkExpLayout: FC<PropsWithChildren<Props>> = ({ children, frontMatter }) => {
  const { title, summary, link_text, link_url } = frontMatter

  return (
    <TextSection
      title={title}
      subtitle={summary}
      linkProps={{
        children: link_text,
        href: link_url,
      }}
    >
      {children}
    </TextSection>
  )
}

export default WorkExpLayout
