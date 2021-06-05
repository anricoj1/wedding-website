// react
import React from 'react'
import FadeIn from 'react-fade-in';


const Website = ({  props }) => {
    return (
        <>
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                {props.Navbar}
            </div>
            <div className="image-container">
                <FadeIn delay={500} transitionDuration={2000}>
                    {props.Images.websiteImages.map(img => (
                        <img key={img.name} className="image-column" src={img.src} />
                    ))}
                </FadeIn>
            </div>
            <div className="components"></div>
        </>
    )
}

export default Website;
