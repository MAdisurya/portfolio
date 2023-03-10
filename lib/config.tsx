import React, { FC, PropsWithChildren } from 'react'

interface Config {
  env: {
    SHOW_HEADER_LOGO: boolean
    SHOW_NEWSLETTER: boolean
    DISABLE_COMMENTS: boolean
  }
}

export const ConfigContext = React.createContext<Config | undefined>(undefined)

export const ConfigProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const config: Config = {
    env: {
      SHOW_HEADER_LOGO: process.env.SHOW_HEADER_LOGO === 'true',
      SHOW_NEWSLETTER: process.env.SHOW_NEWSLETTER === 'true',
      DISABLE_COMMENTS: process.env.DISABLE_COMMENTS === 'true',
    },
  }

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}
