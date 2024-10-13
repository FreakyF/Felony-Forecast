import {View} from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";

export default function Index() {
    return (
        <View>
            <TopAppBar title={"Felony Forecast"}></TopAppBar>
            <AppearanceOverview></AppearanceOverview>
        </View>
    );
}