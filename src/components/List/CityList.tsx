import React, { useCallback } from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { styles } from './CityList.style';
import { Location } from '../../types/Location';
import { ILocation } from '../../store/weather/initialState';


type CityListProps = {
  listLocation: Array<ILocation>;
  onSelect: (city: Location) => void;
};

type CityItemProps = {
  location: Location;
  onSelect: (city: Location) => void;
};

// Componente para renderizar cada ítem
const CityItem: React.FC<CityItemProps> = React.memo(({ location, onSelect }) => {

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.cityText}>{location.city}</Text>
        <Text style={styles.countryText}>{location.country}</Text>
      </View>
      <Button title="Select" onPress={() => onSelect(location)} />
    </View>
  );
});

export const CityList: React.FC<CityListProps> = ({ listLocation, onSelect }) => {
  const keyExtractor = useCallback((item: Location) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }: { item: Location }) => <CityItem location={item} onSelect={onSelect} />,
    [onSelect]
  );

  return (
    <FlatList
      data={listLocation}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default CityList;