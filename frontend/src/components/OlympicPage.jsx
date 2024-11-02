import React, { useRef } from 'react';
import { Images } from '../Images/Images';
import { motion, useInView } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

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

const OlympicPage = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 via-green-500 to-blue-400 min-h-screen text-white p-6 space-y-12 overflow-hidden">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.olympic_flag}
                        alt="Olympic Rings"
                        className="w-1/3 h-1/3 object-contain animate-spin-slow"
                        initial={{ scale: 0.8, rotate: 360 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 2 }}
                    />
                    <motion.div
                        className="absolute text-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-6xl font-extrabold">Olympics</h1>
                        <p className="text-lg mt-2">A Celebration of Sports & Unity</p>
                    </motion.div>
                </div>
            </Section>

            {/* History Section */}
            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            The Ancient Olympics
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Olympic Games originated in ancient Greece around 776 BC, held in Olympia in honor of Zeus. Athletes from different Greek city-states gathered to compete in events like running, wrestling, and chariot racing. It became a symbol of peace, unity, and sportsmanship.
                        </p>
                    </motion.div>
                    <motion.img
                        src={Images.old_olympic}
                        alt="Ancient Olympia"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>

            {/* Values Section */}
            <Section delay={1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-[#47B884] mb-4">
                            Excellence
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Striving for one's best performance is a core value of the Olympics. Athletes give their best to push the boundaries of human potential.
                        </p>
                    </motion.div>
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-[#47B884] mb-4">
                            Friendship
                        </h2>
                        <p className="text-lg leading-relaxed">
                            The Olympic Games bring athletes together from all over the world, fostering a sense of camaraderie and understanding.
                        </p>
                    </motion.div>
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold text-[#47B884] mb-4">
                            Respect
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Respect for oneself, one's competitors, and the rules of the Games is a fundamental principle of the Olympics.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Fun Facts Section */}
            <Section delay={1.5}>
                <div className="flex flex-col items-center">
                    <motion.h2
                        className="text-4xl font-semibold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Fun Facts About the Olympics
                    </motion.h2>
                    <motion.ul className="space-y-4 text-lg leading-relaxed">
                        <motion.li
                            className="hover:text-[#47B884] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            The Olympic flame is lit in Olympia, Greece, and carried to the host city.
                        </motion.li>
                        <motion.li
                            className="hover:text-[#47B884] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            The five Olympic rings represent the five continents of the world.
                        </motion.li>
                        <motion.li
                            className="hover:text-[#47B884] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            The first modern Olympics were held in Athens in 1896.
                        </motion.li>
                        <motion.li
                            className="hover:text-[#47B884] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            The Summer and Winter Olympics are held every four years.
                        </motion.li>
                    </motion.ul>
                </div>
            </Section>

            {/* Closing Section */}
            <Section delay={2}>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.closing}
                        alt="Olympics Closing Ceremony"
                        className="w-full h-72 object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.div
                        className="absolute text-center p-4 bg-white text-gray-900 bg-opacity-75 rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        <h2 className="text-4xl font-semibold">A Global Celebration</h2>
                        <p className="text-lg mt-2">
                            The Olympics continue to inspire and unite people from all around the world, celebrating the spirit of competition, friendship, and excellence.
                        </p>
                    </motion.div>
                </div>
            </Section>
            <ScrollRestoration/>
        </div>
    );
};

export default OlympicPage;
