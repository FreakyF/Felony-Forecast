import BottomNavigationBar from "@/components/BottomNavigationBar/BottomNavigationBar";
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

const lightBlueTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors, // Corrected
        primary: '#03A9F4',         // Light Blue 500
        onPrimary: '#FFFFFF',
        primaryContainer: '#B3E5FC', // Light Blue 100
        onPrimaryContainer: '#000000',
        secondary: '#0288D1',       // Light Blue 700
        onSecondary: '#FFFFFF',
        background: '#E1F5FE',      // Light Blue 50
        onBackground: '#000000',
        surface: '#FFFFFF',
        onSurface: '#000000',
    },
};


export default function HomeScreen() {
    return (
        <PaperProvider theme={lightBlueTheme}>
            <BottomNavigationBar></BottomNavigationBar>
        </PaperProvider>
    );
}