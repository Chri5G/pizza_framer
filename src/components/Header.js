import React from 'react';
import { motion }from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: 0,
    transition: {duration: 1}
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0, // length of the path, pen will be hovering over intial position
  },
  visible: {
    opacity: 1,
    pathLength: 1, // draws the svg
    transition: { 
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <header>
      {/* <Link to="/"> */}
        <motion.div className="logo"
          drag // make logo draggable
          dragConstraints={{ left: 0, top: 0, right:0, bottom:0}} //logo will get dragged back to original position
          dragElastic={1} //the higher the # the easier it is too drag
        >
          <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            variants={svgVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" /* Pac Man*/
            />
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" /* Top right part */
            />
          </motion.svg>
        </motion.div>
      {/* </Link> */}
      <motion.div className="title"
        initial={{ y: -250}} //Set start point of animation
        animate={{ y: -10}}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120}} // default type is spring(bouncy), stiffnes of spring(deafult 100)
        >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;