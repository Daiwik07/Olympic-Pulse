import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = [
        { name: 'July', days: 31 },
        { name: 'August', days: 31 },
        { name: 'September', days: 30 },
    ];

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [events, setEvents] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);

    const currentMonth = monthsOfYear[currentMonthIndex];
    const firstDayOfMonth = new Date(2024, currentMonthIndex, 1).getDay();

    // Olympic and Paralympic events (simplified for example)
    const olympicEvents = [
        { day: 26, event: 'Olympic Opening Ceremony', month: 'July' },
        { day: 27, event: 'Swimming', month: 'July' },
        { day: 27, event: 'Artistic Gymnastics', month: 'July' },
        { day: 27, event: 'Cycling', month: 'July' },
        { day: 28, event: 'Swimming', month: 'July' },
        { day: 28, event: 'Artistic Gymnastics', month: 'July' },
        { day: 28, event: 'Basketball', month: 'July' },
        { day: 29, event: 'Swimming', month: 'July' },
        { day: 29, event: 'Fencing', month: 'July' },
        { day: 29, event: 'Cycling', month: 'July' },
        { day: 30, event: 'Swimming', month: 'July' },
        { day: 30, event: 'Tennis', month: 'July' },
        { day: 30, event: 'Rugby Sevens', month: 'July' },
        { day: 31, event: 'Swimming', month: 'July' },
        { day: 31, event: 'Athletics', month: 'July' },
        { day: 31, event: 'Fencing', month: 'July' },
        { day: 1, event: 'Athletics', month: 'August' },
        { day: 1, event: 'Swimming', month: 'August' },
        { day: 1, event: 'Badminton', month: 'August' },
        { day: 2, event: 'Athletics', month: 'August' },
        { day: 2, event: 'Cycling', month: 'August' },
        { day: 2, event: 'Archery', month: 'August' },
        { day: 3, event: 'Athletics', month: 'August' },
        { day: 3, event: 'Swimming', month: 'August' },
        { day: 3, event: 'Basketball', month: 'August' },
        { day: 4, event: 'Athletics', month: 'August' },
        { day: 4, event: 'Swimming', month: 'August' },
        { day: 4, event: 'Tennis', month: 'August' },
        { day: 5, event: 'Athletics', month: 'August' },
        { day: 5, event: 'Rhythmic Gymnastics', month: 'August' },
        { day: 6, event: 'Athletics', month: 'August' },
        { day: 6, event: 'Boxing', month: 'August' },
        { day: 6, event: 'Cycling', month: 'August' },
        { day: 7, event: 'Athletics', month: 'August' },
        { day: 7, event: 'Fencing', month: 'August' },
        { day: 7, event: 'Rowing', month: 'August' },
        { day: 8, event: 'Athletics', month: 'August' },
        { day: 8, event: 'Triathlon', month: 'August' },
        { day: 9, event: 'Athletics', month: 'August' },
        { day: 9, event: 'Basketball', month: 'August' },
        { day: 10, event: 'Athletics', month: 'August' },
        { day: 10, event: 'Marathon', month: 'August' },
        { day: 11, event: 'Athletics', month: 'August' },
        { day: 11, event: 'Closing Ceremony', month: 'August' },
        { day: 28, event: 'Paralympic Opening Ceremony', month: 'August' }, { day: 28, event: 'Paralympic Opening Ceremony', month: 'August' },
        { day: 29, event: 'Para Swimming', month: 'August' },
        { day: 29, event: 'Para Taekwondo', month: 'August' },
        { day: 29, event: 'Para Cycling', month: 'August' },
        { day: 29, event: 'Wheelchair Rugby', month: 'August' },
        { day: 29, event: 'Para Archery', month: 'August' },
        { day: 30, event: 'Para Athletics', month: 'August' },
        { day: 30, event: 'Wheelchair Basketball', month: 'August' },
        { day: 30, event: 'Blind Football', month: 'August' },
        { day: 30, event: 'Wheelchair Tennis', month: 'August' },
        { day: 31, event: 'Boccia', month: 'August' },
        { day: 31, event: 'Goalball', month: 'August' },
        { day: 31, event: 'Para Equestrian', month: 'August' },
        { day: 1, event: 'Para Triathlon', month: 'September' },
        { day: 2, event: 'Para Rowing', month: 'September' },
        { day: 2, event: 'Para Canoe', month: 'September' },
        { day: 3, event: 'Sitting Volleyball', month: 'September' },
        { day: 4, event: 'Wheelchair Fencing', month: 'September' },
        { day: 5, event: 'Para Badminton', month: 'September' },
        { day: 6, event: 'Para Shooting', month: 'September' },
        { day: 7, event: 'Para Judo', month: 'September' },
        { day: 8, event: 'Marathon T12 and T54', month: 'September' },
        { day: 8, event: 'Para Table Tennis', month: 'September' },
        { day: 8, event: 'Para Basketball', month: 'September' },
        { day: 8, event: 'Para Wrestling', month: 'September' },
        { day: 9, event: 'Paralympic Closing Ceremony', month: 'September' },



    ];


    useEffect(() => {
        // Prepopulate the calendar with Olympic and Paralympic events
        setEvents(olympicEvents);
    }, []);

    const handlePrevMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex(currentMonthIndex - 1);
            setSelectedDay(null);
        }
    };

    const handleNextMonth = () => {
        if (currentMonthIndex < monthsOfYear.length - 1) {
            setCurrentMonthIndex(currentMonthIndex + 1);
            setSelectedDay(null);
        }
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };


    const eventsForDay = events.filter(
        (event) => event.month === currentMonth.name && event.day === selectedDay
    );

    return (
        <div className="flex">
            <div className="w-3/4 p-4">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={handlePrevMonth}
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                        disabled={currentMonthIndex === 0}
                    >
                        Previous
                    </button>
                    <h2 className="text-xl font-bold">{currentMonth.name} 2024</h2>
                    <button
                        onClick={handleNextMonth}
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                        disabled={currentMonthIndex === monthsOfYear.length - 1}
                    >
                        Next
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-4 text-center font-semibold">
                    {daysOfWeek.map((day, index) => (
                        <div key={index}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-4 mt-4">
                    {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                        <div key={index}></div>
                    ))}

                    {Array.from({ length: currentMonth.days }, (_, day) => {
                        const dayNumber = day + 1;
                        const dayEvents = events.filter(
                            (event) =>
                                event.month === currentMonth.name && event.day === dayNumber
                        );

                        return (
                            <div
                                key={dayNumber}
                                className={`relative h-24 flex items-center justify-center border border-gray-300 hover:bg-gray-100 cursor-pointer ${selectedDay === dayNumber ? 'bg-blue-100' : ''
                                    }`}
                                onClick={() => handleDayClick(dayNumber)}
                            >
                                {dayNumber}
                                {dayEvents.length > 0 && (
                                    <div className="absolute bottom-2 right-2 flex space-x-1">
                                        {Array.from({ length: dayEvents.length }).map((_, i) => (
                                            <span
                                                key={i}
                                                className="w-2 h-2 bg-red-500 rounded-full"
                                            ></span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-1/4 border-l-2 border-gray-300 p-4">
                <h2 className="text-xl font-bold mb-4">Events</h2>
                <div className="overflow-y-auto h-96">
                    {selectedDay && (
                        <>
                            {eventsForDay.length > 0 ? (
                                eventsForDay.map((event, index) => (
                                    <div key={index} className="mb-2 p-2 bg-blue-100 border rounded">
                                        <p className="font-semibold">
                                            {currentMonth.name} {event.day}
                                        </p>
                                        <p>{event.event}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No events for this day</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
