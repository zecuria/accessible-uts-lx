import React from 'react';
import Container from '../../Components/Container/Container';

const LxLab = () => (
    <section className="image-block">
        <Container>
            <div className="image-wrap" style={{
                backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101739/19-011_FuturesBanner_static-02_LXlab.png)'
            }}>
                <div className="text-wrap color-white">
                    <div className="text">
                        <h2>LX.lab</h2>
                        <p>Learner Experience Lab</p>
                    </div>
                </div>
                <div className="bn-wrap">
                    <a className="btn" href="https://lx.uts.edu.au/lx-lab">Learn about the LX.lab</a>
                </div>
            </div>
        </Container>
    </section>
);

export default LxLab;