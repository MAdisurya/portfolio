import siteMetadata from '../../data/siteMetadata'

const formatDate = (date: string) => {
  type FormatOptions = 'year' | 'month' | 'day'
  const options: Pick<Intl.DateTimeFormatOptions, FormatOptions> = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

  return now
}

export default formatDate
