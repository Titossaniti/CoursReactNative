import {View, Text, StyleSheet, Button} from "react-native";
import { Post } from "@/entities";

interface Props {
    post: Post;
    onDelete: (post: Post) => void;
}

export default function PostCard({ post, onDelete }: Props) {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.dogName}>{post.title}</Text>
            <Text style={styles.dogBreed}>{post.body}</Text>
            <Button onPress={() => onDelete(post)} title='Supprimer'/>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#d5dbdb',  // Light grey background for contrast
        padding: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#839192',
        borderRadius: 10,
        shadowColor: '#000', // Adding shadow for a more defined card effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3, // Shadow effect on Android
        marginHorizontal: 10,
    },
    dogName: {
        fontSize: 24, // Larger font for better readability
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dogBreed: {
        fontSize: 18, // Slightly smaller than the name but still prominent
        color: '#555', // Slightly lighter color to differentiate from the name
        marginBottom: 5,
    },
});
