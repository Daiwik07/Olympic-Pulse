import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OlympicHistory = () => {
    // Custom component for in-view animation
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

    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img
                src="https://assets.editorial.aetnd.com/uploads/2010/01/gettyimages-466313493-2.jpg"
                alt="Olympic Games"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            />

            <div className="relative z-10">
                <header className="text-center mb-8">
                    <Section>
                        <h1 className="text-5xl font-bold text-[#47B884] leading-tight">
                            The Epic Journey of the Olympics
                        </h1>
                    </Section>
                    <Section delay={0.5}>
                        <p className="text-xl text-[#47B884] mt-4">
                            Journey through the rich history of the Olympic Games, from their ancient beginnings to the global spectacle they are today.
                        </p>
                    </Section>
                </header>

                <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    {/* Section 1: Ancient Olympics */}
                    <Section>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">Ancient Olympics</h2>
                    </Section>
                    <Section delay={0.5}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            The Olympic Games began in 776 BC in ancient Greece at Olympia. These games were held in honor of Zeus, the chief Greek god. Competitions included events like running, wrestling, and chariot racing. They were not only a major athletic event but also a significant religious and cultural festival, symbolizing unity among Greek city-states.
                        </p>
                    </Section>
                    <Section delay={1}>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            The games continued for nearly 12 centuries until they were abolished in 393 AD by Roman Emperor Theodosius I. Despite their end, the Olympic spirit lived on in various forms across different cultures.
                        </p>
                    </Section>

                    {/* Section 2: Modern Olympics */}
                    <Section delay={1.5}>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">Modern Olympics</h2>
                    </Section>
                    <Section delay={2}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            The modern Olympic Games were revived in 1896 by Pierre de Coubertin. The first modern Games took place in Athens, Greece, and saw 13 nations competing in 43 events. Over the years, the Olympics have expanded to include a vast array of sports and athletes from all corners of the globe.
                        </p>
                    </Section>
                    <Section delay={2.5}>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            The Winter Olympics were introduced in 1924, and the Games have continued to evolve, facing challenges such as world wars and political boycotts while promoting unity and excellence.
                        </p>
                    </Section>

                    {/* Section 3: Recent Developments */}
                    <Section delay={3}>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">Recent Developments</h2>
                    </Section>
                    <Section delay={3.5}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            Recent years have seen significant changes, including the addition of new sports, the introduction of the Paralympics, and an increased focus on sustainability and social issues. The Olympics now reflect contemporary values while continuing to celebrate the spirit of competition.
                        </p>
                    </Section>
                    <Section delay={4}>
                        <p className="text-gray-800 leading-relaxed">
                            Today, the Olympics remain a symbol of global unity, inspiring millions around the world with the ideals of sportsmanship and international cooperation.
                        </p>
                    </Section>
                </section>
            </div>
        </motion.div>
    );
};

export default OlympicHistory;
