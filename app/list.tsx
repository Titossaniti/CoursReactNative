import {View} from "react-native";
import ListComponent from "@/components/ListComponent";
import {Link} from "@react-navigation/native";

export default function list() {
    return(
        <View>
            <Link style={{marginTop : 30}} to="/">Retour accueil</Link>
            <ListComponent/>
        </View>
    )
}