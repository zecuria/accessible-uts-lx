import React from 'react';
import Container from '../../Components/Container/Container';
import './Block.css';

const Block = ({ items }) => {
    return (
        <section className="subscribe-contribute-block">
            <Container>
                <div className="row">
                    {items.map(({ className='', backgroundImage, heading, body, href, label }, i) => (
                        <div key={i} className={`col ${className}`} style={{ backgroundImage }}>
                            <div className="col-wrap text-left color-black">
                                <h3>{heading}</h3>
                                <p>{body}</p>
                                <a className="btn btn-primary" href={href}>{label}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Block;

