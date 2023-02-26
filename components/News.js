import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";
import {News} from './Dashboard_components.js';

export default function News(){
    const news = [];
    return(
        <View style={styles.mainpage}>
            <Text style={styles.title}>News</Text>
            <FlatList
                data={news}
                renderItem={({item})=><News news={item}/>}
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