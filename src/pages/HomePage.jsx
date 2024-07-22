import React from 'react';
import Left from '../componets/Left';
import Right from '../componets/Right';
import { motion } from 'framer-motion';
import headFoot from '../assets/headfoot.png'

function HomePage() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
    <motion.div className='lg:grid lg:grid-cols-2 bg-[#071952]'  
      variants={container}
      initial="hidden"
      animate="visible" >
      <Left />
      <Right />
    </motion.div>
    <motion.div      
    className='relative'
      variants={container}
      initial="hidden"
      animate="visible">
    <img src={headFoot} className='w-screen h-48' />
    </motion.div>
    </>
  );
}

export default HomePage;
