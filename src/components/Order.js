import React from 'react';
import { motion }from 'framer-motion'

const containerVariants = { // Defining motion properties before hand
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4, // higher is faster 
      damping: 8, // higher lesss oscillation
      when: 'beforeChildren', //complete this animation before any children animation occur
      staggerChildren: 0.4 //animation time between children
    }
  }
}
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;