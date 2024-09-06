import React, { useState } from 'react';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';


interface MiniCalendarProps {
    startDate: Date | null;
    endDate: Date | null;
    recurrence: string;
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ startDate, endDate, recurrence }) => {
    const [currentDate, setCurrentDate] = useState<Date>(startDate ? new Date(startDate) : new Date());

    const generateDates = () => {
        if (!startDate) return [];
        
        const dates = [];
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date(startDate);
        let currentDate = new Date(start);

        while (currentDate <= end) {
            dates.push(new Date(currentDate));
            switch (recurrence) {
                case 'daily':
                    currentDate.setDate(currentDate.getDate() + 1);
                    break;
                case 'weekly':
                    currentDate.setDate(currentDate.getDate() + 7);
                    break;
                case 'monthly':
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    break;
                case 'yearly':
                    currentDate.setFullYear(currentDate.getFullYear() + 1);
                    break;
                default:
                    return dates;
            }
        }
        return dates;
    };

    const highlightedDates = generateDates();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const getDayCount = () => {
        const start = new Date(startDate!);
        const end = endDate ? new Date(endDate) : new Date(startDate!);
        const dayCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
        return dayCount;
    };

    const getYearCount = () => {
        const start = new Date(startDate!);
        const end = endDate ? new Date(endDate) : new Date(startDate!);
        const yearCount = end.getFullYear() - start.getFullYear();
        return yearCount;
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <button onClick={handlePrevMonth}><CircleChevronLeft className='text-gray-700 hover:text-white' /></button>
                <div className='font-bold text-2xl'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                <button onClick={handleNextMonth}><CircleChevronRight className='text-gray-700 hover:text-white' /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 p-2 border border-gray-300 rounded-md">
                {Array.from({ length: 42 }, (_, index) => {
                    const date = new Date(currentDate);
                    date.setDate(date.getDate() - date.getDay() + index);
                    const isHighlighted = highlightedDates.some(d => d.toDateString() === date.toDateString());

                    return (
                        <div
                            key={index}
                            className={`w-10 h-10 flex items-center justify-center ${isHighlighted ? 'bg-blue-500 rounded text-white' : 'text-gray-700'}`}
                        >
                            {date.getDate()}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between">
                <div>
                    {recurrence === 'daily' && `${Math.floor(getDayCount())} days`}
                    {recurrence === 'weekly' && `${Math.floor(getDayCount() / 7)} weeks`}
                    {recurrence === 'monthly' && `${Math.floor(getDayCount() / 30)} months`}
                    {recurrence === 'yearly' && `${Math.floor(getYearCount())} years`}
                </div>
                <div>
                    {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default MiniCalendar;