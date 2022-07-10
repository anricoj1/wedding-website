// react
import { useEffect, useState } from "react";

// types
import { GalleryProps } from "types";

// framer
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";


/** * intervalTime = 4000, provide array of image srcs to map */
const Gallery = ({ imageList, intervalTime = 4000 }: GalleryProps) => {
    // page and direction
    const [[currentImage, direction], setCurrentImage] = useState([0, 0])

    // current Index
    const currentImageIndex = wrap(0, Object.keys(imageList).length, currentImage);

    // set the page
    const paginate = (newDirection: number) => setCurrentImage([currentImage + newDirection, newDirection])

    // swipe threshold onDrag
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

    // set gallery image interval
    useEffect(function timerTick() {
        const interval = setInterval(() => {
            paginate(1);
        }, intervalTime);
        return () => clearInterval(interval);
    },[]);

    return (
        <div className="gallery">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    id="image"
                    className="gallery-image"
                    transition={{
                        x: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        },
                        opacity: {
                            duration: 0.5
                        }
                    }}
                    dragConstraints={{
                        left: 0,
                        right: 0
                    }}
                    onDragEnd={(event, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        return swipe < -swipeConfidenceThreshold ? paginate(1) : paginate(-1)
                    }}
                    variants={{
                        enter: (direction: number) => {
                            return {
                                x: direction > 0 ? 1000 : -1000,
                                opacity: 0
                            }
                        },
                        center: {
                            zIndex: 1,
                            x: 0,
                            opacity: 1
                        },
                        exit: (direction: number) => {
                            return {
                                zIndex: 0,
                                x: direction < 0 ? 1000 : -1000,
                                opacity: 0
                            }
                        }
                    }}
                    key={currentImage}
                    src={imageList[currentImageIndex]}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragElastic={1}
                    loading="lazy"
                    alt="Loading Image..."
                />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </div>
    )
}

export default Gallery;