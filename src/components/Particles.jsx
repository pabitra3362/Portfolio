import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import Typo from "./Typo";
import myimage from '../assets/without-background.png'


const ParticlesComponent = (props) => {

    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "black",
                },
            },
            style: {
                width: "100%",
                height: "100%",
                position: "absolute",
                "z-index": "-1"
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    return (
        <div id="top" className="h-[100vh] relative lg:z-10 z-10">
            <div className="text grid lg:flex justify-center lg:justify-between gap-10 md:gap-1 pt-20 items-center h-screen w-full lg:w-[70vw] mx-auto lg:pt-10">
                <div className="lg:w-[46%] lg:flex lg:flex-col text-center lg:text-start grid gap-4 ">
                    <p className="text-xl md:text-3xl lg:text-2xl text-custom-green uppercase font-semibold ">hello i'm</p>
                    <p className="text-[42px] md:text-[70px] text-white font-bold lg:text-[5vw]">Pabitra Mohanty</p>
                    <div className="grid gap-4 lg:flex lg:gap-3 justify-center lg:justify-start items-center ">
                    <p className="text-3xl md:text-5xl lg:text-2xl text-white font-bold">A Passionate</p>
                    <div><Typo /></div>
                    </div>
                    <div className="  lg:z-50">
                    <button className="px-8  py-3 bg-custom-green text-black font-bold rounded-md scale-100 hover:scale-110 transition duration-300 "><a href="#contact">Say Hello</a></button>
                    </div>    
                          
                </div>

                
               
                <div className="image h-96 w-80  md:w-fit border-2 border-custom-green overflow-hidden rounded-full mx-auto lg:mx-0 bg-transparent backdrop-blur-sm ">
                    <img src={myimage} alt="my image" />
                </div>
                </div>

           

            <Particles id={props.id} init={particlesLoaded} options={options} />;

        </div>
    )
};

export default ParticlesComponent;