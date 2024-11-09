import React from 'react'
import ParticlesComponent from '../components/Particles'
import CardTilt from '../components/CardTilt'

const Home = () => {

  const ArrOfCards = [

    {
      icon: <lord-icon src="https://cdn.lordicon.com/weqkkuwt.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#08a88a" style={{ width: "80px", height: "80px" }}></lord-icon>,
      title: "Dedication",
      description: "I am dedicated to my work and always strive to deliver the best results.",
    },

    {
      icon: <lord-icon src="https://cdn.lordicon.com/bsmnglum.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#08a88a" style={{ width: "80px", height: "80px" }}></lord-icon>,
      title: "Smart Work",
      description: "I focus on smart strategies and efficient processes to deliver high-quality results quickly.",
    },

    {
      icon: <lord-icon src="https://cdn.lordicon.com/jdgfsfzr.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#08a88a" style={{ width: "80px", height: "80px" }}></lord-icon>,
      title: "Collaboration",
      description: "I value collaboration, working seamlessly with teams to achieve shared goals and drive success.",
    },

    {
      icon: <lord-icon src="https://cdn.lordicon.com/urswgamh.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#08a88a" style={{ width: "80px", height: "80px" }}></lord-icon>,
      title: "Technology",
      description: "I leverage cutting-edge technology to drive innovation, streamline processes, and enhance overall performance.",
    }

  ]


  return (
    <div>
      <div className="home">
        <ParticlesComponent />
        <div className='bg-slate-900'>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:flex w-full md:w-[80vw] lg:w-[60vw] mx-auto">
            {
              ArrOfCards.map((card,index)=>(
                <CardTilt key={index} icon={card.icon} title={card.title} description={card.description} />
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
