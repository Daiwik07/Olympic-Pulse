import React, { useRef } from 'react';
import { Images } from '../Images/Images';
import { motion, useInView } from 'framer-motion';

const Section = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay }}
        >
            {children}
        </motion.div>
    );
};

const HarmanpreetSinghPage = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 via-green-500 to-indigo-500 min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src="https://www.hockeyindia.org/images/players/harmanpreet-singh.jpg"
                        className="w-96 h-96 object-cover rounded-full border-8 border-white shadow-lg"
                        initial={{ scale: 0.8, rotate: 360 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.div
                        className="absolute text-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-4xl font-extrabold">Harmanpreet Singh</h1>
                        <p className="text-lg mt-2">Captain of the Indian Men's Hockey Team</p>
                    </motion.div>
                </div>
            </Section>

            {/* Biography Section */}
            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            Biography
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Harmanpreet Singh, born on January 6, 1996, is an Indian field hockey player and the captain of the Indian national team. Known for his incredible drag-flicking skills, Harmanpreet has led India to numerous victories on the international stage, including bronze at the Tokyo 2020 Olympics.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Harmanpreet hails from Amritsar, Punjab, and has been passionate about hockey since childhood. His journey to becoming one of the finest drag-flickers in the world is a testament to his hard work, dedication, and leadership.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.harmanpreet_action}
                        alt="Harmanpreet Singh in action"
                        className="rounded-lg h-full w-full shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>

            {/* Achievements Section */}
            <Section delay={1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.img
                        src={Images.harmanpreet_tokyo}
                        alt="Harmanpreet with Tokyo 2020 Bronze Medal"
                        className="rounded-lg  shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            Achievements
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-lg">
                            <li>Bronze Medal - Tokyo 2020 Olympics (Hockey)</li>
                            <li>Gold Medal - 2022 Asian Champions Trophy</li>
                            <li>Gold Medal - 2016 Junior Hockey World Cup</li>
                            <li>Player of the Tournament - 2021 Men's FIH Hockey Pro League</li>
                            <li>Top Scorer - 2021 Asian Champions Trophy</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default HarmanpreetSinghPage;
