// react
import React from 'react';
import FadeIn from 'react-fade-in';

// source url for embeded google map
let src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8624333946063!2d-72.95422008427465!3d41.311856208636506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d90227440709%3A0xf34572210f78f160!2s74%20Irving%20St%2C%20New%20Haven%2C%20CT%2006511!5e0!3m2!1sen!2sus!4v1623893388735!5m2!1sen!2sus";


export const MobileImage = ({ pictures }) => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="mobile-column" src={pictures[0].src} />
    </FadeIn>
)

export const TabletImages = ({ pictures }) => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="tablet-column" src={pictures[0].src} />
        <img className="tablet-column" src={pictures[2].src} />
    </FadeIn>
)

export const WebsiteImages = ({ pictures }) => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="image-column" src={pictures[0].src} />
        <img className="image-column" src={pictures[1].src} />
        <img className="image-column" src={pictures[2].src} />
    </FadeIn>
)

export const GoogleMap = () => (
    <div className="map">
        <embed src={src} className="map-content" loading="lazy" />
    </div>
)



export const imageHelper = (setState, pictures, window) => {
    if (850 < window.ww && window.ww < 1500) {
        setState({
            state: <TabletImages pictures={pictures} />,
            color: 'black'
        });
    } else if (0 < window.ww && window.ww < 849) {
        setState({
            state: <MobileImage pictures={pictures} />,
            color: 'white'
        });
    } else {
        setState({
            state: <WebsiteImages pictures={pictures} />,
            color: 'white'
        });
    }
}
