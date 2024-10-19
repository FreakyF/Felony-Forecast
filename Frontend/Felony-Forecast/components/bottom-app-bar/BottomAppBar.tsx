import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import BottomBarButton from "@/components/bottom-bar-button/BottomBarButton";
import * as FileSystem from 'expo-file-system';
import {sendToBackend} from '@/api/Api';
import PopupNotification from '@/components/popup-notification/PopupNotification';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export default function BottomAppBar({onNext, onPrevious}: Readonly<{ onNext: () => void, onPrevious: () => void }>) {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [notification, setNotification] = useState<{
        iconName: keyof typeof Icon.glyphMap;
        text: string;
    } | null>(null);

    const requestCameraPermission = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        setHasCameraPermission(permissionResult.granted);
        return permissionResult.granted;
    };

    const clearNotification = () => {
        setNotification(null);
    };

    const takePhoto = async () => {
        clearNotification();

        if (hasCameraPermission === null || !hasCameraPermission) {
            const granted = await requestCameraPermission();
            if (!granted) {
                setNotification({
                    iconName: "alert-circle-outline",
                    text: "Camera permission is required to take a photo!"
                });
                return;
            }
        }

        const result = await ImagePicker.launchCameraAsync({
            base64: true,
        });

        if (result.canceled) {
            return;
        } else {
            const photo = result.assets[0];
            const fileUri = photo.uri;

            const base64Image = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            const payload = {
                image: base64Image,
                fileName: photo.fileName ?? 'photo.jpg',
                mimeType: photo.type ?? 'image/jpeg',
            };

            const response = await sendToBackend('backend', payload);
            if (!response.success) {
                setNotification({iconName: "alert-circle-outline", text: "Failed to upload image!"});
            } else {
                navigation.navigate('Felon');
            }
        }
    };

    return (
        <View style={styles.mainContainer}>
            <BottomBarButton
                text={"Previous person"}
                iconName={"arrow-left"}
                onPress={onPrevious}
            />
            <BottomBarButton
                text={"Take a photo"}
                iconName={"camera-iris"}
                onPress={takePhoto}
            />
            <BottomBarButton
                text={"Next person"}
                iconName={"arrow-right"}
                onPress={onNext}
            />
            {notification && (
                <PopupNotification
                    iconName={notification.iconName}
                    text={notification.text}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 8,
        paddingVertical: 0,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#EEEDF4',
    },
});
