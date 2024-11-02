import React from 'react';
import { Images } from '../Images/Images';
import { Link } from 'react-router-dom';

const athletes = [
    {
        name: 'Neeraj Chopra',
        sport: 'Javelin Throw',
        medal: 'Gold',
        imgUrl: Images.neeraj,
        profileLink: '/neeraj', 
    },
    {
        name: 'Harmanpreet Singh (Captain)',
        sport: 'Hockey',
        medal: 'Bronze',
        imgUrl: Images.harmanpreet,
        profileLink: '/harmanpreet', 
    },
    {
        name: 'Swapnil KUSALE',
        sport: '50m Rifle 3 Positions Men',
        medal: 'Bronze',
        imgUrl: Images.swapnil, 
        profileLink: '/swapnil', 
    },
    {
        name: 'Manu BHAKER',
        sport: '10m Air Pistol Women',
        medal: 'Bronze',
        imgUrl: Images.manu, 
        profileLink: '/manu', 
    },
    {
        name: 'Esha Singh (Captain)',
        sport: '10m Air Pistol Mixed Team',
        medal: 'Bronze',
        imgUrl: Images.esha, 
        profileLink: '/esha', 
    },
    {
        name: 'Aman AMAN',
        sport: 'Men\'s Freestyle 57kg',
        medal: 'Bronze',
        imgUrl: Images.aman, 
        profileLink: '/aman', 
    },
];

const AthleteCard = ({ athlete }) => {
    return (
        <div className="group relative w-96 h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            
            <img
                src={athlete.imgUrl}
                alt={athlete.name}
                className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-20"
            />

            
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#47B884] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h3 className="text-2xl font-bold">{athlete.name}</h3>
                <p className="text-lg mt-2">{athlete.sport}</p>
                <p className="text-xl mt-4 font-semibold">{athlete.medal} Medal</p>
                <Link
                    to={athlete.profileLink}
                    className="mt-6 text-white bg-black px-4 py-2 rounded-full transition-transform transform hover:scale-110"
                >
                    Learn More
                </Link>
            </div>

            
            <div className="absolute bottom-0 w-full p-4 bg-white text-gray-900 text-center font-bold text-lg">
                {athlete.name}
            </div>
        </div>
    );
};

const IndianMedalWinningAthletes = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-[#47B884] to-teal-500 p-10">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-white">Indian Medal-Winning Athletes</h1>
                <p className="text-lg text-white mt-4">Celebrating the champions of India</p>
            </header>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {athletes.map((athlete, index) => (
                    <AthleteCard key={index} athlete={athlete} />
                ))}
            </div>
            </div>
    );
};

export default IndianMedalWinningAthletes;
