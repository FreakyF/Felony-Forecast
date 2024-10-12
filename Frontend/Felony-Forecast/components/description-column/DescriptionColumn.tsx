import {StyleSheet, Text, View} from "react-native";

export default function DescriptionColumn() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headerText}>Description</Text>
            <Text style={styles.subText}>
                No data available.{'\n'}
                Please upload a photo{'\n'}
                to analyze crime score.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        gap: 4,
        alignItems: 'flex-start',
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 32,
        color: '#1D1B20',
    },
    subText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#49454F',
    }
})
