import * as React from 'react'

import Head from "next/head";
import { Navbar } from "../Navbar";
import Sidebar from '../Sidebar';

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
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
        </>
    )
}

export default Layout;