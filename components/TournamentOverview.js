import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";

export default function TournamentOverview(){

    const InfoItem = ({info}) => (
        <View style= {{flex:1, flexDirection:'row',margin:20,width:300}}>
            <View style={{flex:1,backgroundColor:'#666s'}}>
                <Text>{info.ico}</Text>
            </View>
            <View style={{flex:3,backgroundColor:'#aaa'}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:30}}>{info.title}</Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={{fontSize:12}}>{info.subtitle}</Text>
                </View>
            </View>
        </View>
    );

    const infotest = [
        {
            title:'title',
            subtitle:'subtitle',
            ico:'a'  
          },{
            title:'title',
            subtitle:'subtitle',
            ico:'a'  
          },{
            title:'title',
            subtitle:'subtitle',
            ico:'a'  
          },{
            title:'title',
            subtitle:'subtitle',
            ico:'a'  
          },{
            title:'title',
            subtitle:'subtitle',
            ico:'a'  
          },
    ];

    return(
        <View style={styles.mainepage}>
            <View style={styles.overview}>
                <Text style={styles.title}>overview</Text>
                <Text></Text>
            </View>
            <View style={styles.ifo}>
                <Text style={styles.title}>Info</Text>
                <FlatList
                data = { infotest}
                renderItem = {({item})=> <InfoItem info={item}/>}
                />
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    mainepage:{
        flex:1
    },
    overview:{

    },
    info:{
        margin:20
    },
    title:{
        fontSize:30
    }
});