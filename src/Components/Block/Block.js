import React from 'react';
import Container from '../../Components/Container/Container';
import './Block.css';

const Block = ({ items, className="" }) => {
    return (
        <section className={"subscribe-contribute-block " + className }>
            <Container>
                <div className="row">
                    {items.map(({ className='', headingClass, backgroundImage, heading, body, child, href, label }, i) => (
                        <div key={i} className={`col ${className}`} style={{ backgroundImage }}>
                            <div className="col-wrap text-left color-black">
                                {heading && <h3 className={headingClass}>{heading}</h3>}
                                {body && <p>{body}</p>}
                                {child}
                                {href && <a className="btn btn-primary" href={href}>{label}</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Block;

