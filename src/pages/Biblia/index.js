import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";
import biblia from './biblia.json'


export default function Biblia() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }
    

    const [items, setItems] = React.useState(
        biblia
    )

    return (

        <View style={styles.screen}>

            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}>LIVRO</Text>
                </TouchableOpacity>
            </View>


            <ScrollView>
            <View style={styles.container}>
                
                    {items.map((item, i) => {
                        return (
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={() => {
                                     navigation.navigate('Capitulo', {item})
                                }}>
                                    <View style={{ backgroundColor: item.code }}>
                                        <Text style={styles.cardTitle}>{item.abbrev.toUpperCase()}</Text>
                                        <Text style={styles.cardSubTitle}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )

                    })}
            </View>
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: 'black',
    },
    header: {
        flexDirection: 'row',
        paddingTop: 50,
        paddingVertical: 15,
        paddingStart: 5,
        backgroundColor: 'black',
        borderColor: '#EECC2D',
        borderBottomWidth: 3,
        height: 100,
    },
    headerText: {
        color: '#EECC2D',
        fontSize: 17,
        marginStart: 16,
        fontWeight: '700',

    },
    container: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        margin: 5,
        marginTop: 20,
        padding: 5,
        width: 100,
        height: 100,
        backgroundColor: '#151515',
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#C8C8C8',
        textAlign: 'center'
    },
    cardSubTitle: {
        color: '#C8C8C8',
        textAlign: 'center'

    }


});
