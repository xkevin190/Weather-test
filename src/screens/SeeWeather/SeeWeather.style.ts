import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    picker: {
      marginBottom: 15,
    },
    loading: {
      marginTop: 15,
    },
    weatherContainer: {
      
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#87CEEB',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    icon: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    temperature: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#fff',
    },
    city: {
      fontSize: 20,
      fontWeight: '600',
      color: '#fff',
    },
    condition: {
      fontSize: 16,
      color: '#fff',
    },
    provider: {
        fontSize: 14,
        marginTop: 10,
        color: '#fff',
        fontStyle: 'italic',
      },
  });
  