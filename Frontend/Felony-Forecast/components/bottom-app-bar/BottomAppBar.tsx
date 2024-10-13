import {StyleSheet, Text, View} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function BottomAppBar() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.navItem}>
                <Icon name="arrow-left" size={24} color={"#44464F"}/>
                <Text>Previous person</Text>
            </View>
            <View style={styles.navItem}>
                <Icon name="camera-iris" size={24} color={"#44464F"}/>
                <Text>Take a photo</Text>
            </View>
            <View style={styles.navItem}>
                <Icon name="arrow-right" size={24} color={"#44464F"}/>
                <Text>Next person</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 412,
        gap: 8,
        paddingVertical: 0,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#F3EDF7',
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 16,
        paddingHorizontal: 0,
        gap: 4,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        backgroundColor: 'pink'
    }
})
