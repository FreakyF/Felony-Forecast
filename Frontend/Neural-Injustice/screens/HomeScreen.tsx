import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import BottomAppBar from "@/components/bottom-app-bar/BottomAppBar";
import DataSection from "@/components/data-section/DataSection";
import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";
import PopupNotification from "@/components/popup-notification/PopupNotification";
import TopAppBar from "@/components/top-app-bar/TopAppBar";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
    const [notification, setNotification] = useState<{
        iconName: keyof typeof Icon.glyphMap;
        text: string;
    } | null>(null);

    const handlePress = () => {
        clearNotification();
        setTimeout(() => {
            setNotification({ iconName: "alert-circle-outline", text: "There's no photo uploaded!" });
        }, 0);
    };

    const clearNotification = () => {
        setNotification(null);
    };

    return (
        <View style={styles.mainContainer}>
            <TopAppBar title={"Neural Injustice"} />
            <AppearanceOverview />
            <HorizontalDivider subText={"Crime Score"} />
            <DataSection />
            <BottomAppBar onPrevious={handlePress} onNext={handlePress} />
            {notification && (
                <PopupNotification
                    iconName={notification.iconName}
                    text={notification.text}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAF8FF'
    },
});
