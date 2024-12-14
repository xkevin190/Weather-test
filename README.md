# Weather App Project Documentation

## Overview
The Weather App is a React Native application developed as a practice project to integrate and utilize weather services, specifically focusing on testing the weather of a city. The app was built with a focus on implementing a Flux architecture, demonstrating state management and API integration in a mobile environment.

## Main Technology
- **React Native**: The primary framework used for developing the mobile application.

## Weather Providers
The application integrates with the following weather APIs to fetch and display weather data:
1. **VisualCrossingWeather**
2. **WeatherApi**

## Architecture
The app was developed using a **Flux architecture**, which organizes the application’s state and data flow in a unidirectional manner, ensuring predictable updates and efficient data management.

## External Libraries
The following libraries were utilized to enhance the application’s functionality:

### Picker
- **Library**: `react-native-picker/picker`
- **Purpose**: To implement dropdown menus for selecting options such as location or weather data filters.

### Navigation
- **Library**: `react-navigation/native`
- **Purpose**: To enable smooth navigation between different screens of the application.

### State Management
- **Library**: `reduxjs/toolkit`
- **Purpose**: To manage the global state of the application effectively and simplify complex state interactions.

## Testing
Unit testing was implemented to ensure code quality and functionality. The following libraries were used for testing:

1. **Testing React Hooks**:
   - **Library**: `testing-library/react-hooks`
   - **Purpose**: To test the functionality of custom React hooks used in the application.

2. **Testing React Native Components**:
   - **Library**: `testing-library/react-native`
   - **Purpose**: To test the UI components and ensure they behave as expected.

## Summary
The Weather App project serves as a practical demonstration of integrating weather services into a React Native application while implementing a Flux architecture. It incorporates modern libraries for navigation, state management, and testing, showcasing best practices in mobile app development.

- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
