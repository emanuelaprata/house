import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image, ViewComponent } from 'react-native';
import { Icon } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';


export default function Agenda() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [items, setItems] = React.useState([
        { title: 'Segunda', subtitle: ' Culto dos Ministerios', horario: '19:30' },
        { title: 'Terça', subtitle: 'Folga pastoral', obs: '', horario: '-'},
        { title: 'Quarta', subtitle: 'Open House', obs: '', horario: '20:00'},
        { title: 'Quinta', subtitle: 'Reunião de Zonas', obs: '(Horário definido pela área)', horario: '-' },
        { title: 'Sexta', subtitle: 'Treinamento de líderes', obs: '', horario: '19:30' },
        { title: 'Sábado', subtitle: ' Demandas especificas', horario: '-' },
        { title: 'Domingo', subtitle: 'Culto', horario: '18:00' },
    ])


    return (

        <View style={styles.screen}>
            <StatusBar style="light" />

            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}>AGENDA</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View >
                    {items.map((item, i) => {

                        return (
                            <View
                                key={i} >

                                <View style={styles.container} >
                                    <View style={styles.card}>
                                        <Text style={styles.cardTitle}>
                                            {item.title}
                                        </Text>
                                        <Text style={styles.horario}>
                                            {item.horario}
                                        </Text>
                                    </View>

                                    <View style={styles.subCard}>
                                        <Text style={styles.cardSubTitle} >
                                            {item.subtitle}
                                        </Text>
                                        <Text style={styles.obs}>
                                            {item.obs}
                                        </Text>
                                    </View>
                                </View>
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
        marginTop: 1
    },

    container: {
        display: 'flex',
        flexDirection: "row",
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 20,
        padding: 5,
        height: 120,
        width: 100,
        backgroundColor: '#151515',
        borderStartColor: '#EECC2D',
        borderStartWidth: 3.5,
        marginEnd: -0,

    },
    subCard: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 3,
        borderTopEndRadius: 3,
        margin: 5,
        marginTop: 20,
        padding: 5,
        height: 120,
        backgroundColor: '#151515',
        borderStartWidth: 3.5,
        marginStart: 0,
        flexGrow: 1
    },

    cardTitle: {
        textShadowRadius: 5,
        color: '#EECC2D',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardSubTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        
    },
    obs: {
        color: 'white',
        justifyContent: 'center'
    },
    horario: {
        textShadowRadius: 5,
        color: '#EECC2D',
        fontSize: 32,
        marginTop: 5
    }
});
