// types
import { RouteProps } from 'types';

// icons
import { FaHome, FaLocationArrow, FaBook, FaUser, FaGift } from 'react-icons/fa';


const routes: Record<string, RouteProps> = {
    home: {
        title: "Home",
        path: '/',
        icon: <FaHome size="1.5rem" />
    },
    ourstory: {
        title: "Our Story",
        path: '/ourstory',
        icon: <FaBook size="1.5rem" />
    },
    wedding: {
        title: "Wedding",
        path: '/wedding',
        icon: <div></div>
    },
    location: {
        title: "Location",
        path: '/location',
        icon: <FaLocationArrow size="1.5rem" />
    },
    gifts: {
        title: "Gifts",
        path: '/gifts',
        icon: <FaGift size="1.5rem" />
    },
    profile: {
        title: "Profile",
        path: '/profile',
        icon: <FaUser size="1.5rem" />
    },
}

export default routes;