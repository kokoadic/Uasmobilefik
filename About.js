import React from "react";
import {View, Text, StyleSheet, TextInput,Image} from "react-native";
import Header from './Header';


export default class About extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Header judul="Tentang Kami"
          identitas="Kukuh Adhicahyo  1715051130"
          />
        </View>
      <View style={styles.about}>
        <View style={styles.foto}>
          <Image source={require('./image/aku.jpg')}
          style={{width:'90%',height:'90%',borderRadius:20}}
          />
        </View>
        <View style={styles.boxket}>
          <Text style={styles.teksabout}>
          NAMA: Kukuh Adhicayo
          </Text>
          <Text style={styles.teksabout}>
          NIM: 1715051130
          </Text>
        </View>
      </View>
      <View style={styles.motto}>
        <Text
        style={{
          color:'white',
          fontSize: 35
        }}
        >Semangat UAS
        </Text>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    flex:1,
  },
  about:{
    flex:3,
    flexDirection: 'row',
    margin: 10,
  },
  foto:{
    flex:2
  },
  boxket: {
    flex: 2,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 25
  },
  teksabout:{
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  footer:{
    flex:1
  },
  motto: {
    flex: 2,
    backgroundColor: '#4dc3ff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
