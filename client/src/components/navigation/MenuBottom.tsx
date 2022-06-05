// react
import { Fragment } from "react";
import { Link } from "react-router-dom";

// types
import { NavProps, RouteProps } from "types";

// mui
import { Button, BottomNavigation, BottomNavigationAction, withStyles } from "@material-ui/core";
import { Menu, Close } from '@material-ui/icons';

// framer
import { motion, AnimatePresence, useCycle } from "framer-motion";

// styles
import useStyles from "styles/nav";

// routes
import routes from "routes";


const MenuBottom = withStyles(useStyles)(({ classes, links = routes }: NavProps) => {
    // opened
    const [open, cycleOpen] = useCycle(false, true);

    // links , anything in bottomLinks filter it out
    const bottomLinks: RouteProps[] = [links.home, links.location, links.profile];
    const screenLinks: RouteProps[] = Object.values(links).filter((link: RouteProps) => {
        return bottomLinks.includes(link) ? null : link;
    });

    return (
        <Fragment>
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: '100%'
                        }}
                        className="backdrop"
                        exit={{
                            width: 0,
                            transition: {
                                delay: 0.7,
                                duration: 0.3
                            }
                        }}
                    >
                        <motion.div
                            className="link-container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                closed: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        staggerDirection: -1
                                    }
                                },
                                open: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        staggerDirection: 1
                                    }
                                }
                            }}
                        >
                            {screenLinks.map((route: RouteProps, index: number) => {
                                const { path, title, icon } = route;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: 1.5
                                        }}
                                        variants={{
                                            closed: {
                                                opacity: 0
                                            },
                                            open: {
                                                opacity: 1
                                            }
                                        }}
                                    >
                                        <Link
                                            className="menu-link"
                                            to={path}
                                        >
                                            {title}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                className="menu-link"
                                whileHover={{
                                    scale: 1.5
                                }}
                                variants={{
                                    closed: {
                                        opacity: 0
                                    },
                                    open: {
                                        opacity: 1
                                    }
                                }}
                            >
                                <Button
                                    onClick={() => console.log('render modal')}
                                    className={classes.rsvpBtnWhite}
                                >
                                    RSVP
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <BottomNavigation showLabels className={classes.bottomNavigation}>
                {bottomLinks.map((route: RouteProps, index: number) => {
                    const { path, title, icon } = route;

                    return (
                        <BottomNavigationAction
                            style={{
                                animation: `linkFade 1s ease forwards ${index / 10 + 1}s`
                            }}
                            key={index}
                            label={title}
                            className={classes.bottomIcon}
                            component={Link}
                            to={path}
                            icon={icon}
                        />
                    )
                })}
                <BottomNavigationAction
                    icon={open ? (
                        <Close
                            onClick={() => cycleOpen()}
                            className={classes.menuIcon}
                            fontSize="large"
                        />
                    ) : (
                        <Menu
                            onClick={() => cycleOpen()}
                            className={classes.menuIcon}
                            fontSize="large"
                        />
                    )}
                />
            </BottomNavigation>
        </Fragment>
    )
});

export default MenuBottom;