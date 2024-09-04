import {View, Text, Alert, TextInput, StyleSheet, Button} from "react-native";
import axios from "axios";

export default function addDog(){

    function addADog() {
        axios.post('/api/dog')
            .then(() => {
                Alert.alert("Succès !", "Le chien a bien été ajouté.",[{ text: "OK" }]);
            })
            .catch(error => {
                Alert.alert("Erreur", "Erreur lors de l\'ajout du chien.",[{ text: "OK" }]);
                console.error('Erreur lors de l\'ajout du chien :', error);
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nom du chien :</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
                // onChangeText={setName}
            />

            <Text style={styles.label}>Race du chien :</Text>
            <TextInput
                style={styles.input}
                placeholder="Race"
                // value={breed}
                // onChangeText={setBreed}
            />

            <Text style={styles.label}>Date de naissance :</Text>
            {/*<Button title={birthdate.toDateString()} onPress={showDatePickerModal} />*/}

            {/*{showDatePicker && (*/}
            {/*    <DateTimePicker*/}
            {/*        value={birthdate}*/}
            {/*        mode="date"*/}
            {/*        display="default"*/}
            {/*        onChange={onDateChange}*/}
            {/*    />*/}
            {/*)}*/}

            <View style={styles.buttonContainer}>
                <Button title="Ajouter le chien" onPress={addADog} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 20,
    },
})