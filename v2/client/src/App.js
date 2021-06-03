// react
import React, { useEffect, useState } from 'react';

// navbar
import Navbar from './navbar/Navbar';

// images
import { backgroundImages } from './images/images';

//css
import './App.css';

const App = () => {
    // counter
    let count = 0;

    // set image
    const [img, setImg] = useState(<img src={backgroundImages[0].src} className="flex-image" />);

    // increment count
    useEffect(() => {
        window.setInterval(() => {
            count === 2 ? count = 0 : count++;

            if (count == 1) {
                setImg(<img src={backgroundImages[1].src} className="flex-image" />);
            } else if (count == 2) {
                setImg(<img src={backgroundImages[2].src} className="flex-image" />);
            } else {
                setImg(<img src={backgroundImages[0].src} className="flex-image" />);
            }

            console.log(count);

        }, 6000);
    }, [count]);




    return (
        <div className="App">
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                <Navbar />
            </div>
            <div className="flex-images">
                {img}
            </div>
            <div className="components"></div>
        </div>
    )
}

export default App;