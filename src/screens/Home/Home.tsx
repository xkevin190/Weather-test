import React from 'react';
import { View } from 'react-native';
import { styles } from './Home.style';
import Search from '../../components/Search/Index';
import useLocation from './hooks/LocationHook';
import CityList from '../../components/List';



const Home: React.FC = () => {
    const { findCity, listLocation, handleSelect } = useLocation();

    return (
        <View style={styles.container}>
            <Search  onchange={findCity} />
            <CityList listLocation={listLocation}  onSelect={handleSelect}/>
            
        </View>
    );
};

export default Home;