import { FC, PropsWithChildren } from 'react'

export const SectionTitle: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h2 className="underline underline-offset-4 decoration-primary-500 decoration-dashed text-xl font-semibold md:text-2xl">
      {children}
    </h2>
  )
}
