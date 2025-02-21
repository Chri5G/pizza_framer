import React from 'react';
import { Link } from 'react-router-dom';
import { motion }from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1, // Keyframes on hover the button will increase and descrese in size
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3, // Time for transition
      yoyo: Infinity //Repeat the key frames transition x times
    }
  }
}

const Home = () => {
  return (
    // <motion.div className="home container"
    //   animate={{marginTop: 200, opacity: 0.2, rotateZ: 180}}>
    //   <motion.h2 animate={{ fontSize: 50, color: '#f22494', x: 100, y: -100 }}>
    //     Welcome to Pizza Joint
    //   </motion.h2>
    //   <Link to="/base">
    //     <motion.button
    //     animate={{ scale: 1.5 }}>
    //       Create Your Pizza
    //     </motion.button>
    //   </Link>
    // </motion.div>
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }} // delay for start of animation and time of animation
    >
      <motion.h2 animate={{ fontSize: 50, color: '#f22494', x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate='visible'
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;