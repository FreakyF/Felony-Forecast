import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function TopBarButton({iconName}: Readonly<{ iconName: keyof typeof Icon.glyphMap }>) {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {

            }}>
                <Icon name={iconName} size={24} color={"#44464F"}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
