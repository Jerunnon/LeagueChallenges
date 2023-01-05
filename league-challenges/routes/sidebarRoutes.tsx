import DashboardIcon from '@heroicons/react/24/solid/Squares2X2Icon';
import ArrowTrendingUpIcon from '@heroicons/react/24/solid/ArrowTrendingUpIcon';
import BoltIcon from '@heroicons/react/24/solid/BoltIcon'

import LanguageIcon from '@heroicons/react/24/solid/LanguageIcon'
import RandomIcon from '@heroicons/react/24/solid/QuestionMarkCircleIcon'

const iconClasses = 'h-6 w-6';
const subMenuIconClasses = 'h-5 w-5';

interface IRoutes {
    path: string,
    icon: JSX.Element,
    name: string,
    subMenu?: subMenu[]
}

type subMenu = {
    path: string,
    icon: JSX.Element | undefined,
    name: string
}

const routes: IRoutes[] = [

    {
        path: '/',
        icon: <DashboardIcon className={iconClasses} />,
        name: "Dashboard"
    },
    {
        path: '/leaderboard',
        icon: <ArrowTrendingUpIcon className={iconClasses} />,
        name: 'Leaderboard'
    },
    {
        path: '',
        icon: <BoltIcon className={iconClasses} />,
        name: 'Challenges',
        subMenu: [
            {
                path: '/challenges/Nuzlocke',
                icon: undefined,
                name: 'NuzLocke'
            },
            {
                path: '/challenges/A-Z',
                icon: <LanguageIcon className={subMenuIconClasses} />,
                name: 'A-Z'
            },
            {
                path: '/challenges/buildRandomizer',
                icon: <RandomIcon className={subMenuIconClasses} />,
                name: 'A-Z'
            },
        ]
    },
];

export default routes;