import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppearanceOverview from "@/components/appearance-overview/AppearanceOverview";
import TopAppBar from "@/components/top-app-bar/TopAppBar";
import BottomAppBar from "@/components/bottom-app-bar/BottomAppBar";
import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";
import DataSection from "@/components/data-section/DataSection";
import PopupNotification from "@/components/popup-notification/PopupNotification";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const mockResponse = {
    success: true,
    data: {
        persons: [
            {
                crimeList: [
                    {crime: 'Theft', crimeScore: 0.15},
                    {crime: 'Assault', crimeScore: 0.15},
                    {crime: 'Robbery', crimeScore: 0.70},
                ],
                description: {
                    Race: 'Caucasian',
                    Sex: 'Male',
                    Age: '30',
                    Hair: 'Brown',
                    Eyes: 'Blue',
                },
                imageBase64: 'iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC',
            },
            // {
            //     crimeList: [
            //         {crime: 'Theft', crimeScore: 1},
            //         {crime: 'Assault', crimeScore: 0.15},
            //         {crime: 'Robbery', crimeScore: 0.70},
            //     ],
            //     description: {
            //         Race: 'Black',
            //         Sex: 'Male',
            //         Age: '21',
            //         Hair: 'Brown',
            //         Eyes: 'Blue',
            //     },
            //     imageBase64: 'iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC',
            // },
        ],
    },
};

export default function FelonScreen() {
    const [crimeList, setCrimeList] = useState<{ crime: string; crimeScore: number }[]>([]);
    const [descriptionText, setDescriptionText] = useState(
        'Race: Unknown\nSex: Unknown\nAge: Unknown\nHair: Unknown\nEyes: Unknown'
    );
    const [image, setImage] = useState('');
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const [notification, setNotification] = useState<{
        iconName: keyof typeof Icon.glyphMap;
        text: string;
    } | null>(null);

    useEffect(() => {
        const fetchCrimeData = async () => {
            const response = mockResponse;

            if (response.success && response.data) {
                const persons = response.data.persons;

                if (persons.length > 0) {
                    const currentPerson = persons[currentPersonIndex];

                    setCrimeList(currentPerson.crimeList);

                    const {description, imageBase64} = currentPerson;

                    const getDescriptionPart = (part: string | undefined) => {
                        return part && part.trim() !== '' ? part : 'Unknown';
                    };

                    const descriptionParts = [
                        `Race: ${getDescriptionPart(description.Race)}`,
                        `Sex: ${getDescriptionPart(description.Sex)}`,
                        `Age: ${getDescriptionPart(description.Age)}`,
                        `Hair: ${getDescriptionPart(description.Hair)}`,
                        `Eyes: ${getDescriptionPart(description.Eyes)}`,
                    ];

                    setDescriptionText(descriptionParts.join('\n'));

                    if (imageBase64) {
                        setImage(`data:image/jpeg;base64,${imageBase64}`);
                    }
                }
            }
        };

        fetchCrimeData();
    }, [currentPersonIndex]);

    const handleNext = () => {
        clearNotification();
        if (mockResponse.data.persons.length === 1) {
            setTimeout(() => {
                setNotification({iconName: "alert-circle-outline", text: "There is only one person in the photo!"});
            }, 0);
        } else {
            setCurrentPersonIndex((prevIndex) => Math.min(prevIndex + 1, mockResponse.data.persons.length - 1));
        }
    };

    const handlePrevious = () => {
        clearNotification();
        if (mockResponse.data.persons.length === 1) {
            setTimeout(() => {
                setNotification({iconName: "alert-circle-outline", text: "There is only one person in the photo!"});
            }, 0);
        } else {
            setCurrentPersonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    const clearNotification = () => {
        setNotification(null);
    };

    return (
        <View style={styles.mainContainer}>
            <TopAppBar title={"Felony Forecast"}/>
            <AppearanceOverview subText={descriptionText} image={image}/>
            <HorizontalDivider subText={"Crime Score"}/>
            <DataSection crimeList={crimeList}/>
            <BottomAppBar onPrevious={handlePrevious} onNext={handleNext}/>
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
