import React from 'react'
import ParticlesComponent from '../components/Particles'
import CardTilt from '../components/CardTilt'
import AboutTilt from '../components/AboutTilt'
import InfineScrollText from '../components/InfineScrollText'
import { ProjectsHover } from '../components/ProjectsHover'

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
      <div className="home bg-slate-900">
        <div className="particles">
        <ParticlesComponent />
        </div>

        <div className='cards bg-slate-900'>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:flex w-full md:w-[80vw] lg:w-fit mx-auto">
            {
              ArrOfCards.map((card, index) => (
                <CardTilt key={index} icon={card.icon} title={card.title} description={card.description} />
              ))
            }

          </div>
        </div>

        {/* About Me */}

        <div id="about" className='bg-slate-900 w-full'>
          <AboutTilt />
        </div>

        <div className="scrollingtext text-white bg-slate-900 py-5">
            <InfineScrollText animate={"animate-scrollLeft"} text={"Junior Website Developer From India * "} />

            <InfineScrollText animate={"animate-scrollRight"} text={"Let's Work Together. I Am Open For New Projects * "} />
        </div>


          {/* projects */}

        <div
        id='projects'
        className="projects grid justify-center items-center gap-5">
          <h2 className='text-custom-green font-bold uppercase text-center my-2 tracking-[0.5rem] lg:text-2xl'>portfolio</h2>
          <h1
          className='text-white text-2xl lg:text-4xl text-center tracking-[0.25rem]'
          >My Projects</h1>
          <div className=' md:w-[80vw] lg:w-[60vw]'>
            <ProjectsHover />
          </div>
        </div>

         
        
      </div>
    </div>
  )
}

export default Home
