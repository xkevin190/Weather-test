import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Home.style';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DETAILS } from '../../Navigator/Routes';
import { NavigationProps } from '../../types/navigation';


const Home: React.FC = () => {
    const { navigate} = useNavigation<NavigationProps>();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate(DETAILS)}>
                <Text style={styles.title}>Welcome to the Weather App</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;