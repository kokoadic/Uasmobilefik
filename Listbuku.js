import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';

const axios = require('axios');
export default class Listbuku extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("https://connotive-fee.000webhostapp.com/Uasmobile/getBiodata.php")
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
                              <ListItem onPress={()=>this.props.navigation.navigate("DetailMahasiswa",{nim_mhs:item.nim_mhs})}
                              title={item.nim_mhs}
                              leftAvatar={{
                                   source: { uri:"http://wadaya.rey1024.com/upload/kategori/"+item.gambar},
                              }}
                          />


                      )
                      }
                  />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Hapus Biodata" onPress={() => this.props.navigation.navigate('Tambahbuku')}>
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
