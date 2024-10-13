import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function BottomBarButton({iconName, text}: Readonly<{
    iconName: keyof typeof Icon.glyphMap;
    text: string
}>) {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {

            }}>
                <View style={styles.iconContainer}>
                    <Icon name={iconName} size={24} color={"#44464F"}/>
                </View>
                <Text style={styles.iconText}>{text}</Text>
            </TouchableOpacity>
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
        paddingHorizontal: 0,
        paddingVertical: 16,
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        color: '#49454F',
        paddingBottom: 8,
    },
    iconText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 16,
        letterSpacing: 0.5,
        color: '#49454F',
    }
})
