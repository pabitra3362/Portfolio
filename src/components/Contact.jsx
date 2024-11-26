import React from 'react'
import { motion } from 'motion/react'
import MyInput from './Input'
import Textarea from './Textarea'
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <motion.div

        >
            <motion.div
                className=' left py-5 px-3  grid  items-center gap-5'
            >
                <h2
                    className='text-custom-green font-bold text-xl tracking-[0.25rem] uppercase text-center'
                >contact me</h2>

                <p
                    className='text-white font-bold text-2xl text-center'
                >
                    Let&apos;s Start A New Project
                </p>

                <div className='information grid items-center gap-5'>

                    <div className='flex justify-start items-center gap-3'>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/onmwuuox.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#30e849"
                                style={{ "width": "60px", "height": "60px" }}>
                            </lord-icon>
                        </div>
                        <div className='grid justify-start items-start px-3 gap-3'>
                            <div className='text-2xl font-bold text-white'>Location</div>
                            <div className='text-white'>Udhna, Surat, Gujrat, India</div>
                        </div>
                    </div>


                    <div className='flex justify-start items-center gap-3'>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/nnzfcuqw.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#30e849"
                                style={{ "width": "60px", "height": "60px" }}>
                            </lord-icon>
                        </div>
                        <div className='grid justify-start items-start px-3 gap-3'>
                            <div className='text-2xl font-bold text-white'>Phone</div>
                            <div className='text-white'>+91 9512682261</div>
                        </div>
                    </div>


                    <div className='flex justify-start items-center gap-3'>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/vpbspaec.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#08a88a"
                                style={{ "width": "60px", "height": "60px" }}>
                            </lord-icon>
                        </div>
                        <div className='grid justify-start items-start px-3 gap-3'>
                            <div className='text-2xl font-bold text-white'>Mail Us</div>
                            <div className='text-white'>Pmohanty1435@gmail.com</div>
                        </div>
                    </div>


                </div>
            </motion.div>
            <motion.div>
                <form
                    className='grid justify-center items-center gap-2'
                    onSubmit={handleSubmit(onSubmit)}>

                    <MyInput
                        className="w-80 rounded-md"
                        placeholder={"Your Name"}
                        name={"name"}
                    />

                    <MyInput
                        className="w-80 rounded-md"
                        type={"email"}
                        placeholder={"Your Email"}
                        name={"email"}
                    />

                    <MyInput
                        className="w-80 rounded-md"
                        type="number"
                        placeholder={"Your Phone"}
                        name={"phone"}
                    />

                    <MyInput
                        className="w-80 rounded-md"
                        placeholder={"Your Subject"}
                        name={"subject"}
                    />

                    <Textarea
                        className='w-80 h-36 rounded-md'
                        placeholder={"Start Writing Your Message Here...."}
                        name={"description"}
                    />
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact
