import {StyleSheet, Text, View} from "react-native";

export default function DataSection() {
    return (
        <View style={styles.mainContainer}>
            <Text>No data available.</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexShrink: 0,
        width: 412,
        height: 53,
        gap: 4,
        paddingHorizontal: 15.5,
        backgroundColor: '#FAF8FF'
    },
})