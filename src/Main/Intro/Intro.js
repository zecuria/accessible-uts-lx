import React from 'react';
import './Intro.css';
import Container from '../../Components/Container/Container';

const Intro = () => {
    return (
        <section className="intro-block">
            <Container>
                <div className="intro-block-wrap">
                    <div className="intro-text-wrap">
                        <h2>Get support with all things learning and teaching at UTS, including the latest news, events and resources.</h2>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Intro;
