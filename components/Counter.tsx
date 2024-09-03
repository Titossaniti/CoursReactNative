import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Button onPress={() => {setCount(count + 1)}} title="Clique Moi"/>
            <Button onPress={() => {setCount(0)}} title="Reset"/>
            <Text>J'ai été cliqué {count} fois !</Text>
        </View>
    );
};