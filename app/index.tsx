import {Animated, Text} from 'react-native';
import {useState} from "react";
import MonComponent from "@/components/MonComponent";
import Counter from "@/components/Counter";
import ScrollView = Animated.ScrollView;
import {Link} from "@react-navigation/native";

export default function index() {

const [name, setName] = useState('Jean');

    return(
        <ScrollView>
            <Link to="/list">Accéder à la liste de noms</Link>
            <Link to="/dog">Accéder à la liste de chiens</Link>
            <Text onPress={() => setName('Thierry')}>Hello, {name}</Text>

            <MonComponent/>
            <Counter/>
        </ScrollView>
    );
}