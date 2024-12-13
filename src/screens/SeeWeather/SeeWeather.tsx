import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './SeeWeather.style';
import {Picker} from '@react-native-picker/picker';


import useWeather from './hook/useWeather';
import { WeatherProvider } from '../../services/WeatherService';



const SeeWeather = () => {
    const {weather, location , changeProvider} = useWeather()
    const [selectedProvider, setSelectedProvider] = useState(weather.provider);

    

    return (
      <View style={[styles.weatherContainer, {backgroundColor: weather.ProviderColor}]}>
       {weather.loading && <View style={styles.loadingContainer}>
          <ActivityIndicator size="large"  />
          <Text style={styles.loadingText}>Loading weather data...</Text>
        </View>}
      
      <View style={styles.headerContainer}>
        <Text style={styles.temperature}>{weather.currentTemperature}°C</Text>
      </View>
      
      <Text style={styles.city}>{location?.city}, {location?.country}</Text>
      <Text style={styles.condition}>{weather.currentWeather}</Text>

      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>High: {weather.todayMaxTemperature}°C</Text>
        <Text style={styles.detailText}>Low: {weather.todayMinTemperature}°C</Text>
        <Text style={styles.detailText}>Sunrise: {weather.sunriseTime}</Text>
        <Text style={styles.detailText}>Sunset: {weather.sunsetTime}</Text>
      </View>


      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Change Provider:</Text>
        <Picker
          selectedValue={weather.provider}
          onValueChange={(itemValue) => changeProvider(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Weather API" value={WeatherProvider.WeatherApi} />
          <Picker.Item label="Visual Crossing" value={WeatherProvider.VisualCrossing} />
        </Picker>
      </View>

    
      <Text style={styles.provider}>Provider: {weather.provider}</Text>
    </View>
    );
};




export default SeeWeather;