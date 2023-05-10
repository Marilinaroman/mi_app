import {View} from 'react-native';
import {styles} from './style/style'
import { Profile, Reservas } from './screens';
import { Header } from './components';
import {  useState } from 'react';

export default function App() {

    
    return (
        <View style={styles.container}>
        <Header title={'Mi perfil'}/>
        <Profile/>
        </View>
    );
}