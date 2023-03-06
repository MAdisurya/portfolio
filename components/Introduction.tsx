import { FC } from 'react'

const Introduction: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-7xl md:leading-14">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
          Hi there
        </span>{' '}
        👋
      </h1>
      <h2 className="text-2xl font-semibold sm:text-2xl md:text-3xl">
        I'm Mario Adisurya, and I'm a software engineer.
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 md:text-xl">
        More specifically, I'm a web developer, and I can build web apps that your users and
        developers will love, with the expertise and experience to contribute across the entire
        stack.
      </p>
    </div>
  )
}

export default Introduction
