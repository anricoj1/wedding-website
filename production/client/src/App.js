// react
import React, { useEffect, useState } from 'react';
import Fadein from 'react-fade-in';

// navbar
import Navbar from './navbar/Navbar';

// controllers
import { GoogleMap, ModalRenderer } from './controllers/Helpers';
import { WebsiteImages, imageHelper } from './controllers/images/images';

//css
import './App.css';

const App = () => {
    // window Width
    const [ww, setWW] = useState(window.innerWidth);

    // state
    const [state, setState] = useState({
        state: <WebsiteImages />,
        color: 'black'
    });

    const [modal, setModal] = useState({
        state: false,
        name: null,
        data: {}
    });

    // on resize set ww
    window.onresize = () => setWW(window.innerWidth);

    // when ww changes, useEffect handles images
    useEffect(() => {
        imageHelper(setState, ww);
    }, [ww]);

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
                        <button className="btn btn-transparent" onClick={() => setModal({
                            state: true,
                            name: "Register",
                            data: {}
                        })}>RSVP</button>
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
            <ModalRenderer
                setModal={setModal}
                modal={modal}
            />
        </div>
    )
}

export default App;