import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image, ViewComponent } from 'react-native';
import { Icon } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';

import CalculadoraDizimo from '../Dizimo';
import AoVivo from '../Ao vivo';
import CalculadoraPrimicias from '../Primicias';
import Agenda from '../Agenda';
import Participe from '../Participe';
import Biblia from '../Biblia';
import Projetos from '../Projetos';
import Informacoes from '../informações';





export default function Home() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    return (

        <View style={styles.screen}>
            <StatusBar style="light" />

            <View View style={styles.header}>
                {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='door' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                </TouchableOpacity> */}
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 250, height: 150 }}
                    source={require('./assets/casa.png')} />
            </View>

            <View style={styles.container}>

                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        navigation.navigate('Biblia', Biblia)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/biblia.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Biblia
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                        navigation.navigate('Agenda', Agenda)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/calendario.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Agenda
                        </Text>
                    </View>
                </TouchableOpacity>

               

                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        navigation.navigate('AoVivo', AoVivo)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/aovivo.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Ao vivo
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                        navigation.navigate('CalculadoraDizimo', CalculadoraDizimo)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/calculadora.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Dízimo
                        </Text>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        navigation.navigate('CalculadoraPrimicias', CalculadoraPrimicias)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/calculadora.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Primícias
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.card}
                    onPress={() => {
                        navigation.navigate('CalculadoraPrimicias', CalculadoraPrimicias)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/anotacoes.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Anotações
                        </Text>
                    </View>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        navigation.navigate('Informacoes', Informacoes)
                    }}>
                    <View>
                        <Image
                            style={styles.icons}
                            source={require('./assets/duvidas.png')} />
                        <Text
                            style={styles.cardTitle}>
                            Infos
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
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
        paddingTop: 50,
        paddingVertical: 15,
        paddingStart: 5,
        height: 100,
    },
    headerText: {
        color: 'white',
        fontSize: 17,
        marginStart: 16,
        fontWeight: '200',
    },
    container: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 13,
        justifyContent: 'center'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        marginTop: 20,
        padding: 5,
        width: 100,
        height: 100,
        backgroundColor: '#151515',
    },
    cardTitle: {
        textShadowColor: '',
        textShadowRadius: 5,
        color: 'white',
        textAlign: 'center',
        fontWeight: '500'
    },
    icons: {
        width: 40,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
