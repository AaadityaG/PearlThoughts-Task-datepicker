// components/RecurringDatePicker.tsx
"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useStore } from '../store/store';
import MiniCalendar from '../components/MiniCalender';

const RecurringDatePicker: React.FC = () => {
    const { recurrence, setRecurrence } = useStore();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleRecurrenceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRecurrence(e.target.value);
    };

    return (
        <div className="flex items-center justify-center gap-14">
            <div className='flex flex-col space-y-4 justify-center items-start'>
            <label>Select Start Date:</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} className='w-full text-black p-3 px-6 rounded' />

            <label>Select End Date:</label>
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} className='w-full text-black p-3 px-6 rounded' />

            <label>Recurrence:</label>
            <select onChange={handleRecurrenceChange} className='text-black p-3 px-6 rounded' >
                <option value="none">None</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
            </div>

            <div>
                <h3>Selected Dates:</h3>
                <MiniCalendar startDate={startDate} endDate={endDate} recurrence={recurrence} />
            </div>
        </div>
    );
};

export default RecurringDatePicker;