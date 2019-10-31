import React from 'react';
import './FirstBlock.css';
import Block from '../../Components/Block/Block';

const data = [
    {
        className: 'bg-light-gray',
        heading: 'Futures blog',
        body: 'We feature stories, tips and advice from UTS staff, as well as information about what is happening at the LX.lab and around UTS.',
        href: 'https://lx.uts.edu.au/futures',
        label: 'See all articles'
    },
    {
        backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101737/18-011_FuturesSite_Tiles_Subscribe.png)',
        heading: 'Subscribe',
        body: "Don't want to miss a thing? Subscribe to our weekly digest to keep up with the latest UTS learning and teaching news and events.",
        href: 'https://lx.uts.edu.au/futures/subscribe/',
        label: 'Subscribe now'
    },
    {
        backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101732/18-011_FuturesSite_Tiles_Contribute.png)',
        heading: 'Contribute',
        body: "Got an interesting idea or project to share? The Futures blog is a collaborative space and we encourage all staff to contribute.",
        href: 'http://lx.uts.edu.au/contribute',
        label: 'Contribute to Futures'
    }
];

const FirstBlock = () => {
    return (
        <Block
            items={data}
        />
    );
};

export default FirstBlock;
