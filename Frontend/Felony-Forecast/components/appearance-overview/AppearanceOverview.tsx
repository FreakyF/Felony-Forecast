import {StyleSheet, View} from "react-native";
import AppearanceDetails from "@/components/appearance-details/AppearanceDetails";
import ProfilePicture from "@/components/profile-picture/ProfilePicture";

export default function AppearanceOverview() {
    return (
        <View style={styles.mainContainer}>
            <ProfilePicture></ProfilePicture>
            <AppearanceDetails></AppearanceDetails>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexShrink: 0,
        width: 412,
        height: 171,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FEF7FF"
    },
})
