import {StyleSheet, View} from "react-native";
import BottomBarButton from "@/components/bottom-bar-button/BottomBarButton";

export default function BottomAppBar() {
    return (
        <View style={styles.mainContainer}>
            <BottomBarButton text={"Previous person"} iconName={"arrow-left"}></BottomBarButton>
            <BottomBarButton text={"Take a photo"} iconName={"camera-iris"}></BottomBarButton>
            <BottomBarButton text={"Next person"} iconName={"arrow-right"}></BottomBarButton>
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
})
