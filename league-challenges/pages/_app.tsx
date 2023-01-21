import React from 'react'

import type { AppProps } from "next/app"

import '@/styles/globals.css'
import Layout from "@/ui/layouts/main"

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { supabase } from '@/lib/superbaseClient';

const MyApp = ({ Component, pageProps }: AppProps<{initialSession: Session}>) => {

    return (    
    //  <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
       <ThemeProvider attribute='class'>
        <Layout>
          <AnimatePresence mode='wait' initial={true} onExitComplete={() => {if (typeof window !== 'undefined') {window.scrollTo({top: 0})}}}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    //  </SessionContextProvider>
     
    )
  }
  
  export default MyApp;
