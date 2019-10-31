import React from 'react';
import './SecondBlock.css';
import Block from '../../Components/Block/Block';

const data = [
    {
        className: 'bg-light-gray',
        heading: 'View events',
        body: 'See all upcoming learning and teaching events at UTS. ',
        href: 'https://lx.uts.edu.au/events',
        label: 'View all events'
    },
    {
        backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101736/18-011_FuturesSite_Tiles_ManageBookings.png)',
        heading: 'Manage my bookings',
        headingClass: 'big-boi',
        className: 'text-center',
        href: 'https://lx.uts.edu.au/events/my-bookings/',
        label: 'View my bookings now'
    },
    {
        backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/08/24101734/18-011_FuturesSite_Tiles_HostEvent.png)',
        heading: 'Host an event',
        body: "The LX.lab welcomes staff to use the space. If you'd like to host your own event in the LX.lab, please get in touch.",
        href: 'https://lx.uts.edu.au/host-event-lx-lab/',
        label: 'Get in touch'
    }
];

const SecondBlock = () => {
    return (
        <Block
            items={data}
        />
    );
};

export default SecondBlock;
