// next
import Link from "next/link";
import { useRouter } from 'next/router';

// types
import { NavProps, RouteProps } from 'types';

const Header = ({ routes }: NavProps) => {
    // router
    const { pathname } = useRouter();

    // active link
    const activeLink = (route: RouteProps) => route.path === pathname ? "nav-link active-nav text-black" : "nav-link text-black";

    return (
        <div className="hidden laptop:navbar bg-white shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-black">Jason & Alisha</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {Object.values(routes).slice(1, 5).map((route: RouteProps, index: number) => (
                        <li key={index} style={{ animation: `linkFade 1s ease forwards ${index / 7 + 1}s` }}>
                            <Link href={route.path} className={activeLink(route)}>
                                <a>{route.title}</a>
                            </Link>
                        </li>
                    ))}
                    <li className="nav-item">
                    <button className="btn btn-outline btn-primary">
                        RSVP
                    </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;