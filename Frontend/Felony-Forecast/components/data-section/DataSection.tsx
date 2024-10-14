import {Animated, StyleSheet, Text, View} from "react-native";
import ListItem from "@/components/list-item/ListItem";
import ScrollView = Animated.ScrollView;

export default function DataSection({crimeList = []}: Readonly<{
    crimeList?: { crime: string; crimeScore: number }[]
}>) {
    const sortedCrimeList = [...crimeList].sort((a, b) => b.crimeScore - a.crimeScore);

    return sortedCrimeList.length === 0 ? (
        <View style={styles.mainContainer}>
            <Text>No data available.</Text>
        </View>
    ) : (
        <ScrollView style={styles.mainContainer}>
            {sortedCrimeList.map((crime) => (
                <ListItem key={crime.crime} crime={crime.crime} crimeScore={crime.crimeScore}/>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        width: 412,
        gap: 4,
        paddingHorizontal: 15.5,
        backgroundColor: '#FAF8FF'
    },
})