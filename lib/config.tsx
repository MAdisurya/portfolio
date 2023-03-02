import React, { FC, PropsWithChildren } from 'react'

interface Config {
  env: {
    SHOW_HEADER_LOGO: boolean
  }
}

export const ConfigContext = React.createContext<Config | undefined>(undefined)

export const ConfigProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const config: Config = {
    env: {
      SHOW_HEADER_LOGO: process.env.SHOW_HEADER_LOGO === 'true',
    },
  }

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}
