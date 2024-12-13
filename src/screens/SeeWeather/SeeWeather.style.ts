import { StyleSheet } from "react-native";
import { pixelSizeHorizontal, pixelSizeVertical } from "../../utils/Responsive";

export const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    padding: pixelSizeHorizontal(20),
    borderRadius: pixelSizeHorizontal(10),
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(10),
  },
  icon: {
    width: pixelSizeHorizontal(50),
    height: pixelSizeVertical(50),
    marginRight: pixelSizeHorizontal(10),
  },
  temperature: {
    fontSize: pixelSizeHorizontal(48),
    fontWeight: 'bold',
    color: '#fff',
  },
  city: {
    fontSize: pixelSizeHorizontal(20),
    fontWeight: '600',
    color: '#fff',
    marginBottom: pixelSizeHorizontal(5),
  },
  condition: {
    fontSize: pixelSizeHorizontal(18),
    color: '#fff',
    marginBottom: pixelSizeVertical(15),
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    padding: pixelSizeHorizontal(15),
    width: '100%',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(10),
  },
  detailText: {
    fontSize: pixelSizeHorizontal(16),
    color: '#fff',
    marginBottom: pixelSizeVertical(5),
  },
  provider: {
    fontSize: pixelSizeHorizontal(14),
    marginTop: pixelSizeVertical(10),
    color: '#fff',
    fontStyle: 'italic',
  },
  pickerContainer: {
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
});