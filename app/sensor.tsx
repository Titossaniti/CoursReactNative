import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useAnimatedSensor,
    SensorType,
    withSpring,
} from 'react-native-reanimated';

export default function sensor() {
    const gravity = useAnimatedSensor(SensorType.GRAVITY);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withSpring(gravity.sensor.value.x * 15) },
                { translateY: withSpring(gravity.sensor.value.y * 15) },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
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
    },
});