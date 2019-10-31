import React from 'react';
import './Twitter.css';
import Container from '../../Components/Container/Container';

const Twitter = () => (
    <section className="recent-tweets-block">
        <Container>
        <div className="recent-tweets-wrap">
            <div className="img-wrap" style={{ backgroundImage: "url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101733/18-011_FuturesSite_Tiles_Follow.png)" }}>
                <a href="https://twitter.com/UTSFutures" target="_blank" rel="noopener noreferrer">Follow us on Twitter</a>
            </div>
            <div className="text-wrap">
                <h2>Recent tweet</h2>
                <div className="tweet">
                    <div className="header-container">
                        <div className="tweet-icon">
                            <img src="https://pbs.twimg.com/profile_images/1179252640829460480/gmONAuO__normal.jpg" alt="UTSfutures icon" />
                        </div>
                        <div className="tweet-header">
                            <div>UTSfutures</div>
                            <a href="https://twitter.com/intent/user?screen_name=UTSfutures" title="UTSfutures" target="_blank" rel="noopener noreferrer" lang="en">@UTSfutures</a>
                        </div>
                        <div className="tweet-time">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/twitterapi/status/1188974729769689089">29 Oct</a>
                        </div>
                    </div>
                    <p className="tweet-main">
                        Have you registered for the 2019 UTS Teaching and Learning Forum yet? Check out the program 
                        online at <a href="https://t.co/iKFAntNg3Y" title="http://lx.uts.edu.au/events" target="_blank" rel="noopener noreferrer" className="rtw_url_link">lx.uts.edu.au/events</a> <a href="https://twitter.com/search?q=%23utstlf19&amp;src=hash" title="#utstlf19" target="_blank" rel="noopener noreferrer" className="rtw_hashtag_link">#utstlf19</a>
                        <a href="https://t.co/rCgrovp3Ay" title="http://bit.ly/32mPIin" target="_blank" rel="noopener noreferrer" className="rtw_url_link">bit.ly/32mPIin</a> <a href="https://t.co/L3dltdgcme" title="https://twitter.com/UTSfutures/status/1188974729769689089/photo/1" target="_blank" rel="noopener noreferrer" className="rtw_media_link">pic.twitter.com/L3dltdgcme</a>
                    </p>
                </div>
            </div>
            </div>
        </Container>
    </section>
);

export default Twitter;