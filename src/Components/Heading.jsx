import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div>
            <h1 className='font-semibold text-4xl text-center pt-4'>{title}</h1>
            <h2 className=' text-center pb-4'>{subtitle}</h2>
        </div>
    );
};

export default Heading;