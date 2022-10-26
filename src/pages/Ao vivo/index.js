import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import {Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'



export default function AoVivo() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    let urlPath = 'https://www.youtube.com' 

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
                    onPress={goBack}>
                    <Icon name='chevron-left' type='feather' color='#EECC2D' style={{ marginLeft: 20 }} />
                    <Text style={styles.headerText}>AO VIVO</Text>
                </TouchableOpacity>
            </View>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <WebView source={{uri:urlPath}}/>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fafafa'
},
screenContent: {
    flex: 1
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
    fontSize: 16,
    marginStart: 16,
    fontWeight: '700'
},
ImageBackground: {
    flex: 1,
    width: null,
    height: null
},
cardContainer: {
    flex: 1,
    height: 150,
    paddingStart: 15,
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
},
cardTitle: {
    color: '#fff',
    fontSize: 21,
},
cardSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5
},
cardDetailContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
}
});