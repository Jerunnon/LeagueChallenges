import React from "react";

import Link from "next/link";
import Image from "next/image";

import { FlexContainer } from "./layouts/flexcontainer";
import routes from "../routes/sidebarRoutes";
import SidebarSubmenu from "./SidebarSubMenu";

const Sidebar = () => {

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
                    {routes.map((route, key) => {
                        return (
                            <li key={key} tabIndex={0} className="collapse collapse-arrow gap-3">
                                {route.subMenu 
                                    ? 
                                    <SidebarSubmenu subMenu={route.subMenu} icon={route.icon} name={route.name} path={route.path} /> 
                                    : 
                                    (
                                    <Link href={route.path} className="flex flex-row items-center">
                                        {route.icon}
                                        <p className="hidden group-hover:inline-block pl-2">{route.name}</p>
                                    </Link>
                                    )
                                }
                            </li>
                        )
                    })}
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

export default Sidebar;