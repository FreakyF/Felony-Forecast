import {View} from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";

export default function Index() {
    return (
        <View>
            <TopAppBar></TopAppBar>
            <AppearanceOverview></AppearanceOverview>
        </View>
    );
}