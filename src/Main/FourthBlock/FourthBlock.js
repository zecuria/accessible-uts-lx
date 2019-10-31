import React from 'react';
import Block from '../../Components/Block/Block';

import './FourthBlock.css';

const data = [
    {
        className: 'bg-light-gray',
        heading: 'Want face-to-face support?',
        child: (
            <div className="list">
                <div className="address">LX.Lab drop-ins<br/><span className="sr-only">Room: </span>CB06.04.020</div>
                <div className="time">Monday - Friday 11:00am - 1:00pm</div>
            </div>
        ),
        href: 'https://uts.service-now.com/serviceconnect?id=sc_cat_item&sys_id=88d69d1cdb97bb0079ca773c3496191b&sysparm_category=cd02c1024f010b0067eeafee0310c702&catalog_id=-1',
        label: 'Book a drop-in'
    },
    {
        className: 'bg-white',
        heading: 'Contact the LX.lab',
        child: (
            <div className="list">
                <div className="email">EMAIL<br /><a href="mailto:LX.lab@uts.edu.au">LX.lab@uts.edu.au</a></div>
                <div className="msg">LIVE CHAT<br />We're ready to answer your questions Monday to Friday 10:00am – 04:00pm. </div>
                <div className="address"><span className="sr-only">Location: room </span>CB06.04.020<br /><span className="sr-only">Opening hours: </span>Monday – Friday 11:00am to 01:00pm</div>
            </div>
        )
    },
    {
        className: 'bg-light-gray',
        heading: 'Log a ticket',
        body: "Need help with learning technologies such as UTSOnline, REVIEW, SPARK or Turnitin? Log a ticket via ServiceConnect and one of our team will be in touch.",
        href: 'http://lxlabservices.uts.edu.au',
        label: 'Ask for help'
    }
];

const FourthBlock = () => {
    return (
        <Block
            items={data}
            className="three-columns"
        />
    );
};

export default FourthBlock;


