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
        paragraph: "At UTS we pride ourselves in setting a high standard for inclusivity so that students are provided with the best access to education as possible. In this post, I will go through how you can use the in-built features of Canvas to easily make your subject content more accessible to your students! There are a […]"
    },
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/09/24083753/randy-orourke-yjEt-n0qUl8-unsplash.jpg",
        title: "Making your Canvas site clear to all students: 4 tips from our new guide",
        author: "Richard Ingold",
        date: "16 October 2019",
        timeStamp: "2019-10-16",
        href: "https://lx.uts.edu.au/blog/2019/10/16/making-your-canvas-site-clear-to-all-students/",
        label: "Read more",
        paragraph: "When students come to university, they don’t just learn new knowledge and skills. They also learn a new language to describe and explain what they are learning about. And this doesn’t just apply to international students – all students must learn a new way of using English within their discipline.  So what can you do […]"
    }, 
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/21154932/james-pritchett-PuGr85II3yc-unsplash.jpg",
        title: "‘All in one’: Benefits of the IF-AT card with Yen Phan",
        author: "Adam Morgan",
        date: "22 October 2019",
        timeStamp: "2019-10-22",
        href: "https://lx.uts.edu.au/blog/2019/10/22/all-in-one-benefits-of-the-if-at-card-with-yen-phan/",
        label: "Read more",
        paragraph: "Recently I wrote a blog post profiling Jacqueline Berry and her use of IF-AT ‘scratch cards’. In this post I talk to another IF-AT user: Yen Phan from the UTS School of Business. Yen is a casual academic in the Management Discipline Group who tutors in the area of strategic operations and supply chain management at the […]"
    }
]

const FeaturedSlider = () => {
    return (
        <section aria-labelledby="carouselheading1" id="futures">
            <h2 id="carouselheading1" className="sr-only">Featured articles</h2>
            <Slider
                items={items}
                renderItem={({title, author, date, timeStamp, href, label, paragraph}, isHidden) => (
                    <>
                        <h3>{title}</h3>
                        <span className="address"><span className="sr-only">Author: </span>{author} | <time dateTime={timeStamp}>{date}</time></span>
                        <p>{paragraph}</p>
                        <a className="btn" tabIndex={isHidden ? -1 : undefined} href={href}>{label}</a>
                    </>
                )}
            />
        </section>
    );
}

export default FeaturedSlider;
