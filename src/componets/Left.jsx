import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
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

function Left() {
  const text = 'Explore, Unleash the Power of AI: Revolutionize Your Blog with Intelligent Insights and Automation.';
  const [blue, setBlue] = useState(true);
  setTimeout(() => {
    setBlue(pre => !pre)
  }, 1000)
  useEffect(() => {
    setTimeout(() => {
      setBlue(pre => !pre)
    }, 1000)
  }, [blue])
  const wordsArray = text.split(' ');

  const render = wordsArray.map((tx, index) => {
    if(index > 0) {
      return (
        <motion.span
        className={`font-[350] item ${index % 2 === 0 ? (blue ? 'text-[#64CCC5]' : 'text-white') : (!blue ? 'text-[#64CCC5]' : 'text-white')} duration-[400ms]`}
        variants={item}
        >
        {' '}{tx}
        </motion.span>
      )
    }
    return(
      <motion.span
      className={`text-[90px] bg-gradient-to-r font-[400] relative -top-3 bg-clip-text text-transparent from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md`}
      variants={item}
      >{tx}</motion.span>
    )
});

  return (
    <motion.div variants={item}>

      <motion.div
        className="container text-3xl lg:h-full h-1/2 flex flex-col items-center justify-center p-4 my-14 lg:my-0 "
        variants={container}
        initial="hidden"
        animate="visible" 
        >
        <div className='select-none'>
          {render}
        </div>
        <div className='flex self-start'>
          <Link to='/product' className='w-[100%]'>
            <motion.div className='item w-80 py-2 mt-16 text-center rounded-lg hover:bg-transparent border-2 duration-500	border-[#37B7C3] font-[325]'
            variants={item}
            >
            <span className={`text-[45px] font-[300] bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-pink-500 p-1 rounded-md`}>
              Shoping
            </span>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Left;
