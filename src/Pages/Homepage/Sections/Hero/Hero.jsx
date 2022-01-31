import React from 'react';

const Hero = () => {
  return (
  <div className='w-full flex flex-col bg-heroimage bg-cover  bg-gray-700 text-white py-48 md:py-64 items-center justify-center'>
      <div className='text-center flex flex-col gap-5'>
        <div>
        <h1 className='text-6xl md:text-9xl font-semibold uppercase'>Hello</h1>
        <h1 className='text-3xl md:text-6xl font-semibold uppercase'>I'm a web developer</h1>
        </div>
      <div className='grid md:grid-cols-3 gap-3 px-4'>
        <input className='py-3 w-full md:col-span-2 rounded' type="text" />
        <button className='w-full py-3 bg-blue-500 rounded'>Get My Resume</button>
      </div>
      </div>
  </div>
    );
};

export default Hero;
