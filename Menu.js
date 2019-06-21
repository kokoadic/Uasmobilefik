import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button,ScrollView,Alert } from 'react-native';
import Header from "./Header";


export default class Menu extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>
      <Header judul={"Biodata Maker"} />
      <Image source = {{uri: 'https://connotive-fee.000webhostapp.com/Uasmobile/biodata.png'}} style = {{marginLeft:75,width: 200, height: 200}} />

    <View style={styles.vButton}>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Listanggota')}
            title="Tambah Biodata"
            accessibilityLabel="DATA ANGGOTA"
            />
    <View style={styles.vButton}></View>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Listbuku')}
            title="Hapus&Cek Biodata"
            accessibilityLabel="List buku"
            />
            <View style={styles.vButton}></View>
                <Button
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Listpeminjaman')}
                    title="Update Biodata"
                    accessibilityLabel="ViewListpeminjaman"
                    />
    <View style={styles.vButton}></View>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Listpeminjaman')}
            title="QR Code"
            accessibilityLabel="Listpeminjaman"
            />
            <View style={styles.vButton}></View>
                <Button
                    color="orange"
                    onPress={() => this.props.navigation.navigate('About')}
                    title="Tentang Kami"
                    accessibilityLabel="Listpeminjaman"
                    />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#66ffb3',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
  vButton:{
    margin:5,
    borderRadius: 40,
    justifyContent: 'center',
  },
});
