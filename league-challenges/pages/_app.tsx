import React from 'react'

import type { AppProps } from "next/app"

import '@/styles/globals.css'
import Layout from "@/ui/layouts/main"

import { ThemeProvider } from 'next-themes'

//TODO: add framer motion

const MyApp = ({ Component, pageProps }: AppProps) => {

    return (    
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
     
    )
  }
  
  export default MyApp;
