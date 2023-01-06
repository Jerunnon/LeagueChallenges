import * as React from 'react'
import { motion } from 'framer-motion';

import Head from "next/head";
import { Navbar } from "../Navbar";
import Sidebar from '../Sidebar';

const variants = {
    hidden: { opacity: 0, x:0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <motion.div
            initial='hidden'
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="View and compete alone or with friend in varius league of legends challenges" />
                <meta name='author' content='Jerunnon24' />
                <link rel="icon" type='image/png' href="/favicon.ico" />
                <title>LC.GG - Dashboard</title>
            </Head>
            
            <Navbar />
            <Sidebar />

            <div id="content" className="max-w-70 py-12 mx-auto">
                {children}
            </div>
        </motion.div>
    )
}

export default Layout;