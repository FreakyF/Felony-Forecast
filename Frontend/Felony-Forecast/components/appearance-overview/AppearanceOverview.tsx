import {StyleSheet, View} from "react-native";
import AppearanceDetails from "@/components/appearance-details/AppearanceDetails";
import ProfilePicture from "@/components/profile-picture/ProfilePicture";

export default function AppearanceOverview({subText, image}: Readonly<{ subText?: string; image?: string }>) {
    return (
        <View style={styles.mainContainer}>
            <ProfilePicture image={image}/>
            <View style={styles.detailsContainer}>
                <AppearanceDetails subText={subText}/>
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
        height: 171,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 24,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: "#FAF8FF"
    },
    detailsContainer: {
        justifyContent: 'flex-start',
        flexGrow: 1,
    },
});
