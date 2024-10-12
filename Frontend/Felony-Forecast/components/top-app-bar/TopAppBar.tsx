import {StyleSheet, Text, View} from "react-native";

export default function TopAppBar() {
    return (
        <View style={styles.mainContainer}>
            <Text>Back</Text>
            <Text>Felony Forecast</Text>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexShrink: 0,
        width: 412,
        height: 73,
        paddingVertical: 8,
        paddingHorizontal: 4,
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAF8FF'
    },
})