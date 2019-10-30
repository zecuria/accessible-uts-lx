import React, { useState, useRef, useEffect } from 'react';
import Container from '../../Components/Container/Container';
import './Banner.css';
import PlayButton from '../../Components/PlayButton/PlayButton';

const Banner = () => {
    const [isPaused, pauseVideo] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPaused) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }, [isPaused])

    return (
        <section className="banner video-banner">
            <div className="video-wrap">
                <video ref={videoRef} id="myVideo" autoPlay={true} muted={true} loop={true}>
                    <source src="https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/07/24101730/18-011_FuturesSite_HomePageBanner_FA.mp4" type="video/mp4" />
                </video>
            </div>
            <Container>
                <div className="banner-text">
                    <h1>LX at UTS</h1>
                    <strong className="sub-heading">Learner experience at UTS</strong>
                </div>
                <PlayButton isPaused={isPaused} onClick={() => pauseVideo(!isPaused)} />
            </Container>
        </section>
)};

export default Banner;
