import {Image, StyleSheet, View} from "react-native";

export default function ProfilePicture() {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../assets/images/Image.png")}></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 28,
    },
    image: {
        width: 150,
        height: 150,
        flexShrink: 0,
    }
})
