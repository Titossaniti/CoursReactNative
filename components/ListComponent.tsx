import {useState} from "react";
import {TextInput, Text, View, Button, Alert} from "react-native";



export default function ListComponent() {


    const [list, setList] = useState(["Jean", "Jacques", "Jéremy", "Justin"]);
    const [name, setNewName] = useState("");

    function addToList() {
        if (name === "") {
            Alert.alert(
                "Erreur", // Titre de l'alerte
                "Le champs ne peut pas etre vide",  // Message de l'alerte
                [{ text: "OK" }] // Bouton "OK"
            );
            return;
        }

        setList([...list, name]);
        setNewName("");
    }

    return (
        <View>
            <TextInput  style={{ borderWidth:1.5, margin: 20, borderRadius: 4}}
                        onChange={(event) => setNewName(event.nativeEvent.text)}
                        value={name}/>

            <Button onPress={() => addToList()} title="Ajouter"/>
            {list.map((item, index) => <Text key={index}>{item}</Text>)}
        </View>
    )
}