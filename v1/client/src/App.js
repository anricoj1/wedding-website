// react
import React, { useEffect, useState } from 'react';

// navbar
import Navbar from './navbar/Navbar';

// images
import { backgroundImages } from './images/images';

//css
import './App.css';

const App = () => {

    return (
        <div className="App">
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                <Navbar />
            </div>
            <div className="flex-images">
                {backgroundImages.map(image => (
                    <img key={image.name} alt={image.name} className="flex-image" src={image.src} />
                ))}
            </div>
            <div className="components"></div>
        </div>
    )
}

export default App;