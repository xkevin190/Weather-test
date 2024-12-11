import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './SeeWeather.style';
import { useNavigation } from '@react-navigation/native';

const SeeWeather = () => {
    const { goBack} = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}>
                <Text style={styles.text}>See Weather Screen</Text>
            </TouchableOpacity>
        </View>
    );
};



export default SeeWeather;