import React from 'react';
import './Header.css';
import Search from './Search';
import Container from '../Components/Container/Container';

const Header = () => (
    <>
        <header>
            <div className="header-top">
                <Container>
                    <div className="logo">
                        <a href="https://lx.uts.edu.au">
                            <img src="https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24100450/UTS-header.png" alt="UTS – home page" />
                        </a>
                    </div>
                    <div className="search-block">
                        <Search />
                    </div>
                </Container>
            </div>
        </header>

    </>

);

export default Header;