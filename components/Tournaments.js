import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";
import {Tournament} from './Dashboard_components.js';

export default function Tournaments(){
    const tournaments = [];
    return(
        <View style={styles.mainpage}>
            <Text style={styles.title}>Tournaments</Text>
            <FlatList
                data={tournaments}
                renderItem={({item})=><Tournament tournament={item}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    mainpage:{
        
    },
    title:{
        fontSize:60
    }
});