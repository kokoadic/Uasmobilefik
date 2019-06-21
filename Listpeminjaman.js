import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Listpeminjaman extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://connotive-fee.000webhostapp.com/Uasmobile/getBiodata.php';
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios.get(`https://connotive-fee.000webhostapp.com/Uasmobile/getBiodata.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama}
      leftAvatar={{ source: { uri: prefik_url + item.gambar } }}
      onPress={
        () => {
          this.props.navigation.navigate('DetailMahasiswa', { id: item.kategori_id, title: item.nama })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"Update Data"} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.categories}
          renderItem={this.renderItem}
        />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Update biodata" onPress={() => this.props.navigation.navigate('Tambahpeminjaman')}>
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
