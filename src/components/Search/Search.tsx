import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './Search.style';
import { debounce } from 'lodash';


interface SearchProps {
    onchange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onchange }) => {
    const [value, setValue] = React.useState('');

    const onChange = (text: string) => {
        const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '');
        setValue(cleanedText);
        handleInputChange(cleanedText);
    };

    const handleInputChange = debounce((text: string) => {
        onchange(text);
    }, 300);
    
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Search"
            />
        </View>
    );
};



export default Search;