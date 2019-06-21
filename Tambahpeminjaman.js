import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,image } from 'react-native';
import Header from "./Header";
import axios from 'axios';

export default class Tambahpeminjaman extends React.Component {
    static navigationOptions = {
    }
     constructor(props) {
         super(props);
         this.state = {
           nim_mhs: '',
           nama_mhs: '',
           tgl_lahir: '',
           prodi: '',
           alamat: '',
           jenis_kelamin: '',
           agama: '',

       };
     }
     _simpan = () => {
      axios.post('https://connotive-fee.000webhostapp.com/Uasmobile/UpdateBiodata.php', {
        nim_mhs: this.state.nim_mhs,
        nama_mhs: this.state.nama_mhs,
        tgl_lahir: this.state.tgl_lahir,
        prodi: this.state.prodi,
        alamat: this.state.alamat,
        jenis_kelamin: this.state.jenis_kelamin,
            agama: this.state.agama,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"DATA PEMINJAMAN BUKU"} />

      <ScrollView>
      <View style={styles.box1}>
      <Text style={styles.teksinputteks}>
            Nim :
            </Text>
        <TextInput
        style={styles.txtBox1}
        placeholder="Masukan Nim"
        onChangeText={nim_mhs => this.setState({nim_mhs})}
        />
      </View>
      <View style={styles.box1}>
      <Text style={styles.teksinputteks}>
            Masukan Nama :
            </Text>
        <TextInput
        style={styles.txtBox1}
        placeholder="Masukan Nama"
        onChangeText={nama_mhs => this.setState({ nama_mhs })}
        />
        </View>
        <View style={styles.box1}>
        <Text style={styles.teksinputteks}>
              Masukan Tanggal Lahir :
              </Text>
          <TextInput
          style={styles.txtBox1}
          placeholder="Contoh 1998-08-20"
          onChangeText={tgl_lahir => this.setState({ tgl_lahir })}
          />
      </View>
      <View style={styles.box1}>
      <Text style={styles.teksinputteks}>
            prodi  :
            </Text>
        <TextInput
        style={styles.txtBox1}
        placeholder="Masukan Prodi"
        onChangeText={prodi => this.setState({ prodi })}
        />
      </View>
      <View style={styles.box1}>
      <Text style={styles.teksinputteks}>
            Alamat :
            </Text>
        <TextInput
        style={styles.txtBox1}
        placeholder="Masukan Alamat"
        onChangeText={alamat => this.setState({ alamat })}
        />

      </View>
      <View style={styles.box1}>
      <Text style={styles.teksinputteks}>
            Jenis Kelamin :
            </Text>
        <TextInput
        style={styles.txtBox1}
        placeholder="Jenis Kelamin"
        onChangeText={jenis_kelamin => this.setState({ jenis_kelamin})}
        />
        </View>
        <View style={styles.box1}>
        <Text style={styles.teksinputteks}>
              Agama :
              </Text>
          <TextInput
          style={styles.txtBox1}
          placeholder="Masukan Agama"
          onChangeText={agama => this.setState({ agama })}
          />
                </View>

                <View style={styles.body4}>
            <View style={styles.box1}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Menu')}
                accessibilityLabel="Menu"
                style={styles.tombol}>
                <Text style={styles.tekstombol}>Kembali</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.box1}>
              <TouchableHighlight
              onPress={() => {this._simpan();
             this.props.navigation.navigate('Listpeminjaman')}}
                style={styles.tombol}>
                <Text style={styles.tekstombol}>Update Biodata</Text>
              </TouchableHighlight>
            </View>
                </View>
        </ScrollView>
    </View>
        );
      }
  }
   const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#F0F8FF',
      flex: 1,
    },

    vHeader: {
      flex: 10,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box1: {
      width: "120%",
      marginTop: 10,
      flex: 0.6,
      backgroundColor: '#F0F8FF',
      flexDirection: 'column',
      justifyContent : 'center',
    },
    teksinputteks:{
      flex : 1,
      flexDirection: 'row',
      marginHorizontal: '5%',
      marginBottom: 10,

  },
    txtBox1: {
      backgroundColor:'white',
      flex: 1,
      marginVertical: 20 ,
      margin:20,
      padding: 10,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      width: '70%',
      borderRadius: 5
    },
    textBox1:{
      color: 'white',
      fontSize: 15,
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    },
    box1:{
      flex:1,
      margin: 3,
    },
    tombol: {
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 15,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 20,
  },
  body4: {
    flex: 1,
    flexDirection: 'row'
  },
  tekstombol: {
    fontSize:15,
    color:'white'
  }
});
