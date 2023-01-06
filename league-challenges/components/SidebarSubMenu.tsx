import * as React from 'react';

import Link from 'next/link';
import { IRoutes } from 'routes/sidebarRoutes';

function SidebarSubmenu({ subMenu, icon, name }: IRoutes) {
    return (
        <React.Fragment>
            <div className="flex flex-row">
                {icon}
                <p className="hidden group-hover:inline-block pl-2 pt-0 pb-0 collapse-title leading-normal min-h-0">{name}</p>
            </div>
            <ul className="collapse-content">
                {subMenu && subMenu.map((m: any, key: any) => (
                    <li key={key} className="pb-2">
                        <Link href={m.path} className="flex flex-row items-center">
                            {m.icon}
                            <p className="hidden group-hover:inline-block pl-2" >{m.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default SidebarSubmenu;