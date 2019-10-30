import React from 'react';
import './Main.css';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import FeaturedSlider from './FeaturedSlider/FeaturedSlider';

const Main = () => {
    return (
        <main role="main" id="main">
            <Banner />
            <Intro />
            <FeaturedSlider />
        </main>
    );
};

export default Main;
