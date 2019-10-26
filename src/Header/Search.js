import React, { useState, useRef } from 'react';
import ReactModal from 'react-modal';

import './Search.css'

const SearchLogo = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="0F4BEB" d="M20.2 18.9l3.7 3.7c.1.1.1.2 0 .3L22.8 24c-.1.1-.2.1-.3 0l-3.7-3.7c-.1-.1-.1-.2 0-.3.4-.3.7-.7 1.1-1.1.1-.1.2-.1.3 0 0-.1 0 0 0 0M10.6 0C4.8 0 .1 4.7.1 10.6c0 5.8 4.7 10.6 10.5 10.6s10.5-4.7 10.5-10.6C21.1 4.7 16.4 0 10.6 0zm0 19.3c-4.7 0-8.6-3.9-8.6-8.7s3.9-8.7 8.6-8.7c4.7 0 8.6 3.9 8.6 8.7s-3.9 8.7-8.6 8.7z" />
</svg>

const getParent = () => document.getElementById('root');

const Search = () => {
    const [isOpen, toggleOpen] = useState(false);
    const inputRef = useRef(null);

    return (
        <div>
            <button onClick={() => toggleOpen(true)}>
                <SearchLogo />
                <span className="sr-only">Open search</span>
            </button>

            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => toggleOpen(false)}
                contentLabel="Search for content"
                parentSelector={getParent}
                appElement={document.getElementById('root')}
                className="search-popup-wrap"
                overlayClassName="search-popup"
            >
                <form role="search" action="https://lx.uts.edu.au">
                    <input ref={inputRef} type="search" placeholder="Search..."/>
                </form>
                <button className="search-close" onClick={() => toggleOpen(false)}>
                    <span className="sr-only">Close search</span>
                </button>
            </ReactModal>
        </div>
    );
}

export default Search;