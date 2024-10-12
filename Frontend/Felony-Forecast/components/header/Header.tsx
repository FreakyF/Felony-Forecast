import {Image, StyleSheet, View} from "react-native";
import DescriptionColumn from "@/components/description-column/DescriptionColumn";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Image source={require("../../assets/images/Image.png")}></Image>
            </View>
            <DescriptionColumn></DescriptionColumn>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
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
    }
})
