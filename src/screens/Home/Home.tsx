import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Home.style';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DETAILS } from '../../Navigator/Routes';
import { NavigationProps } from '../../types/navigation';
import Search from '../../components/Search/Index';
import useLocation from './hooks/LocationHook';


const Home: React.FC = () => {
    const { navigate} = useNavigation<NavigationProps>();
    const { findCity, listLocation } = useLocation();

    console.log('listLocation', listLocation)
    return (
        <View style={styles.container}>
            <Search  onchange={findCity} />
            {/* <Tou chableOpacity onPress={() => navigate(DETAILS)}>
                <Text style={styles.title}>Welcome to the Weather App</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default Home;