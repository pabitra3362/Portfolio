import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import resume from '../assets/unstop_resume.pdf';
function Mynavbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [user, setUser] = useState(false)


    const arr = [
        { text: "Home", path: "/" },
        { text: "About", path: "#about" },
        { text: "Projects", path: "#projects" },
        { text: "Skills", path: "#skills" },
        { text: "Contact", path: "#contact" },
    ]

    const handleHamClick = () => {
        setIsMenuOpen(prev => !prev)
    }


    return (
        <>
            <div className='bg-blue-950 flex justify-center'>

                <nav className="bg-blue-950 h-20 hidden md:hidden lg:flex justify-between items-center px-3 lg:w-[70vw] mx-auto fixed top-0 bg-transparent backdrop-blur-sm z-50">

                    <div className="uppercase text-custom-green font-bold flex justify-center items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/srupsmbe.json"
                            trigger="loop"
                            delay="1000"
                            stroke="bold"
                            colors="primary:#30e849,secondary:#30e849"
                            style={{ "width": "50px", "height": "50px" }}>
                        </lord-icon>
                        <p className='text-xl'>Pabitra</p>
                    </div>

                    <ul className="flex justify-center items-center text-white  gap-1 lg:gap-5 transition-all ">
                        <li className='text-xl hover:text-custom-green duration-200'><a href="#top">Home</a></li>
                        <li className='text-xl hover:text-custom-green duration-200'><a href="#about">About</a></li>
                        <li className='text-xl hover:text-custom-green duration-200'><a href="#projects">Projects</a></li>
                        <li className='text-xl hover:text-custom-green duration-200'><a href="#skills">Skills</a></li>
                        <li className='text-xl hover:text-custom-green duration-200'><a href="#contact">Contact</a></li>
                        <li className='text-xl'><button className="btn btn-outline text-custom-green hover:bg-custom-green font-bold"><a href={resume} download="resume1.pdf">Download CV</a></button></li>

                    </ul>



                </nav>

                {/* for mobile */}
                <div className='w-screen h-20 bg-blue-950 text-white flex justify-between items-center md:w-[80vw] lg:hidden px-3 bg-transparent backdrop-blur-sm fixed top-0 z-20'>

                    <div className="logo uppercase font-bold text-custom-green flex justify-center items-center">
                    <lord-icon
                            src="https://cdn.lordicon.com/srupsmbe.json"
                            trigger="loop"
                            delay="1000"
                            stroke="bold"
                            colors="primary:#30e849,secondary:#30e849"
                            style={{ "width": "50px", "height": "50px" }}>
                        </lord-icon>
                        <p className=''>Pabitra</p>
                    </div>

                    <div className='flex gap-5 md:gap-10 items-center justify-center'>
                        <div>
                            <button className="btn btn-outline text-custom-green hover:bg-custom-green font-bold"><a href={resume} download="resume1.pdf">Download CV</a></button>
                        </div>
                        <div>
                            <button onClick={handleHamClick}><img className='size-9 pt-2 bg-blue-950' src="./Hamburger.png" alt="Hamburger" /></button>
                        </div>

                    </div>

                </div>
                {
                    isMenuOpen && (
                        <div className='fixed top-16 left-0 h-screen p-2 w-screen bg-transparent flex flex-col justify-center md:justify-center items-center gap-6 backdrop-blur-sm pt-5 z-30'>
                            {arr.map((item, index) => (
                                <div className='text-lg text-white font-bold' onClick={handleHamClick} key={index}>
                                    <a href={item.path}>{item.text}</a>
                                </div>
                            ))}
                            <div>
                                <button className="btn btn-outline text-custom-green hover:bg-custom-green font-bold"><a href={resume} download="resume.pdf">Download CV</a></button>
                            </div>


                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Mynavbar;