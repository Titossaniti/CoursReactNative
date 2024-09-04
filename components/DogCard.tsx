import {View, Text, StyleSheet, Button, Alert} from "react-native";
import { Dog } from "@/entities";
import axios from "axios";

interface Props {
    dog: Dog;
}

export default function DogCard({ dog }: Props) {

    function deleteDog(id: string | undefined) {
        axios.delete('/api/dog/'+id)
            .then(() => {
                Alert.alert("Succès !", "Le chien a bien été supprimé.",[{ text: "OK" }]);
            })
            .catch(error => {
                Alert.alert("Erreur", "Erreur lors de la suppression du chien.",[{ text: "OK" }]);
                console.error('Erreur lors de la suppression du chien :', error);
            });
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.dogName}>{dog.name}</Text>
            <Text style={styles.dogBreed}>{dog.breed}</Text>
            <Text style={styles.dogBirthdate}>
                {new Date(dog.birthdate).toLocaleDateString("fr-FR", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </Text>
            <Button onPress={() => deleteDog(dog.id)} title='Supprimer'/>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#d5dbdb',  // Light grey background for contrast
        padding: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#839192',
        borderRadius: 10,
        shadowColor: '#000', // Adding shadow for a more defined card effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3, // Shadow effect on Android
        marginHorizontal: 10,
    },
    dogName: {
        fontSize: 24, // Larger font for better readability
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dogBreed: {
        fontSize: 18, // Slightly smaller than the name but still prominent
        color: '#555', // Slightly lighter color to differentiate from the name
        marginBottom: 5,
    },
    dogBirthdate: {
        fontSize: 16, // Smaller font for less prominent info
        color: '#777', // Even lighter color for less emphasis
    },
});
