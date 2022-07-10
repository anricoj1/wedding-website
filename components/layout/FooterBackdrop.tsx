// next
import Link from 'next/link';

// framer
import { motion, AnimatePresence } from 'framer-motion';

// types
import { RouteProps } from 'types';

// icons
import { MdOutlineClose } from 'react-icons/md';

const FooterBackdrop = ({ screenLinks, cycleOpen }: { screenLinks: RouteProps[], cycleOpen: Function }) => {
    return (
        <AnimatePresence>
            <motion.aside
                initial={{ width: 0 }}
                animate={{ width: '100%', zIndex: 100, height: 'calc(100vh - 3rem)' }}
                className="backdrop-slate"
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
                    {screenLinks.map((route: RouteProps, index: number) => (
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
                            <Link href={route.path}>
                                <a className="menu-link">{route.title}</a>
                            </Link>

                        </motion.div>
                    ))}
                    <motion.div
                        className="menu-link"
                        whileHover={{ scale: 1.1 }}
                        variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
                    >
                        <button className="btn btn-square btn-primary w-72">
                            RSVP
                        </button>
                    </motion.div>
                    <motion.div
                        className="menu-link"
                        whileHover={{ scale: 1.1 }}
                        variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
                    >
                        <button className="btn btn-square w-72 btn-ghost" onClick={() => cycleOpen()}>
                            <MdOutlineClose size="2.5rem" />
                        </button>
                    </motion.div>
                </motion.div>
            </motion.aside>
        </AnimatePresence>
    )
}

export default FooterBackdrop;