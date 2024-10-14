import {View} from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";
import BottomAppBar from "@/components/bottom-app-bar/BottomAppBar";
import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";

export default function Index() {
    return (
        <View>
            <TopAppBar title={"Felony Forecast"}></TopAppBar>
            <AppearanceOverview></AppearanceOverview>
            <HorizontalDivider subText={"Crime Score"}></HorizontalDivider>
            <BottomAppBar></BottomAppBar>
        </View>
    );
}