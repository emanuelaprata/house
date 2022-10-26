import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Icon, ListItem } from "@rneui/themed";


export default function Informacoes() {

    const navigation = useNavigation();

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={() => { navigation.goBack() }}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' />
                    <Text style={styles.headerText}>INFORMAÇÕES</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.screenContent}>
                       <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Esse aplicativo foi criado e desenvolvido por Emanuela Prata com o intuito de aprender e apriomorar seus conhecimentos em desenvolvimento Mobile.</Text>
                       <Image
                            style={{ width: 100, height: 100, marginTop: 30}}
                            source={require('./assets/urso.png')} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: 'black',
        zIndex: 1
    },
    screenContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        paddingTop: 50,
        paddingVertical: 15,
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
    menuText: {
        color: 'white',
        fontSize: 16,
        marginStart: 16,
    },
    floatButton: {
        position: 'absolute',
        left: 15,
        top: 30,
        zIndex: 1000
    },

})