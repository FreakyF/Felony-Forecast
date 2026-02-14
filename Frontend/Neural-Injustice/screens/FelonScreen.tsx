import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";
import BottomAppBar from "@/components/bottom-app-bar/BottomAppBar";
import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";
import DataSection from "@/components/data-section/DataSection";
import PopupNotification from '@/components/popup-notification/PopupNotification';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function FelonScreen({ route }: Readonly<{ route: any }>) {
    const { crimeData } = route.params;
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const [notification, setNotification] = useState<{
        iconName: keyof typeof Icon.glyphMap;
        text: string;
    } | null>(null);

    const persons = crimeData || [];

    const fetchPersonData = () => {
        if (persons.length > 0) {
            const currentPerson = JSON.parse(persons[currentPersonIndex]);

            const descriptionParts = [
                `Race: ${currentPerson.race || 'Unknown'}`,
                `Sex: ${currentPerson.sex || 'Unknown'}`,
                `Hair: ${currentPerson.hair || 'Unknown'}`,
                `Eyes: ${currentPerson.eyes || 'Unknown'}`,
                `Height: ${(currentPerson.height ? currentPerson.height.toFixed(2) : 'Unknown')} cm`,
                `Weight: ${(currentPerson.weight ? currentPerson.weight.toFixed(2) : 'Unknown')} kg`
            ];

            const crimeList = Object.entries(currentPerson.offense).map(([crime, score]) => ({
                crime: crime,
                crimeScore: typeof score === 'number' ? score : 0,
            }));

            return {
                descriptionText: descriptionParts.join('\n'),
                crimeList,
                image: `data:image/jpeg;base64,${currentPerson.image}`,
            };
        }
        return { descriptionText: '', crimeList: [], image: '' };
    };

    const { descriptionText, crimeList, image } = fetchPersonData();

    const handleNext = () => {
        clearNotification();
        setCurrentPersonIndex((prevIndex) => Math.min(prevIndex + 1, persons.length - 1));
    };

    const handlePrevious = () => {
        clearNotification();
        setCurrentPersonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const clearNotification = () => {
        setNotification(null);
    };

    return (
        <View style={styles.mainContainer}>
            <TopAppBar title={"Neural Injustice"} />
            <AppearanceOverview subText={descriptionText} image={image} />
            <HorizontalDivider subText={"Crime Score"} />
            <DataSection crimeList={crimeList} />
            <BottomAppBar onPrevious={handlePrevious} onNext={handleNext} />
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
        flex: 1,
        backgroundColor: '#FAF8FF'
    },
});
