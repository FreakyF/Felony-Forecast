import {StyleSheet, Text, View} from "react-native";
import TopBarButton from "@/components/top-bar-button/TopBarButton";

export default function TopAppBar({title}: Readonly<{ title: string }>) {
    return (
        <View style={styles.mainContainer}>
            <TopBarButton iconName={"arrow-u-left-top"}></TopBarButton>
            <Text style={styles.title}>{title}</Text>
            <TopBarButton iconName={"dots-vertical"}></TopBarButton>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexShrink: 0,
        width: 412,
        height: 73,
        paddingVertical: 8,
        paddingHorizontal: 4,
        gap: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FAF8FF'
    },
    title: {
        color: '#1D1B20',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        letterSpacing: 0,
    }
})