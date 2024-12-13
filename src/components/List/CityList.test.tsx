import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CityList } from './CityList'; // Update with the correct path
import { ILocation } from '../../store/location/initialState';
import { Location } from '../../types/Location';

describe('CityList Component', () => {
  const mockOnSelect = jest.fn();

  const mockLocations: ILocation[] = [
    { id: 1, city: 'New York', country: 'USA' },
    { id: 2, city: 'Los Angeles', country: 'USA' },
    { id: 3, city: 'London', country: 'UK' },
  ];
  

  it('renders the list of locations', () => {
    const { getByText, debug } = render(
      <CityList listLocation={mockLocations} onSelect={mockOnSelect} />
    );


    // Check if all locations are rendered
    expect(getByText('New York')).toBeTruthy();
    expect(getByText('Los Angeles')).toBeTruthy();
    expect(getByText('London')).toBeTruthy();
  });

  it('calls onSelect when a city is selected', () => {
    const { getAllByText } = render(
      <CityList listLocation={mockLocations} onSelect={mockOnSelect} />
    );

    const button = getAllByText('Select')
    // Trigger the "Select" button for New York
    fireEvent.press(button[0]);

    // Check if onSelect was called with the correct location
    expect(mockOnSelect).toHaveBeenCalledWith({ city: 'New York', country: 'USA', id: 1 });
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
