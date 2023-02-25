import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";

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
    const Imagelistitem = ({ game }) => (
        <View style={styles.item}>
            <Image source={{ uri: game }} style={styles.image} />
        </View>
    );
    return (
        <View>
            <ScrollView>
                <View>
                    <Text style={{padding:50}}/>
                    <Text>Are you prepared?</Text>
                </View>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={[styles.button,{backgroundColor:'#fdfb1e'}]}>
                        <Text>Get Metagold</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:'#ac48fb'}]}>
                        <Text>Create Challange</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:'#51ffab'}]}>
                        <Text>Find Challange</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imagelist}>
                    <Text style={styles.title}>Games</Text >
                    <FlatList
                        data={games}
                        renderItem={({ item }) => <Imagelistitem game={item} />}
                        horizontal={true}
                    />
                </View>

                <View>

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 166,
        height: 222,
        padding: 20,
        borderRadius: 10
    },
    imagelist: {
        backgroundColor: '#3ce4e7',
    },
    title: {
        fontSize: 50,
    },
    item: {
        padding: 5,
    },
    button: {
        padding: 10,
        margin:20,
        width: "70%",
        textAlign: "center",
        alignItems: "center",
        fontSize: 30,
        borderRadius:15,
    }
});