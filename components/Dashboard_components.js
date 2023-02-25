import { Button, Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";

{/*{
    img_big: '',
    title: '',
    team_size: 5,
    format: '',
    time: '',
    game:''
}*/}
export const Tournament = ({ tournament }) => (
    <View style={{ padding: 5 }}>
        <View style={{width: 350 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: tournament.img_big }} style={{ width: '90%', height: 160, marginTop: 10, borderRadius:100 }} />
            </View>
            <Text style={{ fontSize: 50 }}>{tournament.title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 2, marginLeft: 5, fontSize: 20 }}>Team size: {tournament.team_size}</Text>
                <Text style={{ flex: 1, fontSize: 18 }}>{tournament.format}</Text>
            </View>
            <View style={{ flexDirection: "row", MarginBotton: 20 }}>
                <Text style={{ flex: 2, marginLeft: 5, fontSize: 20 }}>{tournament.time}</Text>
                <Text style={{ flex: 1, fontSize: 18 }}>{tournament.game}</Text>
            </View>
            <Text></Text>
        </View>
    </View>
);


export const Imagelistitem = ({ game }) => (
    <View style={{ padding: 5 }}>
        <Image source={{ uri: game }} style={styles.image} />
    </View>
);
{/*
{
    title:'',
    date:'',
    desc:'',
    img:''
}
*/}
export const News = ({ news }) => (
    <View style={{padding:5}}>
        <View style={{ width: 350}}>
            <View style={{alignItems:'center'}}>
                <Image style={{ width: '90%', height: 160,marginTop:10,borderRadius:10 }} source={{ uri: 'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1674816881256_esm_cikk_1_2b.png' }} />
            </View>
            <View style={{marginLeft:20,MarginBotton:10}}>
                <Text style={{ fontSize: 25 }}>{news.title}</Text>
                <Text style={{ fontSize: 12 }}>{news.date}</Text>
                <Text style={{ fontSize: 18,height:85, maxHeight:85,overflow:'hidden'}}>{news.desc}</Text>
            </View>
            <Text/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: 166,
        height: 222,
        padding: 20,
        borderRadius: 10
    }
});