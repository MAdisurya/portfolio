import Head from 'next/head'
import { useRouter } from 'next/router'

import siteMetadata from '../data/siteMetadata'

interface BaseSEOProps {
  title?: string
  description?: string
}

interface CommonSEOProps extends BaseSEOProps {
  ogType: string
  ogImage: Array<{ url: string }> | string
  canonicalUrl?: string
}

const CommonSEO = ({ title, description, ogType, ogImage, canonicalUrl }: CommonSEOProps) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
      />
    </Head>
  )
}

interface PageSEOProps extends BaseSEOProps {}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return <CommonSEO title={title} description={description} ogType="website" ogImage={ogImageUrl} />
}

interface TagSEOProps extends BaseSEOProps {}

export const TagSEO = ({ title, description }: TagSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO title={title} description={description} ogType="website" ogImage={ogImageUrl} />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}

export type Author = { '@type': string; name: string; avatar?: string; twitter?: string }

interface BlogSEOProps extends Pick<BaseSEOProps, 'title'> {
  authorDetails: Author[]
  summary?: string
  date: string
  lastmod?: string
  url: string
  images?: string[]
  canonicalUrl?: string
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
}: BlogSEOProps) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  let authorList: Author[]
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    })
  } else {
    authorList = [
      {
        '@type': 'Person',
        name: siteMetadata.author,
      },
    ]
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  }

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}
