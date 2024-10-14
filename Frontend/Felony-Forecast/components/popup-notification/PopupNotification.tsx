import {Animated, StyleSheet, Text, View} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, {useEffect, useState} from 'react';

export default function PopupNotification({iconName, text,}: Readonly<{
    iconName: keyof typeof Icon.glyphMap;
    text: string;
}>) {
    const [visible, setVisible] = useState(true);
    const opacity = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, [opacity]);

    if (!visible) {
        return null;
    }


    return (
        <Animated.View style={[{opacity}, styles.mainContainer]}>
            <View style={styles.mainContent}>
                <Icon name={iconName} size={24} color={'#44464F'}/>
                <Text>{text}</Text>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: 999,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 120,
        width: 312,
        maxWidth: 560,
        minHeight: 124,
        maxHeight: 400,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 28,
        backgroundColor: '#E8E7EF',
    },
    mainContent: {
        flexDirection: 'column',
        paddingTop: 24,
        paddingBottom: 0,
        paddingHorizontal: 24,
        gap: 16,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: '#1A1B21',
    },
});
