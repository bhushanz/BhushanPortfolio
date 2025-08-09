import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  return (
    <div className='w-full min-h-20 border bg-rose-600 flex items-center  overflow-hidden'>
   <motion.div
    animate={{ x: ['0%', '-100%'] }}
  transition={{ repeat: Infinity, duration: 60, ease:'linear' }}
   className='flex whitespace-nowrap items-center  marquee'>
   <h1 className='text-white text-2xl md:text-7xl font-bold mx-2  py-2 '>
     | 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>  | 📢 bhushan zombade ?<span className='text-yellow-400'> who ?</span>| 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>
    </h1>
    <h1 className='text-white text-2xl md:text-7xl font-bold mx-2  py-2 '>
    📢|   bhushan zombade ? <span className='text-yellow-400'>who ?</span>  | 📢 bhushan zombade ?<span className='text-yellow-400'> who ?</span>| 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>
    </h1>
  </motion.div>
     <motion.div
    animate={{ x: ['0%', '-100%'] }}
  transition={{ repeat: Infinity, duration: 60, ease:'linear' }}
   className='flex whitespace-nowrap marquee'>
   <h1 className='text-white text-2xl md:text-7xl font-bold mx-2  py-2 '>
     | 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>  | 📢 bhushan zombade ?<span className='text-yellow-400'> who ?</span>| 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>
    </h1>
    <h1 className='text-white text-2xl md:text-7xl font-bold mx-2  py-2 '>
    📢|   bhushan zombade ? <span className='text-yellow-400'>who ?</span>  | 📢 bhushan zombade ?<span className='text-yellow-400'> who ?</span>| 📢 bhushan zombade ? <span className='text-yellow-400'>who ?</span>
    </h1>
  </motion.div>


    </div>
  )
}

export default Marque