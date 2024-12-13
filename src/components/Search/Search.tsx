import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './Search.style';
import { debounce } from 'lodash';


interface SearchProps {
    onchange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onchange }) => {
    const handleInputChange = debounce((text: string) => {
        onchange(text);
    }, 300);
    
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleInputChange}
                placeholder="Search"
            />
        </View>
    );
};



export default Search;