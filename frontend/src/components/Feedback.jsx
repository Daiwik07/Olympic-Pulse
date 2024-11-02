import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Feedback = () => {

    const [feedName, setFeedName] = useState("")
    const [feedMessage, setFeedMessage] = useState("")

    let mapStyle = {
        height: '100%',
        width: '100%'
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()

    let ref = useRef()

    const onSubmit = async (data, e) => {
        setFeedName(data.name)
        setFeedMessage(data.message)
        e.preventDefault();
        ref.current.reset()
        const r = await fetch("http://localhost:3000/feed", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        let res = await r.json()
        if (res == "notadded") {
            toast.error("Your Feedback Is Not Submited")
        }
        else {
            toast.success("Your Feedback Is Successfuly Submited")
            localStorage.setItem('feedname', data.name);
            localStorage.setItem('feedemail', data.email);
            localStorage.setItem('message', data.message);
            window.location.reload()
        }
    }

    let feed;
    if (localStorage.getItem('feedname') == "" && localStorage.getItem('message') == "") {
        feed = <div></div>
    }
    else {
        feed = <div className='flex items-center my-10'><p className='font-bold text-2xl'>{localStorage.getItem('feedname')}:&nbsp;&nbsp;</p><p className='font-semibold text-xl'>{localStorage.getItem('message')}</p></div>
    }

    let name;
    let email;
    if (localStorage.getItem('name') == "" && localStorage.getItem('email') == "") {
        name = <input {...register("name", { required: { value: true, message: "Enter the Name" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Name" id='name' name='name' />
        email = <input {...register("email", { required: { value: true, message: "Enter the Email" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="email" placeholder="Email" id='email' name='email' />
    }
    else {
        name = <input value={localStorage.getItem('name')} {...register("name", { required: { value: true, message: "Enter the Name" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Name" id='name' name='name' />
        email = <input value={localStorage.getItem('email')} {...register("email", { required: { value: true, message: "Enter the Email" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="email" placeholder="Email" id='email' name='email' />
    }
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" bg-gray-300 rounded-lg overflow-hidden w-2/3 p-10 flex items-end justify-start relative">
                        <iframe className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14027.407228713686!2d77.32095495000002!3d28.484009249999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724599328425!5m2!1sen!2sin" style={mapStyle} ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">ARAVALI INTERNATIONAL SCHOOL, SECTOR 43
                                    Badkal Surajkund Road,
                                    Faridabad - 121003</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">info.ais@aravali.edu.in</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 8287104808</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='h-[70vh] flex justify-center items-center flex-col w-1/3' ref={ref} >
                        <p className='font-bold text-3xl mb-10 text-center'>FeedBack</p>
                       
                        {name}
                        {errors.name && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.name.message}</div>}
                        {email}
                        {errors.email && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.email.message}</div>}
                        <textarea {...register("message", { required: { value: true, message: "Enter the Message" } })} className="w-[70%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Message" id='message' name="message" />
                        {errors.message && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.message.message}</div>}
                        <button type='submit'  className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-[70%] py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            {isSubmitting && <span className='loader mr-3'></span>}
                            Submit The Feedback
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition:Bounce/>
                        {errors.exist && <div className='w-[70%] text-red-600 text-sm font-semibold'>{errors.exist.message}</div>}
                    </form>
                </div>
            </section>
            <hr />
            <section>
                <div>
                    {feed}
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Rajesh Sharma:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>The website design is sleek and modern. I really enjoyed the user interface!</p>
                    </div>
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Priya Verma:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>Great content and easy navigation. Keep up the good work!</p>
                    </div>
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Ankita Kapoor:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>I love the attention to detail on this website. Everything is very intuitive.</p>
                    </div>
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Arjun Malhotra:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>The performance is a bit sluggish at times, especially when navigating through multiple pages.</p>
                    </div>
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Suman Khanna:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>Impressive layout and the features are very user-friendly. Excellent job!</p>
                    </div>
                    <hr />
                    <div className='flex items-center my-10'>
                        <p className='font-bold text-2xl'>Vikram Singh:&nbsp;&nbsp;</p>
                        <p className='font-semibold text-xl'>Some of the images take too long to load, which hampers the user experience.</p>
                    </div>
                    <hr />

                </div>
            </section>
        </div>
    )
}

export default Feedback
