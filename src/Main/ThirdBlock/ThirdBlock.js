import React from 'react';
import Block from '../../Components/Block/Block';

const data = [
    {
        className: 'bg-light-gray',
        heading: 'LX Resources',
        body: 'New to Canvas? Browse through our all resource collections for online support.',
        href: 'https://lx.uts.edu.au/resources/',
        label: 'Dicover LX Resources'
    },
    {
        className: 'bg-white',
        heading: 'Subject starter kit',
        body: "Resources for Subject Coordinators on how to get started with your subject site in Canvas.",
        href: 'https://lx.uts.edu.au/resources/subject-starter-kit/',
        label: 'View the subject starter kit'
    },
    {
        backgroundImage: 'url(https://s3-ap-southeast-2.amazonaws.com/wordpress-futures-prod/wp-content/uploads/2019/10/16092639/18-011_FuturesSite_Tiles_Contribute.png)',
        heading: 'Glossary of Canvas terms',
        body: "Brush up on your Canvas terms",
        href: 'https://lx.uts.edu.au/resources/glossary-of-canvas-terms/',
        label: 'View the glossary'
    }
];

const ThirdBlock = () => {
    return (
        <Block
            items={data}
        />
    );
};

export default ThirdBlock;

