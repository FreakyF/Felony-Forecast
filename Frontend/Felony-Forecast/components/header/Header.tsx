import {Image, StyleSheet, View} from "react-native";
import DescriptionColumn from "@/components/description-column/DescriptionColumn";

export default function Header() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/Image.png")}></Image>
            </View>
            <DescriptionColumn></DescriptionColumn>
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
    imageContainer: {
        borderRadius: 28,
    },
    image: {
        width: 150,
        height: 150,
        flexShrink: 0,
    }
})
