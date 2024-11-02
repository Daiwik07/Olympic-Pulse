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

const NeerajChopraPage = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Neeraj_Chopra_gold_medal%2C_2020_Tokyo_Olympics.jpg/1280px-Neeraj_Chopra_gold_medal%2C_2020_Tokyo_Olympics.jpg"
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
                        <h1 className="text-5xl font-extrabold">Neeraj Chopra</h1>
                        <p className="text-lg mt-2">India's Golden Boy in Javelin Throw</p>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            Biography
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Neeraj Chopra, born on December 24, 1997, is an Indian track and field athlete who competes in javelin throw. He made history at the 2020 Tokyo Olympics by becoming the first Indian athlete to win a gold medal in athletics. He has won numerous other accolades, including golds at the 2018 Commonwealth Games and Asian Games.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Hailing from Khandra village in Haryana, Neeraj's journey to becoming a world-class athlete is an inspiring tale of dedication and perseverance. Despite early challenges, he worked tirelessly to perfect his craft, making him one of the finest athletes India has ever produced.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.neeraj_asian}
                        alt="Neeraj Chopra at Asian Games"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>

            <Section delay={1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.img
                        src={Images.neeraj_winning}
                        alt="Neeraj Chopra Winning"
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
                            <li>Gold Medal - Tokyo 2020 Olympics (Javelin Throw)</li>
                            <li>Gold Medal - 2018 Commonwealth Games</li>
                            <li>Gold Medal - 2018 Asian Games</li>
                            <li>Junior World Record - 2016 IAAF U20 World Championships</li>
                            <li>Arjuna Award - 2018</li>
                            <li>Vishisht Seva Medal - 2020</li>
                            <li>Padma Shri - 2022</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default NeerajChopraPage;
