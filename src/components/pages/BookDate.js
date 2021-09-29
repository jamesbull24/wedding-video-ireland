import React from 'react';
import '../../App.js';
import Booking from '../Booking';

import { motion } from "framer-motion";

function BookingDate() {
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <h1 className="pageHeader">- Book your Date -</h1>
		  <Booking />
		</motion.div >
    )
}

export default BookingDate;