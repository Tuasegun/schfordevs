import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../config/theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}
