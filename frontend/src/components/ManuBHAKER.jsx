import React, { useRef } from 'react';
import {Images} from '../images/Images'
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

const ManuBhakarPage = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src="https://images.indianexpress.com/2022/06/manu-bhakar.jpg"
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
                        <h1 className="text-5xl font-extrabold">Manu Bhakar</h1>
                        <p className="text-lg mt-2">Indian Shooter - Rising Star</p>
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
                            Manu Bhakar, born in 2002, is a prominent Indian shooter known for her incredible achievements in shooting sports. She specializes in the 10m Air Pistol and 25m Pistol events. Manu burst onto the international scene with her remarkable performances, earning medals and accolades at various competitions.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Hailing from Haryana, Manu began her shooting career at a young age and quickly made a mark with her precision and focus. She has been a source of inspiration for many young shooters in India and continues to excel on the global stage.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.manu_shooting}
                        alt="Manu Bhakar Shooting"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
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
                        src={Images.manu_achiev}
                        alt="Manu Bhakar Achievements"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            Achievements
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-lg">
                            <li>Gold Medal - 2018 ISSF World Cup (Women’s 10m Air Pistol)</li>
                            <li>Gold Medal - 2018 ISSF World Cup (Women’s 25m Pistol)</li>
                            <li>Gold Medal - 2018 Commonwealth Games (Women’s 10m Air Pistol)</li>
                            <li>Gold Medal - 2018 Commonwealth Games (Women’s 25m Pistol)</li>
                            <li>Multiple National Championships in 10m Air Pistol and 25m Pistol</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default ManuBhakarPage;
