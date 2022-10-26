import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function CalculadoraPrimicias() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    function Calcular() {

    }

    const [numero, setNumero] = useState(0)
    const x = parseFloat(numero)
    const resultado = x/30

    return (

        <View style={styles.screen}>

            <View View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}>PRIMICIAS</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={styles.Titulo}>O que é a primicia?</Text>

                <Text style={styles.Text}>As primícias são os primeiros elementos de qualquer grupo de coisas. Assim, as primícias podem ser os primeiros frutos de uma colheita, a primeira cria de um animal, o primeiro filho de um casal, o primeiro convertido de um lugar… Na Bíblia, os judeus dedicavam suas primícias a Deus</Text>

                <Text style={styles.Titulo}>Calcule a sua primicia:</Text>
                <TextInput
                    placeholder="Informe o valor do seu salário"
                    placeholderTextColor="white"
                    color='white'
                    returnKeyType='done'
                    keyboardType="numeric"
                    value={numero.toString().replace(',' , '.')}
                    onChangeText={setNumero}
                    style={styles.Input}
                />

<Text style={{color: 'white', fontSize: 20}}>O valor da sua Primicia é: R$ {resultado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: '#484848',
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
    Titulo: {
        fontSize: 25,
        fontWeight: '500',
        margin: 20,
        textAlign: 'center',
        color: '#EECC2D',
        marginTop: 50,
        fontWeight: 'bold'
    },
    Text: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
        color: 'white',
        marginTop: 20
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        backgroundColor: 'black',
    },
    Input: {
        margin: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 2,
        backgroundColor: '#151515',
        borderColor: '#EECC2D',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
});
