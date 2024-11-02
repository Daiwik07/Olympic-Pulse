import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Ai = () => {

    const [answer, setAnswer] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()

    let ref = useRef()

    const onSubmit = async (data, e) => {
        e.preventDefault();
        ref.current.reset()
        const r = await fetch("http://localhost:3000/ai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({data}),
        });
        let res = await r.json()
        console.log(res)
        setAnswer(res)
    }

    let form;
    if ((answer == "") && (localStorage.getItem('name') !== "")) {
        form = <form onSubmit={handleSubmit(onSubmit)} className='h-[89.2vh] w-full flex justify-center items-center flex-col' ref={ref} ><p className='font-bold text-3xl mb-10 text-center'>Question Olympic Buddy about Olympics</p>{isSubmitting && <div>Loading...</div>}<input value={localStorage.getItem('name')} {...register("name", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Name" id='name' name="name" />{errors.name && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.name.message}</div>}<textarea {...register("ques", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Question" id='question' name="ques" />{errors.ques && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.ques.message}</div>}<input type="Submit" value="Ask Question" className="mt-5 tracking-wide font-semibold bg-[#47B884] text-white-500 w-[70%] py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" /></form>
    }
    else if (answer == "") {
        form = <form onSubmit={handleSubmit(onSubmit)} className='h-[89.2vh] w-full flex justify-center items-center flex-col' ref={ref} ><p className='font-bold text-3xl mb-10 text-center'>Question Olympic Buddy about Olympics</p>{isSubmitting && <div>Loading...</div>}<input {...register("name", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Name" id='name' name="name" />{errors.name && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.name.message}</div>}<textarea {...register("ques", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Question" id='question' name="ques" />{errors.ques && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.ques.message}</div>}<input type="Submit" value="Ask Question" className="mt-5 tracking-wide font-semibold bg-[#47B884] text-white-500 w-[70%] py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" /></form>
    }
    else {
        form = <><h2 className="text-3xl font-bold mb-6 text-center text-[#47B884]">Here’s what Olympic Buddy created for you:</h2><p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{answer}</p><Link to='/' className='underline text-blue-600 pt-3 mt-5'>Back to home</Link></>
    }


    return (
        <div className="flex flex-col items-center min-h-[57.2vh] bg-gradient-to-r from-green-500 via-[#47B884] to-teal-500 text-white p-6">
            <main className="w-full max-w-4xl bg-white text-gray-900 p-10 rounded-xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    {form}
            </main>
        </div>
                

    )
}

export default Ai
