import React from 'react';

// Mock data
const medalistData = [
    { "country": "USA", "gold": 40, "silver": 44, "bronze": 42 },
    { "country": "China", "gold": 40, "silver": 27, "bronze": 24 },
    { "country": "Japan", "gold": 20, "silver": 12, "bronze": 13 },
    { "country": "Australia", "gold": 18, "silver": 19, "bronze": 16 },
    { "country": "France", "gold": 16, "silver": 26, "bronze": 22 },
    { "country": "Netherlands", "gold": 15, "silver": 7, "bronze": 12 },
    { "country": "Great Britain", "gold": 14, "silver": 22, "bronze": 29 },
    { "country": "South Korea", "gold": 13, "silver": 9, "bronze": 10 },
    { "country": "Italy", "gold": 12, "silver": 13, "bronze": 15 },
    { "country": "Germany", "gold": 12, "silver": 13, "bronze": 8 },
    { "country": "New Zealand", "gold": 10, "silver": 7, "bronze": 3 },
    { "country": "Canada", "gold": 9, "silver": 7, "bronze": 11 },
    { "country": "Uzbekistan", "gold": 8, "silver": 2, "bronze": 3 },
    { "country": "Hungary", "gold": 6, "silver": 7, "bronze": 6 },
    { "country": "Spain", "gold": 5, "silver": 4, "bronze": 9 },
    { "country": "Sweden", "gold": 4, "silver": 4, "bronze": 3 },
    { "country": "Kenya", "gold": 4, "silver": 2, "bronze": 5 },
    { "country": "Norway", "gold": 4, "silver": 1, "bronze": 3 },
    { "country": "Ireland", "gold": 4, "silver": 0, "bronze": 3 },
    { "country": "Brazil", "gold": 3, "silver": 7, "bronze": 10 },
    { "country": "Iran", "gold": 3, "silver": 6, "bronze": 3 },
    { "country": "Ukraine", "gold": 3, "silver": 5, "bronze": 4 },
    { "country": "Romania", "gold": 3, "silver": 4, "bronze": 2 },
    { "country": "Georgia", "gold": 3, "silver": 3, "bronze": 1 },
    { "country": "Belgium", "gold": 3, "silver": 1, "bronze": 6 },
    { "country": "Bulgaria", "gold": 3, "silver": 1, "bronze": 3 },
    { "country": "Serbia", "gold": 2, "silver": 4, "bronze": 3 },
    { "country": "Czech Republic", "gold": 2, "silver": 3, "bronze": 5 },
    { "country": "Denmark", "gold": 2, "silver": 3, "bronze": 2 },
    { "country": "Jamaica", "gold": 2, "silver": 2, "bronze": 4 },
    { "country": "Mexico", "gold": 2, "silver": 2, "bronze": 3 },
    { "country": "Poland", "gold": 2, "silver": 2, "bronze": 2 },
    { "country": "Turkey", "gold": 2, "silver": 1, "bronze": 4 },
    { "country": "Israel", "gold": 2, "silver": 1, "bronze": 2 },
    { "country": "Croatia", "gold": 2, "silver": 0, "bronze": 3 },
    { "country": "Taiwan", "gold": 2, "silver": 0, "bronze": 3 },
    { "country": "Slovakia", "gold": 2, "silver": 0, "bronze": 2 },
    { "country": "South Africa", "gold": 2, "silver": 0, "bronze": 1 },
    { "country": "Austria", "gold": 1, "silver": 2, "bronze": 4 },
    { "country": "Kazakhstan", "gold": 1, "silver": 2, "bronze": 3 },
    { "country": "Thailand", "gold": 1, "silver": 2, "bronze": 1 },
    { "country": "Indonesia", "gold": 1, "silver": 2, "bronze": 0 },
    { "country": "Philippines", "gold": 1, "silver": 1, "bronze": 4 },
    { "country": "Switzerland", "gold": 1, "silver": 1, "bronze": 3 },
    { "country": "Lithuania", "gold": 1, "silver": 1, "bronze": 2 },
    { "country": "Armenia", "gold": 1, "silver": 1, "bronze": 1 },
    { "country": "Venezuela", "gold": 1, "silver": 1, "bronze": 1 },
    { "country": "Ethiopia", "gold": 1, "silver": 1, "bronze": 1 },
    { "country": "Greece", "gold": 1, "silver": 1, "bronze": 0 },
    { "country": "Portugal", "gold": 1, "silver": 0, "bronze": 1 },
    { "country": "Qatar", "gold": 1, "silver": 0, "bronze": 1 },
    { "country": "Tunisia", "gold": 1, "silver": 0, "bronze": 1 },
    { "country": "Estonia", "gold": 1, "silver": 0, "bronze": 0 },
    { "country": "Morocco", "gold": 1, "silver": 0, "bronze": 0 },
    { "country": "Mongolia", "gold": 1, "silver": 0, "bronze": 0 },
    { "country": "Algeria", "gold": 0, "silver": 2, "bronze": 3 },
    { "country": "Malaysia", "gold": 0, "silver": 2, "bronze": 2 },
    { "country": "Finland", "gold": 0, "silver": 2, "bronze": 1 },
    { "country": "Colombia", "gold": 0, "silver": 2, "bronze": 1 },
    { "country": "Slovenia", "gold": 0, "silver": 1, "bronze": 3 },
    { "country": "India", "gold": 0, "silver": 1, "bronze": 3 },
    { "country": "Azerbaijan", "gold": 0, "silver": 1, "bronze": 2 },
    { "country": "Egypt", "gold": 0, "silver": 1, "bronze": 2 },
    { "country": "Latvia", "gold": 0, "silver": 1, "bronze": 2 },
    { "country": "Saudi Arabia", "gold": 0, "silver": 1, "bronze": 1 },
    { "country": "Kyrgyzstan", "gold": 0, "silver": 1, "bronze": 1 },
    { "country": "Sri Lanka", "gold": 0, "silver": 1, "bronze": 0 },
    { "country": "Botswana", "gold": 0, "silver": 1, "bronze": 0 },
    { "country": "Iceland", "gold": 0, "silver": 1, "bronze": 0 },
    { "country": "United Arab Emirates", "gold": 0, "silver": 1, "bronze": 0 },
    { "country": "Uganda", "gold": 0, "silver": 1, "bronze": 0 },
    { "country": "Burkina Faso", "gold": 0, "silver": 0, "bronze": 2 },
    { "country": "Fiji", "gold": 0, "silver": 0, "bronze": 2 },
    { "country": "Ivory Coast", "gold": 0, "silver": 0, "bronze": 2 },
    { "country": "Gabon", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Kuwait", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Jordan", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "North Macedonia", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Namibia", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Syria", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Tajikistan", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Turkmenistan", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Vietnam", "gold": 0, "silver": 0, "bronze": 1 },
    { "country": "Zambia", "gold": 0, "silver": 0, "bronze": 1 }
];

const MedalistPage = () => {
    // Calculate total number of medalist countries
    const totalCountries = medalistData.length;

    return (
        <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#47B884]">
                Medalist Countries
            </h1>
            <p className="text-center text-lg mb-6">
                Total number of medalist countries: <span className="font-bold">{totalCountries}</span>
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 text-left text-gray-500">Country</th>
                            <th className="py-3 px-6 text-center text-gray-500">Gold</th>
                            <th className="py-3 px-6 text-center text-gray-500">Silver</th>
                            <th className="py-3 px-6 text-center text-gray-500">Bronze</th>
                            <th className="py-3 px-6 text-center text-gray-500">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {medalistData.map((data, index) => {
                            const totalMedals = data.gold + data.silver + data.bronze;

                            return (
                                <tr key={index}>
                                    {/* Hover effect on each column */}
                                    <td className="py-4 px-6 text-gray-900 hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                                        {data.country}
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-900 hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                                        {data.gold}
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-900 hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                                        {data.silver}
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-900 hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                                        {data.bronze}
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-900 hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                                        {totalMedals}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedalistPage;
