// // __tests__/RecurrenceSelector.test.tsx
// import { render, fireEvent } from '@testing-library/react';
// import RecurrenceSelector from '../components/RecurrenceSelector';
// import { useDatePickerStore } from '../store/useDatePickerStore';

// jest.mock('../store/useDatePickerStore');

// test('changes recurrence option on button click', () => {
//   const mockSetRecurrence = jest.fn();
//   (useDatePickerStore as jest.Mock).mockReturnValue({
//     recurrence: 'Daily',
//     setRecurrence: mockSetRecurrence,
//   });

//   const { getByText } = render(<RecurrenceSelector />);
//   fireEvent.click(getByText('Weekly'));

//   expect(mockSetRecurrence).toHaveBeenCalledWith('Weekly');
// });
