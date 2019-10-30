import React from 'react';
import Slider from '../../Components/Slider/Slider';

const items = [
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/24133842/photo-1512295767273-ac109ac3acfa.jpeg",
        title: "How to make your subject more accessible",
        author: "Intan Endah-Bonsu",
        date: "25 October 2019",
        timeStamp: "2019-10-25",
        href: "https://lx.uts.edu.au/blog/2019/10/25/how-to-make-your-subject-more-accessible/",
        label: "Read more",
    },
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/09/24083753/randy-orourke-yjEt-n0qUl8-unsplash.jpg",
        title: "Making your Canvas site clear to all students: 4 tips from our new guide",
        author: "Richard Ingold",
        date: "16 October 2019",
        timeStamp: "2019-10-16",
        href: "https://lx.uts.edu.au/blog/2019/10/16/making-your-canvas-site-clear-to-all-students/",
        label: "Read more",
    }, 
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/21154932/james-pritchett-PuGr85II3yc-unsplash.jpg",
        title: "‘All in one’: Benefits of the IF-AT card with Yen Phan",
        author: "Adam Morgan",
        date: "22 October 2019",
        timeStamp: "2019-10-22",
        href: "https://lx.uts.edu.au/blog/2019/10/22/all-in-one-benefits-of-the-if-at-card-with-yen-phan/",
        label: "Read more",
    }
]

const FeaturedSlider = () => {
    return (
        <section aria-labelledby="carouselheading1">
            <h2 id="carouselheading1" className="sr-only">Featured articles</h2>
            <Slider
                items={items}
                renderItem={({title, author, date, timeStamp, href, label}) => (
                    <>
                        <h2>{title}</h2>
                        <span className="address"><span className="sr-only">Author: </span>{author} | <time dateTime={timeStamp}>{date}</time></span>
                        <a className="btn" href={href}>{label}</a>
                    </>
                )}
            />
        </section>
    );
}

export default FeaturedSlider;