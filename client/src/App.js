// react
import React, { useEffect, useState } from 'react';
import Fadein from 'react-fade-in';

// navbar
import Navbar from './navbar/Navbar';

// images
import * as pictures from './images/images';

// controllers
import { imageHelper, WebsiteImages, GoogleMap } from './controllers/Helpers';

//css
import './App.css';

const App = () => {
    const [state, setState] = useState({
        state: <WebsiteImages pictures={pictures.websiteImages} />,
        color: 'black'
    });

    const [windows, setWindow] = useState({
        ww: window.innerWidth,
        wh: window.innerHeight
    });

    useEffect(() => {
        imageHelper(setState, pictures.websiteImages, windows);
    }, [windows]);

    window.onresize = () => {
        setWindow({
            ww: window.innerWidth,
            wh: window.innerHeight
        });
    }



    return (
        <div className="App">
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                <Navbar />
            </div>
            <div className="image-container">
                {state.state}
                <div className="homeDiv text-center" style={{ color: state.color }}>
                    <div className="homeDiv-content">
                        <h1 className="odometer-text">We're Engaged!</h1><br />
                        <h4>November 11th - 13th, 2023 - South Carolina</h4>
                        <button className="btn btn-transparent">RSVP</button>
                    </div>
                </div>
            </div>
            <div className="components">
                <Fadein delay={500} transitionDuration={2000}>
                    <div className="map-component">
                        <GoogleMap />
                    </div>
                </Fadein>
            </div>
        </div>
    )
}

export default App;