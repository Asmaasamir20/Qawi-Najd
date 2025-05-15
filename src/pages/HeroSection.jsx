import React from 'react';

const HeroSection = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className='relative flex flex-col items-center justify-center rounded-[20px] overflow-hidden text-white w-full '
      style={{
        backgroundImage: `url(${backgroundImage})` ,
        minHeight: '50vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none'></div>
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center w-full'>
        <h1 className='text-7xl font-light mb-4'>{title}</h1>
        {subtitle && <p className='text-lg font-light'>{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeroSection;
