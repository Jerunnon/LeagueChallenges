import React from "react";

import Link from "next/link";
import Image from "next/image";

import { FlexContainer } from "./layouts/flexcontainer";

import Dashboard from '@heroicons/react/24/solid/Squares2X2Icon';
import ArrowTrendingUp from '@heroicons/react/24/solid/ArrowTrendingUpIcon';
import Bolt from '@heroicons/react/24/solid/BoltIcon'

export const Sidebar = () => {

    const [ online, setOnline ] = React.useState<Boolean>(false);

    return (
        <div className="group w-max absolute top-0 left-0 h-screen bg-light-200 dark:bg-space-200" aria-label="Sidebar">
            <FlexContainer
                direction="col"
                wrap={false}
                alignItems="start"
                justifyContent="start"
                className="h-full"
            >
                <div className="image" style={{ 'maxWidth': '40px' }}>
                    <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <ul className="list-none w-full flex flex-col items-start gap-6 h-max mt-6">
                    <li>
                        <Link href="/" className="flex flex-row items-center">
                            <Dashboard className="h-6 w-6" />
                            <p className="hidden group-hover:inline-block pl-2">Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/leaderboard" className="flex flex-row items-center">
                            <ArrowTrendingUp className="h-6 w-6" />
                            <p className="hidden group-hover:inline-block pl-2">Leaderboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/challenges" className="flex flex-row items-center">
                            <Bolt className="h-6 w-6" />
                            <p className="hidden group-hover:inline-block pl-2">Challenges</p>
                        </Link>
                    </li>
                </ul>

                <div id="nav-footer" className="justify-self-end mt-auto flex flex-row items-center w-full">
                    <div className={`avatar ${online ? 'online' : ''} placeholder`}>
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">GU</span>
                        </div>
                    </div>
                    <Link href="/login" className="hidden group-hover:flex flex-col pl-2">
                        <h3 className="text-sm leading-4">Guest</h3>
                    </Link>
                </div>
            </FlexContainer>
        </div>

    )
};