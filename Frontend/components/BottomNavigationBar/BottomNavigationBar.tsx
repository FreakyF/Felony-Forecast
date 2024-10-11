import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
    const theme = useTheme();
    const iconColor = theme.colors.onSurfaceVariant;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({navigation, state, descriptors, insets}) => (
                <BottomNavigation.Bar
                    theme={theme}
                    activeIndicatorStyle={{backgroundColor: 'transparent'}}
                    activeColor={iconColor}
                    inactiveColor={iconColor}
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({route, preventDefault}) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({route, focused, color}) => {
                        const {options} = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({focused, color, size: 24});
                        }

                        return null;
                    }}
                    getLabelText={({route}) => {
                        const {options} = descriptors[route.key];

                        let label;

                        if (typeof options.tabBarLabel === 'string') {
                            label = options.tabBarLabel;
                        } else if (typeof options.title === 'string') {
                            label = options.title;
                        } else {
                            label = route.name;
                        }

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="Previous Person"
                component={PreviousPerson}
                options={{
                    tabBarLabel: 'Previous Person',
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="arrow-left" size={size} color={color}/>;
                    },
                }}
            />
            <Tab.Screen
                name="Take a photo"
                component={CameraScreen}
                options={{
                    tabBarLabel: 'Take a photo',
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="camera-iris" size={size} color={color}/>;
                    },
                }}
            />
            <Tab.Screen
                name="Next Person"
                component={NextPerson}
                options={{
                    tabBarLabel: 'Next Person',
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="arrow-right" size={size} color={color}/>;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

function PreviousPerson() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Previous Person!</Text>
        </View>
    );
}

function CameraScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Camera!</Text>
        </View>
    );
}

function NextPerson() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Next Person!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
