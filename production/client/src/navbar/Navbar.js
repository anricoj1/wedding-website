// react
import React, { useState } from 'react';


// css
import './Navbar.css';

const Navbar = () => {
    // links to render
    let links = ['Wedding', 'Location', 'Gifts'];

    // set grayscale on images when page not scrolled
    const grayscale = (element, type) => {
        return element.forEach(e => e.style.filter = type);
    }

    window.onscroll = () => {
        const nav = document.getElementById('global-nav');

        window.scrollY < 1 ? grayscale(document.querySelectorAll('.flex-image'), "grayscale(70%)") : grayscale(document.querySelectorAll('.flex-image'), "none");

        if (window.scrollY > 1) {
            if (window.innerWidth < 991) {
                return nav.classList.remove('scrolled-nav');
            }
            return nav.classList.add('scrolled-nav');
        }
        return nav.classList.remove('scrolled-nav');
    };


    const setToggle = () => {
        const nav = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('active-nav');

        links.forEach((link, i) => {
            if (link.style.animation) return link.style.animation = '';
            link.style.animation = `linkFade 0.5s ease forwards ${i / 7 + 1}s`;
        });
    }

    const Link = ({ tag, className, name }) => {
        return React.createElement(tag,{ className: className}, name);
    }

    return (
        <div className="container-fluid">
            <a className="navbar-brand">Jason & Alisha</a>
            <ul className="nav-links">
                {links.map(link => (
                    <Link key={link} tag="li" className="scrollD" name={link} />
                ))}
            </ul>
            <div className="toggler" onClick={() => setToggle()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar;