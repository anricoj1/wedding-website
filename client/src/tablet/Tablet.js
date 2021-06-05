// react
import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';


const Tablet = ({ props }) => {
    // counter
    let count = 0;

    // set images
    const [images, setImages] = useState(
        <FadeIn delay={500} transitionDuration={2000}>
            <img className="image-column" src={props.websiteImages[0].src} />
            <img className="image-column" src={props.websiteImages[1].src} />
        </FadeIn>
    )

    useEffect(() => {
        window.setInterval(() => {
            count === 2 ? count = 0 : count++;

            if (count == 1) {
                setImages(
                    <FadeIn delay={500} transitionDuration={2000}>
                        <img className="image-column" src={props.websiteImages[1].src} />
                        <img className="image-column" src={props.websiteImages[2].src} />
                    </FadeIn>
                )
            } else if (count == 2) {
                setImages(
                    <FadeIn delay={500} transitionDuration={2000}>
                        <img className="image-column" src={props.websiteImages[2].src} />
                        <img className="image-column" src={props.websiteImages[1].src} />
                    </FadeIn>
                )
            } else {
                setImages(
                    <FadeIn delay={500} transitionDuration={2000}>
                        <img className="image-column" src={props.websiteImages[0].src} />
                        <img className="image-column" src={props.websiteImages[1].src} />
                    </FadeIn>
                )
            }
        }, 5000);
    }, [count]);

    return (
        <>
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                {props.Navbar}
            </div>
            <div className="image-container">
                <FadeIn delay={500} transitionDuration={2000}>
                    {images.map(img => (
                        <img key={img.name} className="image-column" src={img.src} />
                    ))}
                </FadeIn>
            </div>
            <div className="components"></div>
        </>
    )
}

export default Tablet;
