import { FC } from 'react'
import dynamic from 'next/dynamic'

import siteMetadata from '../../data/siteMetadata'
import { FrontMatter } from '../../lib/types'

const UtterancesComponent = dynamic(
  () => {
    return import('../../components/comments/Utterances')
  },
  { ssr: false }
)
const GiscusComponent = dynamic(
  () => {
    return import('../../components/comments/Giscus')
  },
  { ssr: false }
)
const DisqusComponent = dynamic(
  () => {
    return import('../../components/comments/Disqus')
  },
  { ssr: false }
)

interface Props {
  frontMatter: FrontMatter
}

const Comments: FC<Props> = ({ frontMatter }) => {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return null
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && <GiscusComponent />}
      {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
        <UtterancesComponent />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </div>
  )
}

export default Comments
