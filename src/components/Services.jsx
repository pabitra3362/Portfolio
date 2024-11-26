import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {

   const serviceCards = [
        {
            icon: <lord-icon
                src="https://cdn.lordicon.com/yvaxaowk.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ "width": "80px", "height": "80px" }}>
            </lord-icon>,
            title: "Mern Stack Development",
            description: "Build modern, scalable web apps with MERN: MongoDB, Express, React, and Node — where innovation meets efficiency.",
        },
        {
            icon: <lord-icon
                src="https://cdn.lordicon.com/nfuackpv.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ "width": "80px", "height": "80px" }}>
            </lord-icon>,
            title: "Full Stack Development",
            description: "Master the web from front to back—building seamless, powerful apps with full-stack expertise.",
        }
    ]

    

    return (
        <div className='grid justify-center items-center gap-5 lg:gap-8'>
            <p
                className='text-green-400 font-bold text-xl tracking-[0.25rem] uppercase text-center'
            >service</p>
            <p
                className='text-black font-bold text-2xl text-center'
            >What I Offer</p>
            <div
        className='grid md:grid-cols-2 lg:grid-cols-2 justify-center md:justify-between items-center gap-4 md:gap-5 lg:gap-16 '
        >
            {
                serviceCards.map((item,index)=>(
                    <ServiceCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))
            }
        </div>
        </div>
    )
}

export default Services
