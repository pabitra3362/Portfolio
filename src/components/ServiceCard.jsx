import React from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({icon,title,description}) => {
  return (
    <motion.div 
    whileInView={{
      translateY:[100,-20,0],
      opacity:[0,1]
    }}
    className='w-80 md:w-[96] lg:w-[30vw] h-[300px] bg-slate-900 rounded-lg grid justify-start items-center gap-3 px-4 py-3 border border-t-cyan-400 border-r-custom-green border-b-pink-500 border-l-orange-500 shadow-cyan'
    >
      
    <motion.div>
      {icon}
    </motion.div>
    <div className='grid justify-center items-center gap-4'>
    <p
    className=' text-2xl text-custom-green'
    >
        {title}
    </p>
    <p
    className='text-white'
    >{description}</p>
    </div>
    </motion.div>
  )
}

export default ServiceCard
