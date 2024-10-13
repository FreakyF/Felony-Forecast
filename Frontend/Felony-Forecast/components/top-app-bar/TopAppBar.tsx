import {StyleSheet, Text, View} from "react-native";

export default function TopAppBar({title}: Readonly<{ title: string }>) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <Text>Back</Text>
            </View>
            <Text>{title}</Text>
            <View style={styles.iconContainer}>
                <Text>Settings</Text>
            </View>
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
        justifyContent: 'space-between',
        backgroundColor: '#FAF8FF'
    },
    iconContainer: { // TODO: Change css to the figma's one.
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: "orange",
    }
})