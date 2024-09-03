import {useState} from "react";
import {TextInput, Text, View, Button, Alert} from "react-native";



export default function ListComponent() {


    const [list, setList] = useState(["Jean", "Jacques", "Jéremy", "Justin"]);
    const [name, setNewName] = useState("");

    function addToList() {
        if (name.trim().length === 0) {
            Alert.alert(
                "Erreur",
                "Le champs ne peut pas etre vide",
                [{ text: "OK" }]
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

            <Button onPress={addToList} title="Ajouter"/>
            {list.map((item, index) => <Text key={index}>{item}</Text>)}
        </View>
    )
}