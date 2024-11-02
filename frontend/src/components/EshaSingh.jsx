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

const EshaSinghPage = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
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
                        <h1 className="text-5xl font-extrabold">Esha Singh</h1>
                        <p className="text-lg mt-2">Indian Shooter - Emerging Talent</p>
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
                            Esha Singh, born in 2002, is a promising Indian shooter who has made significant strides in the shooting sports arena. Specializing in the 10m Air Pistol and 25m Sports Pistol events, Esha has quickly risen to prominence with her impressive performances at national and international competitions.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Her dedication and skill have earned her several accolades and she is recognized as one of India's most promising shooting talents. Esha’s commitment to excellence and focus on her craft make her a standout athlete in the world of shooting.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.esha_shooting}
                        alt="Esha Singh Shooting"
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
                        src={Images.esha_achiev}
                        alt="Esha Singh Achievements"
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
                            <li>Gold Medal - ISSF World Cup (Mixed Team Event)</li>
                            <li>Silver Medal - ISSF World Cup (Individual 10m Air Pistol)</li>
                            <li>Gold Medal - 2022 Commonwealth Games (Women’s 10m Air Pistol)</li>
                            <li>Silver Medal - 2022 Asian Shooting Championships (Women’s 25m Sports Pistol)</li>
                            <li>National Champion in 10m Air Pistol and 25m Sports Pistol</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default EshaSinghPage;
