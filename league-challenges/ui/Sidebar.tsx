import Image from "next/image";
import Link from "next/link";
import { ThemeToggleButton } from "./themetogglebutton";

type linkItem = {
    href: string,
    path: string,
    target?: string,
    children: string | JSX.Element
};

const LinkItem = ({href, path, target, children, ...props}: linkItem) => {
    const active = path === href;

    return (
        <Link href={href} passHref scroll={false}>
            <a className={"pt-2 + active ? 'text-white' : 'text-black'"} target={target} {...props}>
                {children}
            </a>
        </Link>
    )
};

export const Sidebar = (props: { path: any; }) => {
    const { path } = props;
    return (
        <nav>
            <div className="nav-container flex flex-col justify-center items-start max-w-90">
                <div className="nav-header">
                    <h1><Image src="" alt="Logo"/></h1>
                </div>

                <ul className="flex flex-col justify-center items-center">
                   <LinkItem href="/dashboard" path={path}>Dashboard</LinkItem>
                   <LinkItem href="/leaderboard" path={path}>Leaderboard</LinkItem>
                   <LinkItem href="/challenges" path={path}>Challenges</LinkItem>
                   <LinkItem href="/profile" path={path}>Profile</LinkItem>
                </ul>
            </div>
        </nav>
    )
};