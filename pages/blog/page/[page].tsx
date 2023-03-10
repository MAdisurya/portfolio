import { GetStaticProps } from 'next'

import { PageSEO } from '../../../components/SEO'
import { PaginationProps } from '../../../components/Pagination'
import siteMetadata from '../../../data/siteMetadata'
import { getAllFilesFrontMatter } from '../../../lib/mdx'
import ListLayout from '../../../layouts/ListLayout'
import { POSTS_PER_PAGE } from '../../blog'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('blog')
  const pageNumber = Array.isArray(page) ? parseInt(page[0]) : parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination: PaginationProps = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
