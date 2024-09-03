import {FlatList, View} from "react-native";
import DogCard from "@/components/DogCard";
import {Link} from "@react-navigation/native";
import {Dog} from "@/entities";
import {useEffect} from "react";
import axios from "axios";

export default function dog(){

    const dogs: Dog[] = [
        { id: 1, name: 'Bella', breed: 'Labrador Retriever', birthdate: '2018-03-12' },
        { id: 2, name: 'Max', breed: 'German Shepherd', birthdate: '2017-05-20' },
        { id: 3, name: 'Charlie', breed: 'Beagle', birthdate: '2019-11-22' },
        { id: 4, name: 'Molly', breed: 'Bulldog', birthdate: '2020-01-15' },
        { id: 5, name: 'Lucy', breed: 'Poodle', birthdate: '2016-08-10' },
        { id: 6, name: 'Daisy', breed: 'Boxer', birthdate: '2021-07-03' },
        { id: 7, name: 'Bailey', breed: 'Golden Retriever', birthdate: '2015-09-24' },
        { id: 8, name: 'Cooper', breed: 'Dachshund', birthdate: '2019-02-16' },
        { id: 9, name: 'Lola', breed: 'Rottweiler', birthdate: '2020-12-07' },
        { id: 10, name: 'Rocky', breed: 'Siberian Husky', birthdate: '2017-04-30' },
        { id: 11, name: 'Sadie', breed: 'Yorkshire Terrier', birthdate: '2018-06-18' },
        { id: 12, name: 'Maggie', breed: 'Shih Tzu', birthdate: '2016-11-22' },
        { id: 13, name: 'Zoe', breed: 'Great Dane', birthdate: '2019-01-05' },
        { id: 14, name: 'Tucker', breed: 'Doberman Pinscher', birthdate: '2018-09-27' },
    ];

    useEffect(() => {
        // axios.get('/api/dog').then(data => console.log(data));

    },[]);


    return (
        <View>
            <Link to="/">Accéder à l'accueil</Link>
            <FlatList
                data={dogs}
                renderItem={({ item }) => <DogCard dog={item} />}
            />
        </View>
    )
}