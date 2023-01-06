import React from 'react'

import type { AppProps } from "next/app"

import '@/styles/globals.css'
import Layout from "@/ui/layouts/main"

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

//TODO: add framer motion

const MyApp = ({ Component, pageProps }: AppProps) => {

    return (    
      <ThemeProvider attribute='class'>
        <Layout>
          <AnimatePresence mode='wait' initial={true} onExitComplete={() => {if (typeof window !== 'undefined') {window.scrollTo({top: 0})}}}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
     
    )
  }
  
  export default MyApp;
