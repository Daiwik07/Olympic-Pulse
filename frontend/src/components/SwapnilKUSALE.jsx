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

const SwapnilKusalePage = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500 min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src="https://images.news18.com/ibnlive/uploads/2022/08/swapnil-kusale-16598692813x2.jpg"
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
                        <h1 className="text-5xl font-extrabold">Swapnil Kusale</h1>
                        <p className="text-lg mt-2">Indian Shooter - Precision and Excellence</p>
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
                            Swapnil Kusale, born in 1995, is one of India's top rifle shooters. He represents India in the 50m Rifle 3 Positions event and has consistently performed at the highest levels in national and international competitions. Known for his incredible accuracy and calm demeanor, Swapnil has earned accolades at various international events, including the ISSF World Cup.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Hailing from Maharashtra, Swapnil's journey in shooting began at a young age, and his dedication to the sport has made him a prominent name in Indian shooting. He continues to inspire young shooters across the country with his determination and focus.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.swapnil_shooting}
                        alt="Swapnil Kusale Shooting"
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
                        src={Images.swanil_achive}
                        alt="Swapnil Kusale Achievements"
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
                            <li>Bronze Medal - ISSF World Cup (Individual 50m Rifle 3 Positions)</li>
                            <li>Gold Medal - 2022 Commonwealth Shooting Championships</li>
                            <li>Gold Medal - 2022 Asian Shooting Championships</li>
                            <li>National Champion in 50m Rifle 3 Positions</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default SwapnilKusalePage;
