import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";
import {Tournament , Imagelistitem,News} from './Dashboard_components.js';

export default function Dashboard() {
    const games = [
        'https://esportmanager.com/assets/images/games/csgo.png',
        'https://esportmanager.com/assets/images/games/valorant.png',
        'https://esportmanager.com/assets/images/games/r6s.png',
        'https://esportmanager.com/assets/images/games/nba2k21.png',
        'https://esportmanager.com/assets/images/games/tekken7.jpeg',
        'https://esportmanager.com/assets/images/games/sf5.png',
        'https://esportmanager.com/assets/images/games/mortal.webp',
        'https://esportmanager.com/assets/images/games/lol_euw.png',
        'https://esportmanager.com/assets/images/games/lol_eune.png',
        'https://esportmanager.com/assets/images/games/lol.png',
        'https://esportmanager.com/assets/images/games/minecraft.png',
        'https://esportmanager.com/assets/images/games/fortnite.png',
        'https://esportmanager.com/assets/images/games/tft.png',
        'https://esportmanager.com/assets/images/games/tft_euw.png',
        'https://esportmanager.com/assets/images/games/brawl.png',
        'https://esportmanager.com/assets/images/games/clash-royale.png',
        'https://esportmanager.com/assets/images/games/fifa21.png',
        'https://esportmanager.com/assets/images/games/fifa21.png',
        'https://esportmanager.com/assets/images/games/pubg.png',
        'https://esportmanager.com/assets/images/games/cod-warzone.png',
        'https://esportmanager.com/assets/images/games/custom.webp'
    ];

    const tourn = [
        {
        img_big: 'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1676116684496_GL_SGN_RECORD-FLAYER-1920X1080.png',
        title: 'ttile',
        team_size: 5,
        format: 'bo1',
        time: '2019/22/2 4:00',
        game:'csgo'
    },
    {
        img_big: 'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1676116684496_GL_SGN_RECORD-FLAYER-1920X1080.png',
        title: 'ttile',
        team_size: 5,
        format: 'bo1',
        time: '2019/22/2 4:00',
        game:'csgo'
    },
    {
        img_big: 'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1676116684496_GL_SGN_RECORD-FLAYER-1920X1080.png',
        title: 'ttile',
        team_size: 5,
        format: 'bo1',
        time: '2019/22/2 4:00',
        game:'csgo'
    }

    ];
    
    const news = [
        {
            title:'title1',
            date:'2012/4/2  4:61',
            desc:'the description',
            img:'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1674816881256_esm_cikk_1_2b.png'
        },
        {
            title:'title2',
            date:'1989/1/1 12:00',
            desc:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            img:'https://esm-public-images.s3.eu-central-1.amazonaws.com/esm_1674868519117_esm_cikk_1_2.png'
        }
    ];
return (
    <View style={styles.mainpage}>
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Image source={require('./../assets/esportmanagerlogo.png')} style={{width:324,height:80,marginTop:50}} />
                <Text style={{fontSize:35,marginTop:25}}>Challange. Win. Earn.</Text>
                <Text style={{fontSize:30,marginBottom:40}}>Are you prepared?</Text>
            </View>

            <View style={[styles.mainelement,{ alignItems: "center"}]}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#fdfb1e' }]}>
                    <Text style={{fontSize:25}}>Get Metagold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#ac48fb' }]}>
                    <Text style={{fontSize:25}}>Create Challange</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#51ffab' }]}>
                    <Text style={{fontSize:25}}>Find Challange</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.imagelist,styles.mainelement]}>
                <Text style={styles.title}>Games</Text >
                <FlatList
                    data={games}
                    renderItem={({ item }) => <Imagelistitem game={item} />}
                    horizontal={true}
                />
            </View>

            <View style={styles.mainelement}>
                <Text style={styles.title}>Tournaments</Text>
                <FlatList
                    data={tourn}
                    renderItem={({item})=> <Tournament tournament={item}/>}
                    horizontal={true}
                />
            </View>

            <View style={styles.mainelement}>
                <Text style={styles.title}>News</Text>
                <FlatList
                data={news}
                renderItem={({item})=><News news={item}/>}
                horizontal={true}
                />
            </View>
        </ScrollView>
    </View>
);
}
const styles = StyleSheet.create({
    mainelement:{
        marginBottom:60
    },
    mainpage:{
        backgroundColor:'#c692fd'
    },
    title: {
        fontSize: 50,
    },
    button: {
        padding: 10,
        margin: 20,
        width: "70%",
        textAlign: "center",
        alignItems: "center",
        fontSize: 60,
        borderRadius: 15,
    }
});