import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer: {
      padding: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      elevation: 1,
    },
    textContainer: {
      flex: 1,
      marginRight: 10,
    },
    cityText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    countryText: {
      fontSize: 14,
      color: '#666',
    },
  });