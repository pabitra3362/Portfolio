import React from 'react'
import Tilt from 'react-parallax-tilt';
import "./aboutTilt.css"
import image from '../../assets/without-background.png'

const AboutTilt = () => {

    const aboutArr=[
        {
            key:"Name",
            value:"Pabitra Mohanty"
        },
        {
            key:"Age",
            value:"21 Years"
        },
        {
            key:"Occupation",
            value:"Student"
        },
        {
            key:"Phone",
            value:"+91 9512682261"
        },
        {
            key:"Email",
            value:"Pmohanty1435@gmail.com"
        },
        {
            key:"Nationality",
            value:"Indian"
        },
    ]
  return (
    <div id='about' className='About-Tilt bg-slate-900 py-16 px-2 lg:w-[60vw] lg:mx-auto grid lg:grid-cols-2 lg:gap-0 justify-start items-center gap-4'>
      <div>
      <Tilt>
      <div className='card h-96 w-80 bg-cyan-500 p-4 text-black overflow-hidden hover:shadow-cyan'>
        <img className='rounded-lg' src={image} alt="my image" />
      </div>
    </Tilt>
      </div>
      <div className='text mt-7 px-3 grid justify-start items-center gap-4'>
        <h2 className='uppercase text-custom-green font-bold text-2xl'>About me</h2>
        <p className='text-3xl text-white font-bold font-serif'>I Develop System That Works</p>
        <p className='text-lg text-white'> I'm Pabitra Mohanty, a web developer passionate about building responsive, user-friendly websites. With experience in both front-end and back-end development, I focus on creating high-quality, efficient web applications. I enjoy learning new technologies and staying up-to-date with industry trends to deliver cutting-edge solutions. Let's work together to bring your ideas to life!</p>
        <div className='bg-white opacity-40 h-[1px] w-full'></div>
      
      <div className='grid md:grid-cols-2 md:gap-x-16 justify-start items-center gap-3 px-1 text-white'>

        {aboutArr.map((item,index)=>(
            <div key={index} className='grid grid-cols-2 justify-start items-center '>
                <div className={`${item.key} font-bold`}>
                {item.key}
                </div>
                <div className='overflow-x-scroll'>
                    {item.value}
                </div>
            </div>
            
          ))}
        

      </div>
          <div className='bg-white opacity-40 h-[1px] w-full'></div>
      </div>
      
        
     
    </div>
  )
}

export default AboutTilt
