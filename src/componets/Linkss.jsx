import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.75,
        staggerChildren: 0.4
      }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};

function Linkss({ details }) {
  
    console.log(details);
    const render = details.map(val => {
      return (
        <motion.span className='items' variants={item}>
          <a href={val.to} className='mx-5 hover:text-[#088395] underline-offset-4 duration-500 text-[#37B7C3]'> {val.name} </a>
        </motion.span>
      )
  })
    return (
    <motion.boom
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
    >
        {render}
    </motion.boom>
  )
}

export default Linkss