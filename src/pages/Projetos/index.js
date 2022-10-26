import React, { useState, useTransition } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image, ViewComponent, Easing } from 'react-native';
import { Icon, ListItem } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';


export default function Projetos() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    // const [expanded, setExpanded] = React.useState(true);

    // const [open, setOpen] = useState(false)
    // const transition = useTransition(
    //     open,
    //     open ? 0 : 1,
    //     open ? 1 : 0,
    //     400,
    //     Easing.inOut(Easing.ease)
    // )

//     const [projetos, setProjetos] = React.useState([
//         { title: 'Flechas', subtitle: 'Culto' },
//         { title: 'Domingo', subtitle: 'Culto' },
//     ])


    return (

        <View style={styles.screen}>
            <StatusBar style="light" />

            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}></Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    {projetos.map((projeto, i) => {

                        return (
                            <View
                                key={i}
                            >
                                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                                    <View style={{
                                        backgroundColor: 'black',
                                        borderRadius: 20
                                    }}>
                                        <TouchableOpacity
                                                            isExpanded={!expanded}
                                                            onPress={() => {
                                                                setExpanded(!expanded);
                                                            }}                    
                                        >
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                                <Text style={{ color: 'white', fontWeight: "600", fontFamily: 'Metropolis-Bold', fontSize: 16 }}>Dados do Hospital</Text>
                                                <Icon name='chevron-down' type='feather' color='white' />
                                            </View>
                                        </TouchableOpacity>
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

    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        marginTop: 20,
        padding: 5,
        height: 100,
        backgroundColor: '#151515',
        borderStartColor: '#EECC2D',
        borderStartWidth: 3.5
    },
    cardTitle: {
        textShadowRadius: 5,
        color: '#EECC2D',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardSubTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    obs: {
        color: 'white'
    }
});

// var Accordion = require('react-native-accordion');

// var YourComponent = React.createClass({
//   getInitialState() {
//     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     return {
//       dataSource: ds.cloneWithRows(_.range(25)),
//     };
//   },

//   render() {
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this._renderRow}
//       />
//     );
//   },

//   _renderRow() {
//     var header = (
//       <View style={...}>
//         <Text>Click to Expand</Text>
//       </View>
//     );

//     var content = (
//       <View style={...}>
//         <Text>This content is hidden in the accordion</Text>
//       </View>
//     );

//     return (
//       <Accordion
//         header={header}
//         content={content}
//         easing="easeOutCubic"
//       />
//     );
//   }
// });