import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Button onPress={() => setCount(count +1)} title="+"/>
            <Button onPress={() => setCount(0)} title="Reset"/>
            <Button onPress={() => setCount(count - 1)} title="-"/>
            <Text>Le compteur est à : {count}</Text>
        </View>
    );
};