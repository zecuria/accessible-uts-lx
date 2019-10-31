import React from 'react';
import './Main.css';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import FeaturedSlider from './FeaturedSlider/FeaturedSlider';
import FirstBlock from './FirstBlock/FirstBlock';
import Twitter from './Twitter/Twitter';
import EventsSlider from './EventsSlider/EventsSlider';

const Main = () => {
    return (
        <main role="main" id="main">
            <Banner />
            <Intro />
            <FeaturedSlider />
            <FirstBlock />
            <Twitter />
            <EventsSlider />
        </main>
    );
};

export default Main;
