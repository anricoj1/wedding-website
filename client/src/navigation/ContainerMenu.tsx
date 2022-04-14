// react
import { useLocation, Link } from "react-router-dom";

// interfaces
import { NavProps, RouteProps } from "interfaces";

// mui
import { withStyles } from "@material-ui/core";

// framer
import { motion, AnimatePresence } from "framer-motion";

// styles
import useStyles from "styles/nav";

// routes
import routes from "routes";

const ContainerMenu = withStyles(useStyles)(({ classes, links = routes }: NavProps) => {
    // pathname
    const { pathname } = useLocation();

    // our story, wedding, gifts, location, RSVP btn || profile

    return (
        <AnimatePresence>
            <motion.ul className="navbar">
                {Object.values(links).slice(0, 5).map((route: RouteProps, index: number) => {
                    const { path, title } = route;

                    return (
                        <motion.li
                            key={index}
                            className="nav-item"
                            animate={{
                                animation: `linkFade 1s ease forwards ${index / 7 + 1}s`
                            }}
                        >
                            <Link
                                className={path === pathname ? "nav-link active-nav" : "nav-link"}
                                to={path}
                            >
                                {title}
                            </Link>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </AnimatePresence>
    )
});

export default ContainerMenu;