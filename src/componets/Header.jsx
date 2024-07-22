import React from 'react';
import { Link } from 'react-router-dom';
import Linkss from './Linkss';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png";

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

const logoStyle = {
  height: '40px', // Adjust the height as needed
  width: '150px',  // Adjust the width as needed
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
        <a href="#home">
          <img src={logo} alt="logo-icon" style={logoStyle} />
        </a>
      </motion.div>

      <motion.div className='mx-auto my-0 item' variants={item}>
        <Linkss details={details} />
      </motion.div>
    </motion.div>
  );
}

export default Header;
