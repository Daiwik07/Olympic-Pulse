import React from 'react'
import { useRef } from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm()
    let btn
    if (isSubmitting) {
       btn =( <button type='submit' disabled className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <span className='loader mr-3'></span>
            Register Your Account
        </button>)
    }
    else {
       btn=( <button type='submit' className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            Register Your Account
        </button>)
    }

    const onSubmit = async (data, e) => {
        ref.current.reset()
        const r = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        let res = await r.json()
        if (res == "user already exist") {
            setError("exist", { message: "The user already exist" })
        }
        else {
            localStorage.setItem('name', data.name)
            localStorage.setItem('email', data.email)
            localStorage.setItem('pass', data.pass)
            window.location.reload()
        }
    }


    const ref = useRef()
    const handleInputChange = () => {
        clearErrors();
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 flex flex-col items-center">
                        <span className='mb-16 text-3xl font-bold'>Register Your Account</span>
                        <div className="w-full flex-1 mt-3">
                            <div className="m-auto flex flex-col justify-center items-center h-full max-w-xs">
                                <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
                                    <input
                                        {...register("name", { required: { value: true, message: "Enter the Name" } })}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        placeholder="Name"
                                        id='name'
                                        name='name'
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <div className='w-full text-red-600 text-sm font-semibold'>{errors.name.message}</div>}

                                    <input
                                        {...register("email", { required: { value: true, message: "Enter the Email" } })}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="email"
                                        placeholder="Email"
                                        id='email'
                                        name='email'
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <div className='w-full text-red-600 text-sm font-semibold'>{errors.email.message}</div>}
                                    <input
                                        {...register("pass", { required: { value: true, message: "Enter the Password" } })}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                        id='pass'
                                        name="pass"
                                        onChange={handleInputChange}
                                    />
                                    {errors.pass && <div className='w-full text-red-600 text-sm font-semibold'>{errors.pass.message}</div>}
                                    {btn}
                                    {errors.exist && <div className='w-full text-red-600 text-sm font-semibold'>{errors.exist.message}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-[#47B884] text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center flex justify-center items-center bg-no-repeat bg-img">
                        <div className=" text-white flex justify-center items-center flex-col">
                            <p className="text-[50px] font-bold">Welcome to Register</p>
                            <p className='text-[17px]'>Have an account?</p>
                            <Link to="/login" className="no-underline mt-3">
                                <motion.button
                                    className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                                    whileHover={{
                                        background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                                        color: "#fff",
                                        scale: 1.05,
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                                    }}
                                >
                                    Log In
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register
