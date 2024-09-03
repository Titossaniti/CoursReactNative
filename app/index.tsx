import {Text, View} from 'react-native';
import {useState} from "react";
import MonComponent from "@/components/MonComponent";
import Counter from "@/components/Counter";

export default function index() {

const [name, setName] = useState('Jean');

    return(
        <View>
            <Text onPress={() => setName('Thierry')}>Hello, {name}</Text>
            <MonComponent/>
            <Counter/>
        </View>
    );
}