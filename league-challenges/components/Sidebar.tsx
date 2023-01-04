import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

import { FlexContainer } from "./layouts/flexcontainer";

import BoltRounded from '@mui/icons-material/BoltRounded';
import MilitaryTech from '@mui/icons-material/MilitaryTechRounded';
import Dashboard from '@mui/icons-material/DashboardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';



export const Sidebar = () => {
  return (
    <>
        <div className="group w-max fixed top-0 left-0 h-screen bg-space-200" aria-label="Sidebar">
            <FlexContainer 
                direction="col"
                wrap={false}
                alignItems="start"
                justifyContent="start"
                className="h-full"
            >
                <div className="image" style={{'maxWidth': '40px'}}>
                    <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <ul className="list-none w-full flex flex-col items-start gap-6 h-max mt-6">
                    <li>
                        <Link href="/" className="flex flex-row items-center">
                            <Dashboard />
                            <p className="hidden group-hover:inline-block pl-2">Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/leaderboard" className="flex flex-row items-center">
                            <MilitaryTech />
                            <p className="hidden group-hover:inline-block pl-2">Leaderboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/leaderboard" className="flex flex-row items-center">
                            <BoltRounded />
                            <p className="hidden group-hover:inline-block pl-2">Challenges</p>
                        </Link>
                    </li>
                </ul>

                <div id="nav-footer" className="justify-self-end mt-auto flex flex-row items-center w-full">
                     <AccountCircleRoundedIcon/>
                        <Link href="/login" className="hidden group-hover:flex flex-col pl-2">
                            <h3 className="text-sm leading-4">Guest</h3>
                            <span className="text-xs">Logged out</span>
                       </Link>
                </div>
            </FlexContainer>
        </div>
    </>
  )
};