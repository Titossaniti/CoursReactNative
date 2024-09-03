import {Animated, Text} from 'react-native';
import {useState} from "react";
import MonComponent from "@/components/MonComponent";
import Counter from "@/components/Counter";
import ListComponent from "@/components/ListComponent";
import ScrollView = Animated.ScrollView;

export default function index() {

const [name, setName] = useState('Jean');

    return(
        <ScrollView>
            <Text onPress={() => setName('Thierry')}>Hello, {name}</Text>

            <MonComponent/>
            <Counter/>
            <ListComponent/>
        </ScrollView>
    );
}