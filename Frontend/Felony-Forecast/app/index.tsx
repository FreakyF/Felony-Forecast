import {StyleSheet, View} from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";
import BottomAppBar from "@/components/bottom-app-bar/BottomAppBar";
import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";
import DataSection from "@/components/data-section/DataSection";
import PopupNotification from "@/components/popup-notification/PopupNotification";

export default function Index() {
    return (
        <View style={styles.mainContainer}>
            <TopAppBar title={"Felony Forecast"}/>
            <AppearanceOverview/>
            <HorizontalDivider subText={"Crime Score"}/>
            <PopupNotification iconName={"information-outline"}
                               text={"There is only one person in the photo!"}></PopupNotification>
            <DataSection/>
            <BottomAppBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAF8FF'
    },
});
