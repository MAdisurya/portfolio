import { FC, PropsWithChildren } from 'react'

const SectionContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="mx-auto max-w-3xl px-4">{children}</div>
}

export default SectionContainer
