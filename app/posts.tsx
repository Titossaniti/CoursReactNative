import {Alert, FlatList, View} from "react-native";
import {Link} from "@react-navigation/native";
import {Post} from "@/entities";
import {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "@/components/PostCard";

export default function posts(){

    const [posts, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPostList(response.data);
    }

    async function removePost(post:Post){
        await axios.delete('https://jsonplaceholder.typicode.com/posts/'+post.id);
        setPostList(
            posts.filter((post) => post.id !== post.id)
        );
    }



    return (
        <View>
            <Link style={{marginTop : 30}} to="/">Accéder à l'accueil</Link>
            {/*<Link style={{marginTop : 6}} to="/addPost">Ajouter un post</Link>*/}
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostCard post={item} onDelete={removePost}/>}
            />
        </View>
    )
}