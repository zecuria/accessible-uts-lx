import React from 'react';
import Container from '../../Components/Container/Container';
import './Slide.css'

const Slider = () => {
    return (
    <section aria-labelledby="carouselheading1">
        <h2 id="carouselheading1" className="sr-only">Featured articles</h2>
        <Container>
            <div className="wrapper">
                <ul>
                    <li className="slide">
                        <div style={{
                            backgroundImage: 'url("https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/24133842/photo-1512295767273-ac109ac3acfa.jpeg")',
                            width: 1320
                        }}>
                            <div className="text">
                                <h2>How to make your subject more accessible</h2>
                                <span className="address">Intan Endah-Bonsu | <time dateTime="2019-10-25">25 October 2019</time></span>
                                <a className="btn" href="https://lx.uts.edu.au/blog/2019/10/25/how-to-make-your-subject-more-accessible/">Read more</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    </section>
    );
}

export default Slider;
