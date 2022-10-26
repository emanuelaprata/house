import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";

export default function Versiculo({ route }) {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    //  console.log(route.params)

    const versiculos = route.params
    //   console.log(versiculos)

    return (

        <View style={styles.screen}>

            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                   <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}>
                        VERSÍCULO</Text>
                </TouchableOpacity>
            </View>


            <ScrollView>


                <View style={styles.container}>

                    {versiculos.map((item, i) => {
                        return (
                            <View key={i}>
                                <View >
                                    <Text style={styles.text}>
                                        <Text style={styles.num}>{i + 1 + '. '}</Text>
                                        {item}
                                    </Text>

                                </View>
                            </View>
                        )
                    })}
                    <Text style={{marginTop: 20, color: '#C8C8C8'}}>Nova Versão Internacional - NVI. </Text>
                    <Text style={styles.subtitle}>Créditos do projeto @thiagobodruk</Text>
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
        marginBottom: 30
    },
    headerText: {
        color: '#EECC2D',
        fontSize: 17,
        marginStart: 16,
        fontWeight: '700',
        marginTop: 1.5
    },
    container: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    text: {
        color: '#C8C8C8',
        textAlign: 'center',
        fontSize: 20,
        margin: 8

    },
    num: {
        color: '#C8C8C8',
        fontSize: 14,
        justifyContent: 'center',
    },
    subtitle: {
        color: '#C8C8C8',
        
    }


});
