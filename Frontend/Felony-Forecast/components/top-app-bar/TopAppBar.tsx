import {StyleSheet, Text, View} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function TopAppBar({title}: Readonly<{ title: string }>) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <Icon name="arrow-u-left-top" size={24} color={"#44464F"}/>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.iconContainer}>
                <Icon name="dots-vertical" size={24}/>
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
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#1D1B20',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        letterSpacing: 0,
    }
})