import '@/styles/globals.css'
import '@/styles/parallax.css'
import '@/styles/components.css'
import '@/styles/sections.css'
import '@/styles/animated-grid.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
