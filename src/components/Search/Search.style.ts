import { StyleSheet } from "react-native";
import { pixelSizeHorizontal, pixelSizeVertical } from "../../utils/Responsive";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: pixelSizeVertical(16),
    },
    input: {
        height: pixelSizeVertical(45),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: pixelSizeVertical(12),
        paddingHorizontal: pixelSizeHorizontal(8),
        borderRadius: pixelSizeHorizontal(10),
    },
    error: {
        color: 'red',
        marginBottom: pixelSizeVertical(12),
    },
});