import React from 'react';
import { Link } from 'react-router-dom';
import Linkss from './Linkss';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Header() {
  const details = [
    {
      to: '#home',
      name: 'Home',
    },
    {
      to: '#footer',
      name: 'About',
    },
    {
      to : '#form',
      name : 'Form'
    },
    {
      to: '#test',
      name: 'Testimonials',
    },
    {
      to: '#footer',
      name: 'Contact Us',
    },
  ];

  return (
    <motion.div
      className='w-full bg-[#071952] flex container py-3 text-[21px]'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='item ms-4' variants={item}>
        <Link to='/' className='hover:text-[#088395] duration-500 text-[#37B7C3]'>
          Logo
        </Link>
      </motion.div>

      <motion.div className='mx-auto my-0 item' variants={item}>
        <Linkss details={details} />
      </motion.div>
    </motion.div>
  );
}

export default Header;
