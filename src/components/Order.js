/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from 'react';
import { motion, AnimatePresence }from 'framer-motion'

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
  },
  exit: {
    x : '-100vh',
    transition: {ease: 'easeInOut'}
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

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 5000);
    return () => clearTimeout(timer); // clear timer if user navigates away from page before modal loads
  }, [setShowModal]); // not going to rerun if value stays the same, only running once

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
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