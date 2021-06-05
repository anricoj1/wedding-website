// react
import React, { useEffect, useState } from 'react';

// navbar
import Navbar from './navbar/Navbar';

// components
import Website from './website/Website';
import Tablet from './tablet/Tablet';
import Mobile from './mobile/Mobile';

// images
import * as images from './images/images';

//css
import './App.css';

const App = () => {
    // window width & height
    const [this_window, setWindow] = useState({ ww: window.innerWidth, wh: window.innerHeight });

    // props to send
    let props = { Navbar: <Navbar />, Images: images };

    // on resize setWindow 
    window.onresize = () => {
        setWindow({ ww: window.innerWidth, wh: window.innerHeight });
    }

    return 800 < this_window.ww && this_window.ww < 1000 ? (
        <div className="App">
            <Tablet props={props} />
        </div>
    ) : this_window.ww < 800 ? (
        <div className="App">
            <Mobile props={props} />
        </div>
    ) : <Website props={props} />
}

export default App;