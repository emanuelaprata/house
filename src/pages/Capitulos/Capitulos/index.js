import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";

export default function Capitulo({route}) {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }
    
    // console.log(route.params)

    const capitulos = route.params.item.chapters
    console.log(capitulos)

    return (

        <View style={styles.screen}>

            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}> CAPÍTULO</Text>
                </TouchableOpacity>
            </View>


            <ScrollView>


            <View style={styles.container}>
                
                    {capitulos.map((item, i) => {
                        return (
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={() => {
                                     navigation.navigate('Versiculo', item)
                                }}>
                                    <View>
                                        <Text style={styles.cardTitle}>{i+1}</Text>
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
        borderRadius: 4,
        margin: 5,
        marginTop: 20,
        padding: 5,
        width: 45,
        height: 45,
        backgroundColor: '#151515',
        
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#C8C8C8',
        textAlign: 'center'
    },
});
