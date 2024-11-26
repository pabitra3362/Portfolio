import React from 'react'
import { TbSchool } from "react-icons/tb";
import studyImage from '../assets/education-img.jpg'
import { motion } from 'motion/react';

const Education = () => {

    return (
        <motion.div
            className='grid lg:flex justify-start items-start px-3 py-4 gap-4 lg:w-[70vw] mx-auto'
        >
            <motion.div className="text grid justify-center items-center gap-3">
                <h2
                    className='text-custom-green font-bold  md:text-center lg:text-start text-xl tracking-[0.25rem] uppercase'
                >Education</h2>

                <p
                    className='text-black text-3xl font-bold md:text-center lg:text-start'
                >My Education</p>

                <p
                    className='text-lg text-black'
                >
                    Empowering minds through knowledge, fostering creativity, critical thinking, and lifelong learning for future success
                </p>


                <motion.div className="flex flex-row-reverse justify-between items-center gap-3 md:w-[80vw] lg:w-[30vw] mx-auto">
                    
                    <motion.div className="peer rounded-lg bg-white border border-t-cyan-400 border-r-custom-green border-b-pink-500 border-l-orange-500 p-2 grid grid-cols-1 gap-3 justify-center items-center">
                        <p
                            className='text-black font-bold font-sans text-lg'
                        >Bachelor of Computer Applications</p>
                        <p
                            className='text-black text-lg'
                        >Udhna Acedemy College (2022 - 2025)</p>
                        <p
                        className='text-black'
                        >
                            Explaining the whole matter of play and my own, which was invented by that inventor of truth and as if the architect of a blessed life
                        </p>
                    </motion.div>

                    <motion.div className="logo h-24 w-24 bg-success text-black outline-8 transition duration-300 flex justify-center items-center border border-t-cyan-400 border-r-custom-green border-b-pink-500 border-l-orange-500 rounded-lg peer-hover:bg-white peer-hover:text-success peer-hover:animate-rotate">
                        <TbSchool className='h-20 w-20' />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
            whileInView={{
                opacity: [0,1],
                x:[100,0],
                transition:{duration:1}
            }}
            className={`img rounded-lg overflow-hidden w-full flex justify-center items-center `}>
                <img className=" mx-auto rounded-lg" src={studyImage} alt="studyImage" />
            </motion.div>
        </motion.div>
    )
}

export default Education
