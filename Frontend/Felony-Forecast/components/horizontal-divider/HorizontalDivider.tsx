import {StyleSheet, Text, View} from "react-native";

export default function HorizontalDivider({subText}: Readonly<{ subText: string }>) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.dividerContainer}></View>
            <Text style={styles.subText}>{subText}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: 412,
        height: 53,
        paddingHorizontal: 15.5,
        gap: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FAF8FF'
    },
    dividerContainer: {
        height: 1,
        width: 381,
        backgroundColor: '#CAC4D0'
    },
    subText: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 36,
        letterSpacing: 0,
        color: '#49454F',
    }
})