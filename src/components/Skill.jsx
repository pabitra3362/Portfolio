import React, { useRef } from 'react'
import Circle from './Circle'
import { useInView } from "motion/react"
import { motion } from "motion/react"

const Skill = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <motion.div
      className='grid lg:flex justify-start lg:justify-between items-start px-3 py-4 gap-4 lg:w-[70vw] mx-auto lg:gap-10'
    >
      <motion.div className="text grid justify-center items-center gap-3">

        <h2
          className='text-custom-green font-bold text-xl tracking-[0.25rem] uppercase'
        >my skills
        </h2>

        <p
          className='text-white text-3xl font-bold'
        >
          Growing Over Times
        </p>

        <p
          className='text-lg lg:w-[30vw]'
        >
          Adept in leveraging a motion.diverse set of skills to solve complex problems, with a focus on continuous learning and delivering impactful results.
        </p>

      </motion.div>
      <motion.div className="circles grid grid-cols-1 md:grid-cols-3 justify-center items-center"
      whileInView={{
        translateY:[100,-20,0],
        opacity:[0,1]
      }}
      >
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200"
        >
          <Circle percentage={85} />
          <p className='text-center text-lg text-white font-bold'>React Js</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={90} />
          <p className='text-center text-lg text-white font-bold'>Node Js</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={80} />
          <p className='text-center text-lg text-white font-bold'>Express Js</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={90} />
          <p className='text-center text-lg text-white font-bold'>MongoDB</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={100} />
          <p className='text-center text-lg text-white font-bold'>HTML</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={90} />
          <p className='text-center text-lg text-white font-bold'>css</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={95} />
          <p className='text-center text-lg text-white font-bold'>Javascript</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={86} />
          <p className='text-center text-lg text-white font-bold'>.NET</p>
        </motion.div>
        <motion.div className="reactjs grid justify-center items-center hover:scale-110 duration-200">
          <Circle percentage={75} />
          <p className='text-center text-lg text-white font-bold'>Python</p>
        </motion.div>
        
      </motion.div>
    </motion.div>
  )
}

export default Skill
