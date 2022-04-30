// react
import { useLocation, Link } from "react-router-dom";

// types
import { NavProps, RouteProps } from "types";

// mui
import { Button, withStyles } from "@material-ui/core";

// framer
import { motion, AnimatePresence } from "framer-motion";

// styles
import useStyles from "styles/nav";

// routes
import routes from "routes";

const MenuTop = withStyles(useStyles)(({ classes, links = routes }: NavProps) => {
    // pathname
    const { pathname } = useLocation();

    // our story, wedding, gifts, location, RSVP btn || profile

    return (
        <motion.header className="header">
            <Link to='/' className="navbar-brand">
                Jason & Alisha
            </Link>
            <AnimatePresence>
                <motion.ul className="navbar-top">
                    {Object.values(links).slice(1, 5).map((route: RouteProps, index: number) => {
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
                    <motion.li className="nav-item">
                        <Button className={classes.rsvpBtn}>
                            RSVP
                        </Button>
                    </motion.li>
                </motion.ul>
            </AnimatePresence>
        </motion.header>
    )
});

export default MenuTop;