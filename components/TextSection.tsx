import { FC } from 'react'

interface Props {
  title: string
  subtitle?: string
  link?: string
  description: string
}

const TextSection: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <p className="text-md text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default TextSection
