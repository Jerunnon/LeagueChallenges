import * as React from "react";

import Link from "next/link";

import { useTheme } from "next-themes";

import CtaButton from "./ctaButton";

import SettingsIcon from '@heroicons/react/24/solid/Cog6ToothIcon';
import ChatBubbleIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon';
import NotificationsIcon from '@heroicons/react/24/solid/BellIcon';
import MoonIcon from '@heroicons/react/24/solid/MoonIcon';
import SunIcon from '@heroicons/react/24/solid/SunIcon'


export const Navbar = () => {

    const [ mounted, setMounted ] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const handleTheme = () => {
        if(theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    if (!mounted) return null
    
    return (
        <nav className="bg-transparent border-b border-solid border-gray-500 dark:border-gray-700 top-0 px-2 py-2.5 w-full relative z-50">
            <div className="w-full flex flex-wrap items-center justify-start mx-auto gap-4">
                <div id="iconGroup" className="ml-auto flex items-center justify-center" style={{'gap': '.75rem'}}>
                    <button onClick={handleTheme} className="min-w-0 p-0">
                        {theme === 'dark' ?  <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                    <SettingsIcon className="h-6 w-6" />
                    <ChatBubbleIcon className="h-6 w-6" />
                    <NotificationsIcon className="h-6 w-6" />
               </div>
                <CtaButton>
                    <Link href='/login'>LogIn</Link>
               </CtaButton>  
            </div>
        </nav>

    )
};