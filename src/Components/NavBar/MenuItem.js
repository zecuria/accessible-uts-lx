import React, { useState, useEffect } from 'react';
import keyCode from './Keycodes';

const focusLink = (linksRef, i) => {
    let index = i;
    if (i < 0) {
        index = linksRef.length - 1;
    }
    if (i >= linksRef.length){
        index = 0;
    }

    linksRef.forEach(({ current }) => {
        current.tabIndex = -1;
    });
    
    const element = linksRef[index].current;
    element.tabIndex = 0;
    linksRef[index].current.focus();
}

let linkRefs = []; 
const initLinks = (items) => {
    if(linkRefs.length === 0 || items.length !== linkRefs.length) {
        linkRefs = items.map(() => React.createRef());
    }
}

let focusedIndex;

const MenuItem = (props) => {
    const {
        href,
        label,
        index,
        onNext,
        onPrev,
        linkRef,
        subItems = []
    } = props;

    const [isOpen, toggleOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            focusLink(linkRefs, focusedIndex);
        }
    }, [isOpen])

    initLinks(subItems);

    const isMenu = subItems && subItems.length > 0;

    const onKeyDown = (e, i) => {
        let isStopped = false;
        if (e.keyCode === keyCode.RIGHT) {
            isStopped = true;
            onNext(index + 1);
        }

        if (e.keyCode === keyCode.LEFT) {
            isStopped = true;
            onPrev(index - 1);
        }

        if (isMenu) {
            if (e.keyCode === keyCode.DOWN) {
                isStopped = true;
                if (e.target === linkRef.current && !isOpen) {
                    toggleOpen(true);
                    focusedIndex = 0;
                } else {
                    focusLink(linkRefs, i+1)
                }
            }

            if (e.keyCode === keyCode.UP) {
                if(!isOpen) {
                    isStopped = true;
                    toggleOpen(true);
                    focusedIndex = linkRefs.length - 1;
                } 
                if (e.target !== linkRef.current) {
                    isStopped = true;
                    focusLink(linkRefs, i-1);
                } else if (isOpen) {
                    isStopped = true;
                    focusLink(linkRefs, linkRefs.length - 1);
                }
            }

            if (e.keyCode === keyCode.ESC && isOpen) {
                isStopped = true;
                toggleOpen(false);
                linkRef.current.focus();
            }
        }

        if (isStopped) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
    };

    const className = isOpen ? 'has-menu' : '';

    const onBlur = (e) => {
        const isInMenu = linkRefs.some(({ current }) => current === e.relatedTarget);
        if (!isInMenu) {
            toggleOpen(false);
        } 
    }

    return (
        <li role="none">
            <a
                href={href}
                onKeyDown={(e) => onKeyDown(e, linkRefs.length)}
                ref={linkRef}
                aria-expanded={isMenu ? String(isOpen): undefined}
                aria-haspopup={isMenu ? "true" : undefined}
                aria-controls={isMenu ? "menu2" : undefined}
            >
                {label}
            </a>
            {isMenu && 
                <ul className={`sub-menu ${className}`} role="menu">
                    <SubItems subItems={subItems} linkRefs={linkRefs} onKeyDown={onKeyDown} onBlur={onBlur} />
                </ul>
            }
        </li>
    );
}

const SubItems = ({ subItems, linkRefs, onBlur, onKeyDown }) => (
    subItems.map(
        ({href, label}, i) => (
        <li role="none" key={href}>
            <a
                role={"menuitem"}
                ref={linkRefs[i]}
                tabIndex={-1}
                onKeyDown={e => onKeyDown(e, i)}
                onBlur={onBlur}
                href={href}
            >
                {label}
            </a>
        </li>
        )
    ) 
)

export default MenuItem;
