import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './SeeWeather.style';
import { useNavigation } from '@react-navigation/native';
import useWeather from './hook/useWeather';

const SeeWeather = () => {
    useWeather()

    return (
        <View style={styles.weatherContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/partly-cloudy-day--v1.png',
              }}
            />
            <Text style={styles.temperature}>{Math.round(weather.temperature)}°C</Text>
          </View>
          <Text style={styles.city}>{weather.city}, {weather.country}</Text>
          <Text style={styles.condition}>{weather.condition}</Text>
          <Text style={styles.provider}>Provider: {weather.provider}</Text>
        </View>
    );
};
const weather = {
    city: 'San Francisco',
    country: 'USA',
    temperature: 20,
    condition: 'Sunny',
    provider: 'Weatherstack'
};



export default SeeWeather;