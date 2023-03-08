import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/formulair.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
