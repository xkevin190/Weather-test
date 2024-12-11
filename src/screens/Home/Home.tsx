import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Weather App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Home;