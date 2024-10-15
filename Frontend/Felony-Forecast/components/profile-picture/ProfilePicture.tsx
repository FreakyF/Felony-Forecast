import React, {useState} from "react";
import {Alert, Image, StyleSheet, TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function ProfilePicture() {
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | null>(null);

    const requestMediaLibraryPermission = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasMediaLibraryPermission(permissionResult.granted);
        return permissionResult.granted;
    };

    const pickImage = async () => {
        if (hasMediaLibraryPermission === null) {
            const granted = await requestMediaLibraryPermission();
            if (!granted) {
                Alert.alert("Permission to access the media library is required!");
                return;
            }
        } else if (!hasMediaLibraryPermission) {
            const granted = await requestMediaLibraryPermission();
            if (!granted) {
                Alert.alert("Permission to access the media library is required!");
                return;
            }
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (result.canceled) {
            // Handle cancellation logic.
        } else {
            // Handle successful photo selected logic.
        }
    };

    return (
        <TouchableOpacity onPress={pickImage} style={styles.mainContainer}>
            <Image style={styles.image} source={require("../../assets/images/Image.png")}/>
        </TouchableOpacity>
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
    },
});
