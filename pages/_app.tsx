import 'katex/dist/katex.css'
import '../css/tailwind.css'
import '../css/prism.css'

import '@fontsource/inter/variable-full.css'

import { FC, PropsWithChildren } from 'react'
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'
import Head from 'next/head'
import { AppProps } from 'next/app'

import siteMetadata from '../data/siteMetadata'
import Analytics from '../components/analytics'
import LayoutWrapper from '../components/LayoutWrapper'
import { ClientReload } from '../components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

type ThemeProviderProps = PropsWithChildren<NextThemeProviderProps>
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, ...rest } = props

  return <NextThemeProvider {...rest}>{children}</NextThemeProvider>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
