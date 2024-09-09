import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Ai = (props) => {

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
    if ((answer == "") && (props.user.name !== "")) {
        form = <form onSubmit={handleSubmit(onSubmit)} className='h-[89.2vh] w-full flex justify-center items-center flex-col' ref={ref} ><p className='font-bold text-3xl mb-10 text-center'>Question Olympic Buddy about Olympics</p>{isSubmitting && <div>Loading...</div>}<input value={props.user.name} {...register("name", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Name" id='name' name="name" />{errors.name && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.name.message}</div>}<textarea {...register("ques", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Question" id='question' name="ques" />{errors.ques && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.ques.message}</div>}<input type="Submit" value="Ask Question" className="mt-5 tracking-wide font-semibold bg-[#47B884] text-white-500 w-[70%] py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" /></form>
    }
    else if (answer == "") {
        form = <form onSubmit={handleSubmit(onSubmit)} className='h-[89.2vh] w-full flex justify-center items-center flex-col' ref={ref} ><p className='font-bold text-3xl mb-10 text-center'>Question Olympic Buddy about Olympics</p>{isSubmitting && <div>Loading...</div>}<input {...register("name", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Name" id='name' name="name" />{errors.name && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.name.message}</div>}<textarea {...register("ques", { required: { value: true, message: "Ask The Questiion" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Question" id='question' name="ques" />{errors.ques && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.ques.message}</div>}<input type="Submit" value="Ask Question" className="mt-5 tracking-wide font-semibold bg-[#47B884] text-white-500 w-[70%] py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" /></form>
    }
    else {
        form = <><div>{answer}</div><Link to='/' className='underline text-blue-600 pt-3 mt-5'>Back to home</Link></>
    }


    return (
        <div className='flex justify-center items-center flex-col min-h-[53.7vh]'>
            {form}
        </div>
                

    )
}

export default Ai
