import React from 'react';
import './Resources.css';
import Container from '../../Components/Container/Container';

const Resources = () => (
    <section className="image-block" id="resources">
        <Container>
            <div className="image-wrap" style={{
                backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/16092731/19-011_FuturesBanner_static-06.png)'
            }}>
                <div className="text-wrap color-white">
                    <div className="text">
                        <h2>Resources</h2>
                    </div>
                </div>
            <div className="btn-wrap">
                <a className="btn" href="https://lx.uts.edu.au/resources/">Discover LX Resources</a>
            </div>
            </div>
        </Container>
    </section>
);

export default Resources;