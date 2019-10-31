import React from 'react';
import Slider from '../../Components/Slider/Slider';
import './EventsSlider.css';

const items = [
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/16165003/P10551611.jpg",
        title: "2019 UTS Teaching and Learning Forum | 12 November",
        date: "Tuesday, 12 November, 2019",
        time: "9:00am - 5:00pm",
        address: "Harris Street",
        href: "https://lx.uts.edu.au/events/2019-uts-teaching-and-learning-forum/",
    },
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/09/24152150/simone-hutsch-AeeCSVwvHCo-unsplash.jpg",
        title: "How to build online and face to face learning communities | 30 October",
        date: "Wednesday, 30 October, 2019",
        time: "1:00pm - 2:00pm",
        address: "UTS",
        href: "https://lx.uts.edu.au/events/how-to-build-online-and-face-to-face-learning-communities/",
    }, 
]

const EventsSlider = () => {
    return (
        <section aria-labelledby="carouselheading1" className="events-slider" id="events">
            <h2 id="carouselheading1" className="sr-only">Events</h2>
            <Slider
                items={items}
                renderItem={({title, address, date, time, href, label}, isHidden) => (
                    <>
                        <h3>{title}</h3>
                        <div className="time">{date}<br />{time}</div>
                        <div className="address">{address}</div>
                        <a className="btn" tabIndex={isHidden ? -1 : undefined} href={href}>Register</a>
                    </>
                )}
            />
        </section>
    );
}

export default EventsSlider;
