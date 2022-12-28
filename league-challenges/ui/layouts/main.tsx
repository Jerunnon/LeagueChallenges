import React from 'react'
import Head from "next/head"
import { Sidebar } from "../Sidebar"

type props = {
    children: JSX.Element,
    router: any
}

const main = ({ children, router }: props) => {
    return (
       <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Leauge of Legends Challenges" />
                <meta name='author' content='Simon Klein' />
                <link rel="icon" type='image/png' href="/favicon.ico" />
                <title>LC.gg - Leauge Challenges</title>
            </Head>

            <Sidebar path={router.path}/>

            <div className="max-w-90 pt-8">
                {children}
            </div>
       </main>
    )
}

export default main;