import GlobalStyle from '@/styles/globals'
import type { AppProps } from 'next/app'
import { FipeProvider } from '@/context/contextFipe'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FipeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </FipeProvider>
  )
}
