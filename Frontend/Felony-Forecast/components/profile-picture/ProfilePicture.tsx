import {Image, StyleSheet, View} from "react-native";

export default function ProfilePicture() {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.image} source={require("../../assets/images/Image.png")}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 28,
    },
    image: {
        flexShrink: 0,
        width: 150,
        height: 150,
    }
})
