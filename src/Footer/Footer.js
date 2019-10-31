import React from 'react';
import './Footer.css';
import Container from '../Components/Container/Container';

const Footer = () => (
    <footer id="footer">
        <Container>
            <div className="row">
                <div className="col footer-menu">
                    <strong className="title">Links</strong>
                    <ul id="menu-footer-links">
                        <li><a href="http://www.uts.edu.au/">UTS HOME PAGE</a></li>
                        <li><a href="http://www.uts.edu.au/about/utsweb-statements/disclaimer">UTS DISCLAIMER</a></li>
                        <li><a href="http://www.uts.edu.au/about/utsweb-statements/copyright-statement">UTS COPYRIGHT STATEMENT</a></li>
                        <li><a href="http://www.uts.edu.au/about/utsweb-statements/privacy-statement">UTS PRIVACY STATEMENT</a></li>
                    </ul>
                </div>
                <div className="col footer-account">
                    <strong className="title">My account</strong>
                    <ul>
                        <li><a href="https://lx.uts.edu.au/?option=saml_user_login">Log in to Futures</a></li>
                    </ul>
                </div>
                <div className="col social-networks">
                    <strong className="title">Connect to social netwroks</strong>
                    <ul>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/UTSEngage" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a className="linkedin" href="http://linkedin.com/company/166678" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className="twitter" href="http://twitter.com/utsfutures" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className="instagram" href="http://instagram.com/utsengage" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;
