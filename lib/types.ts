import matter from 'gray-matter'
import readingTime from 'reading-time'

export type FrontMatter = matter.GrayMatterFile<string>['data'] & {
  readingTime?: ReturnType<typeof readingTime>
  fileName?: string
  slug: string
  date: string | null
}
