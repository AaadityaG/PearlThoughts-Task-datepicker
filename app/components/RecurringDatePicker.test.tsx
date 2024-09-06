// components/RecurringDatePicker.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecurringDatePicker from './MyDatePicker';


describe('RecurringDatePicker Component', () => {
    // Test to check if the component renders
    test('renders start and end date pickers', () => {
        render(<RecurringDatePicker />);

        // Check if the start date picker is in the document
        expect(screen.getByLabelText(/Select Start Date:/i)).toBeInTheDocument();
        
        // Check if the end date picker is in the document
        expect(screen.getByLabelText(/Select End Date:/i)).toBeInTheDocument();
    });

    // Test to check if the recurrence select options are rendered
    test('renders recurrence select options', () => {
        render(<RecurringDatePicker />);

        // Check if the recurrence select dropdown is in the document
        expect(screen.getByRole('combobox')).toBeInTheDocument();

        // Check if each option is in the document
        expect(screen.getByText('None')).toBeInTheDocument();
        expect(screen.getByText('Daily')).toBeInTheDocument();
        expect(screen.getByText('Weekly')).toBeInTheDocument();
        expect(screen.getByText('Monthly')).toBeInTheDocument();
        expect(screen.getByText('Yearly')).toBeInTheDocument();
    });

    // Test to check if selecting an option changes the recurrence
    test('changes recurrence value when option is selected', () => {
        const setRecurrence = jest.fn();
        jest.mock('../store/store', () => ({
            useStore: jest.fn(() => ({
                recurrence: 'none',
                setRecurrence,
            })),
        }));

        render(<RecurringDatePicker />);

        // Simulate changing the recurrence value to "daily"
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: 'daily' },
        });

        // Check if the setRecurrence function was called with "daily"
        expect(setRecurrence).toHaveBeenCalledWith('daily');
    });
});
