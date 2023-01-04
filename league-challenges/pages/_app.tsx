import type { AppProps } from "next/app"
import '@/styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
    return (    
      <>
        <Script src="toggleColorTheme.js" defer />
        <Component {...pageProps} />
      </>
      
    )
  }
  
  export default MyApp;