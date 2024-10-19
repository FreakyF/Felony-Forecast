import {StyleSheet, Text, View} from "react-native";
import TopBarButton from "@/components/top-bar-button/TopBarButton";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export default function TopAppBar({title}: Readonly<{ title: string }>) {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={styles.mainContainer}>
            <TopBarButton iconName={"arrow-u-left-top"}
                          onPress={() => navigation.goBack()}></TopBarButton>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.emptyContainer}>

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
        height: 73,
        paddingVertical: 8,
        paddingHorizontal: 4,
        gap: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FAF8FF'
    },
    emptyContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#1D1B20',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        letterSpacing: 0,
        textAlign: 'center',
    }
})