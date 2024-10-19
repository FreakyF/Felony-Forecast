import React from "react";
import {Image, StyleSheet, View} from "react-native";

export default function ProfilePicture({image}: Readonly<{ image?: string }>) {
    return (
        <View style={styles.mainContainer}>
            {image ? (
                <Image
                    style={styles.image}
                    source={{uri: image}}
                />
            ) : (
                <Image
                    style={styles.image}
                    source={require("../../assets/images/Image.png")}
                />
            )}
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
        borderRadius: 28,
    },
});
