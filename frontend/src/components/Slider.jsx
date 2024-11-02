import React, { useState, useEffect } from 'react';
import { Images } from '../Images/Images';

const slides = [
    { img: Images.firstSlider, heading: 'Olympic 2024', text: 'Inspire the World, Celebrate the Games' },
    { img: Images.secondSlider, heading: 'Medals Of Olympic 2024', text: 'Together for Gold, Together in Paris' },
    { img: Images.thirdSlider, heading: 'Global Athletes', text: '2024: The Year of Champions' },
    { img: Images.fourthSlider, heading: 'Olympic Pulse', text: 'Where Champions Live' },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[81.6vh] overflow-hidden">
            <div className="absolute inset-0">
                <img src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} className="w-full h-full object-cover" />
                {/* Text at the bottom */}
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 md:p-6 lg:p-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{slides[currentSlide].heading}</h2>
                    <p className="text-sm md:text-base lg:text-lg">{slides[currentSlide].text}</p>
                </div>
                {/* Buttons in the middle */}
                <div className="absolute inset-y-1/2 flex justify-between w-full h-full transform -translate-y-1/2 px-4">
                    <button
                        className=" text-white px-4 py-2 rounded"
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    >
                        <svg fill="#ffffff" height="50" width="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path>
                            </g>
                        </svg>
                    </button>
                    <button
                        className=" text-white px-4 py-2 rounded"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    >
                        <svg fill="#ffffff" height="50" width="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                {/* Indicators */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
