// interfaces
import { RouteProps } from 'interfaces';

// icons
import { LocationOn, Home, Redeem, ImportContacts, Person } from '@material-ui/icons';

// routes
import Index from 'routes/home';
import Gifts from 'routes/gifts';
import Location from 'routes/location';
import Ourstory from 'routes/ourstory';
import Wedding from 'routes/wedding';
import Profile from 'routes/profile';

// components
import Extends from 'components/extends';

const routes: Record<string, RouteProps> = {
    home: {
        title: "Home",
        path: '/',
        element: <Extends Appbar={false}>
            <Index />
        </Extends>,
        icon: <Home fontSize="large" />
    },
    ourstory: {
        title: "Our Story",
        path: '/ourstory',
        element: <Extends Appbar={false}>
            <Ourstory />
        </Extends>,
        icon: <ImportContacts fontSize="large" />
    },
    wedding: {
        title: "Wedding",
        path: '/wedding',
        element: <Extends Appbar={false}>
            <Wedding />
        </Extends>,
        icon: <div></div>
    },
    gifts: {
        title: "Gifts",
        path: '/gifts',
        element: <Extends>
            <Gifts />
        </Extends>,
        icon: <Redeem fontSize="large" />
    },
    location: {
        title: "Location",
        path: '/location',
        element: <Extends>
            <Location />
        </Extends>,
        icon: <LocationOn fontSize="large" />
    },
    profile: {
        title: "Profile",
        path: '/profile',
        element: <Extends>
            <Profile />
        </Extends>,
        icon: <Person fontSize="large" />
    },
}

export default routes;