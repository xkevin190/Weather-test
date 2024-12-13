import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Search from './Search';

jest.useFakeTimers(); // Use fake timers to control debounce timing

describe('<Search />', () => {
    const mockOnChange = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the search input field', () => {
        const { getByPlaceholderText } = render(<Search onchange={mockOnChange} />);
        const input = getByPlaceholderText('Search');
        expect(input).toBeTruthy();
    });

    it('should call onchange with the correct value after debounce', async () => {
        const { getByPlaceholderText } = render(<Search onchange={mockOnChange} />);
        const input = getByPlaceholderText('Search');

        // Simulate typing
        fireEvent.changeText(input, 'hello');
        fireEvent.changeText(input, 'world');

        // Fast-forward until all timers have been executed
        jest.runAllTimers();

        await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(2));
        expect(mockOnChange).toHaveBeenCalledWith('world');
    });

    
});