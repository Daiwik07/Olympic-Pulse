import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
import { Link, ScrollRestoration, useLocation } from 'react-router-dom';

const ImportanceOfOlympics = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.3 } }
    };

    // Custom hook to detect when the section is in view
    const Section = ({ children }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.3 });
        
        
        return (
            <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            >
                {children}
            </motion.section>
        );
    };
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-[#47B884] to-teal-500 text-white p-10">
            {/* Header */}
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <motion.h1 className="text-5xl font-extrabold" variants={fadeInUp}>
                    The Importance of the Olympic Games
                </motion.h1>
                <motion.p className="text-lg mt-4" variants={fadeInUp}>
                    Uniting the world through sportsmanship and excellence
                </motion.p>
            </motion.header>

            {/* Main Content */}
            <motion.main
                className="max-w-4xl mx-auto space-y-12"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Section 1: Historical Importance */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">Historical Significance</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        The Olympic Games have a rich history dating back to Ancient Greece, where they were held to honor the gods and showcase the physical prowess of the best athletes. In modern times, the Olympics have evolved into an international event that brings together athletes from all over the world, embodying the values of peace, unity, and friendly competition.
                    </p>
                </Section>

                {/* Section 2: Promoting International Unity */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">Promoting International Unity</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        The Olympic Games promote international unity and cooperation by providing a global platform where athletes of all backgrounds compete side-by-side. The Olympics serve as a reminder that despite cultural, political, and geographical differences, humanity can come together in the spirit of sportsmanship and mutual respect.
                    </p>
                </Section>

                {/* Section 3: Encouraging Physical Fitness and Excellence */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">Encouraging Physical Fitness and Excellence</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Beyond international unity, the Olympics inspire people of all ages to embrace physical fitness and excellence. Athletes train for years to reach their peak physical condition and compete on the world stage. Their stories of perseverance, hard work, and determination motivate millions to pursue their own personal goals, whether in sports or in life.
                    </p>
                </Section>

                {/* Call to Action */}
                <motion.div className="text-center" variants={fadeInUp}>
                    <Link
                        to="/olympic"
                        className="bg-white text-[#47B884] font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        Learn More About the Olympics
                    </Link>
                    
                </motion.div>
            </motion.main>
            </div>
    );
};

export default ImportanceOfOlympics;
