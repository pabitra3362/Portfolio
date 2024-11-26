import React from 'react'
import { motion } from 'motion/react'
import MyInput from './Input'
import Textarea from './Textarea'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = async (data, e) => {
        const formData = new FormData(e.target);

        formData.append("access_key", "7c8cb446-ff39-47d0-99fa-9c3d6bdfafd1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const mailData = await response.json();

        if (mailData.success) {
            toast.success(mailData.message)
            e.target.reset();
        } else {
            console.log("Error", mailData);
            toast.error(mailData.message);
        }
    }

    return (
        <div className='w-full md:w-[80vw] lg:w-[70vw] mx-auto px-3'>

            <ToastContainer theme='dark' />
            {/* header */}
            <div className='headers '>
                <h2
                    className='text-custom-green font-bold text-xl tracking-[0.25rem] uppercase text-center my-3 lg:my-10'
                >contact me</h2>

                <p
                    className='text-white font-bold text-2xl md:text-3xl text-center my-3 lg:my-10'
                >
                    Let&apos;s Start A New Project
                </p>
            </div>

            {/* content */}
            <div className='grid justify-center items-center gap-5 md:gap-10 lg:flex lg:justify-between lg:items-start my-4'>

                {/* details */}
                <div className="details grid justify-start items-center md:flex md:justify-between lg:grid lg:justify-start gap-4 ">

                    <div className='flex justify-start items-center md:grid lg:flex gap-3 px-3'>
                        <div className='flex justify-start items-center md:justify-center lg:justify-start'>
                            <lord-icon
                                src="https://cdn.lordicon.com/onmwuuox.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#30e849"
                                style={{ "width": "50px", "height": "50px" }}>
                            </lord-icon>
                        </div>
                        <div className='leading-loose'>
                            <div className='text-xl lg:text-2xl font-bold text-white text-start md:text-center lg:text-start'>Location</div>
                            <div className='text-white '>Udhna, Surat, Gujrat, India</div>
                        </div>
                    </div>

                    <div className='flex justify-start items-center md:grid lg:flex gap-3 px-3'>
                        <div className='flex justify-start items-center md:justify-center lg:justify-start'>
                            <lord-icon
                                src="https://cdn.lordicon.com/nnzfcuqw.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#30e849"
                                style={{ "width": "50px", "height": "50px" }}>
                            </lord-icon>
                        </div>
                        <div className='leading-loose'>
                            <div className='text-xl lg:text-2xl font-bold text-white text-start md:text-center lg:text-start'>Phone</div>
                            <div className='text-white  '>+91 9512682261</div>
                        </div>
                    </div>

                    <div className='flex justify-start items-center md:grid lg:flex gap-3 px-3'>
                        <div className='flex justify-start items-center md:justify-center lg:justify-start'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vpbspaec.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#30e849,secondary:#30e849"
                                style={{ "width": "50px", "height": "50px" }}>
                            </lord-icon>
                        </div>
                        <div className='leading-loose'>
                            <div className='text-xl lg:text-2xl font-bold text-white text-start md:text-center lg:text-start'>Mail Us</div>
                            <div className='text-white  '>Pmohanty1435@gmail.com</div>
                        </div>
                    </div>
                </div>

                {/* form */}
                <div className="form">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-start items-center'
                    >


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                placeholder={"Your Name"}
                                name={"name"}
                                {...register("name",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Name field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.name && <span className='text-red-500 text-lg'>{errors.name.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                type={"email"}
                                placeholder={"Your Email"}
                                name={"email"}
                                {...register("email",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Email field is required"
                                        },
                                        pattern:
                                        {
                                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                            message: "Please enter a valid email"
                                        }
                                    }
                                )}
                            />
                            {errors.email && <span className='text-red-500 text-lg'>{errors.email.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                type="number"
                                placeholder={"Your Phone"}
                                name={"phone"}
                                {...register("phone",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Phone field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.phone && <span className='text-red-500 text-lg'>{errors.phone.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                placeholder={"Your Subject"}
                                name={"subject"}
                                {...register("title",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Subject field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.title && <span className='text-red-500 text-lg'>{errors.title.message}</span>}
                        </div>


                        <div className='col-span-1 md:col-span-2'>
                            <Textarea
                                className='w-full h-36 rounded-md'
                                placeholder={"Start Writing Your Message Here...."}
                                name={"description"}
                                {...register("description",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Message field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.description && <span className='text-red-500 text-lg'>{errors.description.message}</span>}
                        </div>

                        <motion.div
                            whileInView={{
                                translateY: [100, -20, 0],
                                opacity: [0, 1],
                                transition: { duration: 1 }
                            }}
                            className='grid col-span-1 md:col-span-2 justify-center md:justify-start items-center'>

                            <input
                                className='btn btn-outline text-custom-green hover:bg-custom-green font-bold text-lg '
                                type="submit"
                                value={isSubmitting ? <span className="loading loading-spinner loading-lg"></span> : "Submit Now"}
                                disabled={isSubmitting ? true : false}
                            />

                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
