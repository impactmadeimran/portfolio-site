import React from 'react';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
  <div className='w-full flex flex-col bg-heroimage bg-cover  bg-gray-700 text-white py-48 md:py-64 items-center justify-center'>
      <div className='text-center flex flex-col gap-5'>
        <motion.div
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
        >
        <h1 className='text-6xl md:text-9xl font-semibold uppercase '>Hello</h1>
        <h1 className='text-3xl md:text-6xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-indigo-400'>I'm a web developer</h1>
        </motion.div>
      <div className='flex items-center justify-center'>
        {/* <input className='py-3 w-full md:col-span-2 rounded' type="text" /> */}
        <form className='w-full' action='mailto:impactmadeimran@gmail.com' method='GET'>
        <input type="submit" value = "Contact me" className='md:w-1/3 py-3 px-3 bg-indigo-600 rounded' />
        </form>
      </div>
      </div>
  </div>
    );
};

export default Hero;
