import React, { useRef } from 'react'
import { TbSchool } from "react-icons/tb";
import { useInView } from "motion/react"
import studyImage from '../assets/education-img.jpg'

const Education = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div
            className='grid lg:flex justify-start items-start px-3 py-4 gap-4 lg:w-[60vw] mx-auto'
        >
            <div className="text grid justify-center items-center gap-3">
                <h2
                    className='text-custom-green font-bold text-xl tracking-[0.25rem]'
                >Education</h2>

                <p
                    className='text-white text-3xl font-bold'
                >My Education</p>

                <p
                    className='text-lg'
                >
                    Empowering minds through knowledge, fostering creativity, critical thinking, and lifelong learning for future success
                </p>


                <div className="flex flex-row-reverse justify-between items-center gap-3 md:w-[80vw] lg:w-[30vw] mx-auto">
                    
                    <div className="peer rounded-lg bg-black border border-t-cyan-400 border-r-custom-green border-b-pink-500 border-l-orange-500 p-2 grid grid-cols-1 gap-3 justify-center items-center">
                        <p
                            className='text-white font-bold font-sans text-lg'
                        >Bachelor of Computer Applications</p>
                        <p
                            className='text-white text-lg'
                        >Udhna Acedemy College (2022 - 2025)</p>
                        <p>
                            Explaining the whole matter of play and my own, which was invented by that inventor of truth and as if the architect of a blessed life
                        </p>
                    </div>

                    <div className="logo h-24 w-24 bg-success text-white outline-8 transition duration-300 flex justify-center items-center border border-t-cyan-400 border-r-custom-green border-b-pink-500 border-l-orange-500 rounded-lg peer-hover:bg-white peer-hover:text-success peer-hover:animate-rotate">
                        <TbSchool className='h-20 w-20' />
                    </div>
                </div>
            </div>

            <div ref={ref} className={`img rounded-lg overflow-hidden w-full flex justify-center items-center  ${isInView ? "animate__animated animate__flash" : ""}`}>
                <img className=" mx-auto rounded-lg" src={studyImage} alt="studyImage" />
            </div>
        </div>
    )
}

export default Education
