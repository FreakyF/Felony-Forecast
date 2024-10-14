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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 412,
        height: 53,
        paddingHorizontal: 15.5,
        gap: 4,
        flexShrink: 0,
        backgroundColor: '#FEF7FF'
    },
    dividerContainer: {
        backgroundColor: '#CAC4D0',
        height: 1,
        width: 381
    },
    subText: {
        color: '#49454F',
        fontFamily: 'Roboto',
        fontSize: 28,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 36,
        letterSpacing: 0,
    }
})