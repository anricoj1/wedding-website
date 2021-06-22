// react
import React from 'react'
import FadeIn from 'react-fade-in';

// images
import proposal from './background/proposal.jpeg';
import well from './background/well.jpeg';
import sidecastle from './background/sidecastle.jpeg';

// image array
const websiteImages = [
    {
        name: "Proposal",
        src: proposal
    },
    {
        name: "Well",
        src: well
    },
    {
        name: "Side Castle",
        src: sidecastle
    }
]

// mobile
const MobileImage = () => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="mobile-column" src={websiteImages[0].src} />
    </FadeIn>
)

// tablet
const TabletImages = () => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="tablet-column" src={websiteImages[0].src} />
        <img className="tablet-column" src={websiteImages[2].src} />
    </FadeIn>
)

// website
export const WebsiteImages = () => (
    <FadeIn delay={500} transitionDuration={2000}>
        <img className="image-column" src={websiteImages[0].src} />
        <img className="image-column" src={websiteImages[1].src} />
        <img className="image-column" src={websiteImages[2].src} />
    </FadeIn>
)


// switch images
export const imageHelper = (setState, ww) => {
    if (850 < ww && ww < 1500) {
        setState({
            state: <TabletImages />,
            color: 'black'
        });
    } else if (0 < ww && ww < 849) {
        setState({
            state: <MobileImage />,
            color: 'white'
        });
    } else {
        setState({
            state: <WebsiteImages />,
            color: 'white'
        });
    }
}
