import React from 'react';
import './Aside.css';

const Aside = () => {
    return (
        <aside aria-labelledby="aside-title">
            <h2 id="aside-title" className="sr-only">Quick links</h2>
            <ul>
                <li><a href="#futures">Futures blog</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#lxlab">LX.lab</a></li>
            </ul>
        </aside>
    )
}

export default Aside;
