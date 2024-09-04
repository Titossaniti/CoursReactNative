import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useAnimatedSensor,
    SensorType,
    withSpring,
} from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import {Link} from "@react-navigation/native";

export default function sensor() {
    const gravity = useAnimatedSensor(SensorType.GRAVITY);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: withSpring(gravity.sensor.value.x * 15)},
                {translateY: withSpring(gravity.sensor.value.y * 25)},
            ],
        };
    });

    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View style={styles.container}>
            <Link style={[styles.link]} to={'/'}>Retour accueil</Link>
            <Button title="Choisir une image" onPress={pickImage}/>
            {image && <Animated.Image source={{uri: image}} style={[styles.box, animatedStyle]}/>}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#353ee5',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(240,240,240)',
    },
    link: {
        position: 'absolute',
        top: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});