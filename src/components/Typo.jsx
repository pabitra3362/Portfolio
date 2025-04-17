import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typo = () => {

    const typeArray = ['Software Engineer','Web Developer','Full Stack Developer','Freelancer']

    return (
        
            <span id='typewriter' className='  font-bold text-custom-green whitespace-nowrap text-2xl my-2 md:text-5xl lg:text-4xl lg:mt-3'><Typewriter
                words={typeArray}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2500}
            /></span>
        
    )
}

export default Typo
