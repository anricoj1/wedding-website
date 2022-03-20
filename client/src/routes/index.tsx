// interfaces
import { BaseProps, RouteProps } from 'interfaces';

// icons
import { LocationOn, Home, Redeem } from '@material-ui/icons';

// components
import Index from 'routes/home';
import Gifts from 'routes/gifts';
import Location from 'routes/location';
import Ourstory from 'routes/ourstory';
import Wedding from 'routes/wedding';

const routes = (props: BaseProps): RouteProps[] => [
    {
        title: "Home",
        path: '/',
        element: <Index />,
        icon: <Home fontSize="large" />
    },
    {
        title: "Wedding",
        path: '/wedding',
        element: <Wedding />,
        icon: <div></div>
    },
    {
        title: "Location",
        path: '/location',
        element: <Location />,
        icon: <LocationOn fontSize="large" />
    },
    {
        title: "Gifts",
        path: '/gifts',
        element: <Gifts />,
        icon: <Redeem fontSize="large" />
    },
    {
        title: "Our Story",
        path: '/ourstory',
        element: <Ourstory />,
        icon: <div></div>
    }
]

export default routes;