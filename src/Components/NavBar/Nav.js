import React from 'react';
import './Nav.css';
import MenuItem from './MenuItem';

const navData = [
    {
        href: "https://lx.uts.edu.au/resources/",
        label: "Resources" 
    }, {
        href: "https://lx.uts.edu.au/lab/",
        label: "LX.lab" 
    }, {
        href: "https://lx.uts.edu.au/futures/",
        label: "Futures blog",
        subItems: [
            {
                href: "httsp://lx.uts.edu.au/futures/",
                label: "All posts",
            },
            {
                href: "httsp://lx.uts.edu.au/futures/contribute/",
                label: "Contribute",
            }
        ]
    }, {
        href: "https://lx.uts.edu.au/events/",
        label: "Events" 
    }, {
        href: "https://lx.uts.edu.au/programs/",
        label: "Programs",
        subItems: [
            {
                href: "httsp://lx.uts.edu.au/programs/",
                label: "All programs",
            }, {
                href: "httsp://lx.uts.edu.au/programs/postgraduate-futures/",
                label: "Postgraduate futures",
            }, {
                href: "httsp://lx.uts.edu.au/programs/lx-transformation/",
                label: "LX Transformation",
            }, {
                href: "httsp://lx.uts.edu.au/programs/academic-in-residence/",
                label: "Academic in Residence",
            }
            
        ]
    }, {
        href: "https://lx.uts.edu.au/?option=saml_user_login",
        label: "Log In" 
    }
];

const focusLink = (linksRef, i) => {
    linksRef[i].current &&  linksRef[i].current.focus();
}

const Nav = () => {
    const linkRefs = navData.map(() => React.createRef());

    const onNext = (index) => {
        if (index === navData.length) {
            focusLink(linkRefs, 0);
            return;
        }

        focusLink(linkRefs, index);
    }

    const onPrev = (index) => {
        if (index === -1) {
            focusLink(linkRefs, navData.length - 1);
            return;
        }

        focusLink(linkRefs, index);
    }

    return (
        <nav>
            <div className="drop">
                <div className="drop-wrap">
                    <ul>
                        {
                            navData.map(
                                (item, i) => (
                                    <MenuItem
                                        {...item}
                                        key={item.href}
                                        index={i}
                                        linkRef={linkRefs[i]}
                                        onNext={onNext}
                                        onPrev={onPrev}
                                        onBlur={() => {}}
                                    />
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav
