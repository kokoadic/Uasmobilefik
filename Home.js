import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Login';
import Menu from './Menu';
import Listanggota from './Listanggota';
import Tambahpeminjaman from './Tambahpeminjaman';
import Tambahbuku from './Tambahbuku';
import Tambahanggota from './Tambahanggota';
import Listbuku from './Listbuku';
import Listpeminjaman from './Listpeminjaman';
import About from './About.js';
import DetailMahasiswa from './DetailMahasiswa';
import Login from './Login.js';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Menu: Menu,
            DetailMahasiswa: DetailMahasiswa,
            Listanggota:Listanggota,
            Tambahpeminjaman:Tambahpeminjaman,
            Tambahbuku:Tambahbuku,
            Tambahanggota:Tambahanggota,
            Listbuku:Listbuku,
            Listpeminjaman:Listpeminjaman,
                About: About,
                Login: Login,
        },
        {
            headerMode: 'none',
            navigationOptions: {
              headerVisible: false,
            },
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
