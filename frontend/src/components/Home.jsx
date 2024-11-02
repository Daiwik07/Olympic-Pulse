import React from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';
import OlympicHistory from './OlympicHistory';
import ImportanceOfOlympics from './ImportanceOfOlympics';
import { Images } from '../Images/Images';

// Define animation variants for professional look
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  return (
    <div>
      <Slider />
      <OlympicHistory />
    <ImportanceOfOlympics/>
      {/* About Us Section */}
      <motion.section
        className="bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-lg"
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <h4 className="text-xl font-bold text-gray-900 sm:text-4xl">Hello, I'm Daiwik!</h4>
              <p className="mt-4 text-gray-600 text-lg">
                I’m a passionate developer and the creative mind behind Olympic Pulse, a platform dedicated to celebrating the Olympic Games and their rich history. Based in Faridabad, Haryana, India, I combine my love for coding with a deep appreciation for sports to bring you a unique and engaging experience centered around the Olympics.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About My School Section */}
      <motion.section
        className="bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="mt-12 md:mt-0"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src={Images.aravali}
                alt="About My School Image"
                className="object-cover rounded-lg shadow-md h-full w-full"
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full items-end"
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl w-[80%]">About My School</h2>
              <p className="mt-4 text-gray-600 text-lg w-[80%]">
                Our first school Aravali International School, Faridabad was founded in the year 2004 by Mr. Dhan Singh Bhadana with a vision to provide quality and affordable education to students in Haryana. He inspires the team to dream big and create schools which cultivate a lifelong love for learning and desire to make a positive impact on the world.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
