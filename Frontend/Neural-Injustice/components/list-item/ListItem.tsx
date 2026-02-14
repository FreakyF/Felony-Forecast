import {StyleSheet, Text, View} from "react-native";
import * as Progress from 'react-native-progress';

export default function ListItem({crime, crimeScore}: Readonly<{ crime: string, crimeScore: number }>) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.stateContainer}>
                <View style={styles.leadingElement}>
                    <Text>{crime}</Text>
                </View>
                <View style={styles.trailingElement}>
                    <Progress.Bar
                        progress={crimeScore}
                        width={101}
                        borderWidth={0}
                        color={"#485E92"}
                        unfilledColor={"#D9DFF6"}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    stateContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 56,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 16,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    leadingElement: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    trailingElement: {
        flexDirection: 'row',
        width: 101,
        gap: 10,
        alignItems: 'center'
    }
});
