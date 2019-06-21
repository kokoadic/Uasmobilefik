import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight  } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';

const axios = require('axios');
export default class DetailMahasiswa extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],nim_mhs:this.props.navigation.state.params.nim_mhs,
        };
    }
    componentDidMount(){
    axios.get('https://connotive-fee.000webhostapp.com/Uasmobile/getDetailBio.php?nim_mhs='+ this.state.nim_mhs)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"DATA BIODATA"} />
        <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                            <View >
                            <Text>NIM : {item.nim_mhs}</Text>
                            <Text>Nama : {item.nama_mhs}</Text>
                            <Text>Tgl Lahir : {item.tgl_lahir}</Text>
                            <Text>prodi : {item.prodi}</Text>
                              <Text>alamat : {item.alamat}</Text>
                                <Text>jenis_kelamin : {item.jenis_kelamin}</Text>
                                <Text>agama : {item.agama}</Text>
                            <Text></Text>
                            </View>




                    )
                    }
                />
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Tambah Buku" onPress={() => this.props.navigation.navigate('Tambahbuku')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
