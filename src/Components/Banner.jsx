import React from 'react';
import Image from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="w-full min-h-screen rounded-xl">
      <img
        src={Image}
        alt="Banner"
        className="w-full  min-h-screen object-cover"
      />
    </div>
  );
};

export default Banner;
