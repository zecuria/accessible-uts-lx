import React from 'react';
import './Main.css';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import FeaturedSlider from './FeaturedSlider/FeaturedSlider';
import FirstBlock from './FirstBlock/FirstBlock';
import Twitter from './Twitter/Twitter';
import EventsSlider from './EventsSlider/EventsSlider';
import SecondBlock from './SecondBlock/SecondBlock';
import Resources from './Resources/Resources';
import ThirdBlock from './ThirdBlock/ThirdBlock';
import LxLab from './LxLab/LxLab';
import FourthBlock from './FourthBlock/FourthBlock';
import Aside from '../Aside/Aside';

const Main = () => {
    return (
        <>
        <Banner />
        <Aside />
        <main role="main" id="main">
            <Intro />
            <FeaturedSlider />
            <FirstBlock />
            <Twitter />
            <EventsSlider />
            <SecondBlock />
            <Resources />
            <ThirdBlock />
            <LxLab />
            <FourthBlock />
        </main>
        </>
    );
};

export default Main;
