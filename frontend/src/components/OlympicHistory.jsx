import React from 'react';
import { motion } from 'framer-motion';

const OlympicHistory = () => {
    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img
                src='https://assets.editorial.aetnd.com/uploads/2010/01/gettyimages-466313493-2.jpg'
                alt="Olympic Games"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            />

            <div className="relative z-10">
                <header className="text-center mb-8">
                    <motion.h1
                        className="text-5xl font-bold text-[#47B884] leading-tight"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        The Epic Journey of the Olympics
                    </motion.h1>
                    <motion.p
                        className="text-xl text-[#47B884] mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Journey through the rich history of the Olympic Games, from their ancient beginnings to the global spectacle they are today.
                    </motion.p>
                </header>

                <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-semibold text-[#47B884] mb-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Ancient Olympics
                    </motion.h2>
                    <motion.p
                        className="text-gray-800 leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        The Olympic Games began in 776 BC in ancient Greece at Olympia. These games were held in honor of Zeus, the chief Greek god. Competitions included events like running, wrestling, and chariot racing. They were not only a major athletic event but also a significant religious and cultural festival, symbolizing unity among Greek city-states.
                    </motion.p>
                    <motion.p
                        className="text-gray-800 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        The games continued for nearly 12 centuries until they were abolished in 393 AD by Roman Emperor Theodosius I. Despite their end, the Olympic spirit lived on in various forms across different cultures.
                    </motion.p>

                    <motion.h2
                        className="text-4xl font-semibold text-[#47B884] mb-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Modern Olympics
                    </motion.h2>
                    <motion.p
                        className="text-gray-800 leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        The modern Olympic Games were revived in 1896 by Pierre de Coubertin. The first modern Games took place in Athens, Greece, and saw 13 nations competing in 43 events. Over the years, the Olympics have expanded to include a vast array of sports and athletes from all corners of the globe.
                    </motion.p>
                    <motion.p
                        className="text-gray-800 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        The Winter Olympics were introduced in 1924, and the Games have continued to evolve, facing challenges such as world wars and political boycotts while promoting unity and excellence.
                    </motion.p>

                    <motion.h2
                        className="text-4xl font-semibold text-[#47B884] mb-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 3 }}
                    >
                        Recent Developments
                    </motion.h2>
                    <motion.p
                        className="text-gray-800 leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.5 }}
                    >
                        Recent years have seen significant changes, including the addition of new sports, the introduction of the Paralympics, and an increased focus on sustainability and social issues. The Olympics now reflect contemporary values while continuing to celebrate the spirit of competition.
                    </motion.p>
                    <motion.p
                        className="text-gray-800 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 4 }}
                    >
                        Today, the Olympics remain a symbol of global unity, inspiring millions around the world with the ideals of sportsmanship and international cooperation.
                    </motion.p>
                </section>
            </div>
        </motion.div>
    );
};

export default OlympicHistory;
