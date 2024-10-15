import React, {useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import BottomBarButton from "@/components/bottom-bar-button/BottomBarButton";

export default function BottomAppBar() {
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

    const requestCameraPermission = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        setHasCameraPermission(permissionResult.granted);
        return permissionResult.granted;
    };

    const takePhoto = async () => {
        if (hasCameraPermission === null) {
            const granted = await requestCameraPermission();
            if (!granted) {
                Alert.alert("Camera permission is required to take a photo.");
                return;
            }
        } else if (!hasCameraPermission) {
            const granted = await requestCameraPermission();
            if (!granted) {
                Alert.alert("Camera permission is required to take a photo.");
                return;
            }
        }

        const result = await ImagePicker.launchCameraAsync();

        if (result.canceled) {
            // Handle cancellation logic.
        } else {
            // Handle successful photo taken logic.
        }
    };

    return (
        <View style={styles.mainContainer}>
            <BottomBarButton
                text={"Previous person"}
                iconName={"arrow-left"}
                onPress={() => console.log("Previous person button pressed")}
            />
            <BottomBarButton
                text={"Take a photo"}
                iconName={"camera-iris"}
                onPress={takePhoto}
            />
            <BottomBarButton
                text={"Next person"}
                iconName={"arrow-right"}
                onPress={() => console.log("Next person button pressed")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 412,
        gap: 8,
        paddingVertical: 0,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#EEEDF4',
    },
});
