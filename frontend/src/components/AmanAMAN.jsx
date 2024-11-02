import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Images } from '../Images/Images';

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

const AmanAmanPage = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500 min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src="https://www.jagranimages.com/images/newimg/07092021/07_09_2021-amanaman_21918862.jpg"
                        
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
                        <h1 className="text-5xl font-extrabold">Aman Aman</h1>
                        <p className="text-lg mt-2">Indian Wrestler - A Rising Star</p>
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
                            Aman Aman, born in 2001, is one of India's rising stars in the field of wrestling. He competes in the men's freestyle 57kg category and has represented India at various international competitions. Known for his quick reflexes and strength, Aman has brought home multiple medals for India.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Hailing from Haryana, a state known for producing some of India's best wrestlers, Aman has quickly climbed the ranks in Indian wrestling. His dedication to his sport and his love for competition have made him a force to be reckoned with.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.anman_wrestling}
                        alt="Aman Aman Wrestling"
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
                        src={Images.aman_ahciev}
                        alt="Aman Aman Achievements"
                        className="rounded-lg w-full h-full shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            Achievements
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-lg">
                            <li>Gold Medal - 2021 Junior Wrestling World Championship (57kg)</li>
                            <li>Bronze Medal - 2022 Commonwealth Games</li>
                            <li>Silver Medal - 2022 Asian Wrestling Championships</li>
                            <li>National Champion in Freestyle Wrestling (57kg)</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default AmanAmanPage;
