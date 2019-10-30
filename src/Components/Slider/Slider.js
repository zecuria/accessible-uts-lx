import React, { useState, useRef, useEffect } from 'react';
import Container from '../Container/Container';
import './Slider.css';

const getLeftPosition = (currentIndex, i) => `${(i - currentIndex) * 100}%`;

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    return ref.current;
}

const Slider = props => {
    const { items, renderItem } = props
    const [currentIndex, setIndex] = useState(0);

    const prevFocusedIndex = usePrevious(currentIndex);

    const lastIndex = items.length - 1;
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;

    const currentItem = items[currentIndex]; 
    
    return (
        <Container>
            <div className="wrapper">
                <button className="arrow arrow-left" onClick={() => setIndex(prevIndex)}>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="arrow arrow-right" onClick={() => setIndex(nextIndex)}>
                    <span className="sr-only">Next</span>
                </button>
                <ul>
                    {items.map((item, i) => (
                        <li key={i} tabIndex="-1" aria-hidden={prevFocusedIndex === i} className={`slide ${prevFocusedIndex === i ? 'in-transition' : ''}`} style={{
                            left: getLeftPosition(currentIndex, i),
                            visibility: currentIndex === i ? undefined : 'hidden'
                        }}>
                            <div style={{ backgroundImage: `url("${item.img}"`}}>
                                <div className="text">
                                    {renderItem(item)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="sr-only" aria-live="polite" aria-atomic="true">Item {currentIndex + 1} of {items.length}: {currentItem.title}</div>
            </div>
        </Container>
    );
}

export default Slider;
