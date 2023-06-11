import { View, Button, Text, Image, Alert } from "react-native";
import {styleImageSelector} from './style'
import { useState } from "react";
import {requestCameraPermissionsAsync, launchCameraAsync} from 'expo-image-picker'

export const ImageSelector = ({onImage})=>{

    const [picked, setPicked] = useState(null)

    const onHandlerTouchImg = async()=>{
        const isCamera = await verifyPermissions()

        if(!isCamera) return;
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect:[16,9],
            quality: 0.7
        })

        setPicked(image.assets[0].uri)
        onImage(image.assets[0].uri)

    }

    const verifyPermissions = async()=>{
        const {status} = await requestCameraPermissionsAsync()

        if(status !== 'granted'){
            Alert.alert('Permiso denegado', 'Necesitamos permisos para acceder a la camara', [{text:'Ok'}])
            return false
        }

        return true
    }

    return(
        <View style={styleImageSelector.container}>
            <View style={styleImageSelector.preview}>
                {!picked ? (<Text>No hay imagen</Text>):
                <Image source={{uri: picked}} style={styleImageSelector.image}/>}
            </View>
            <Button title="Tomar foto" onPress={onHandlerTouchImg}/>
        </View>
    )
}
export default ImageSelector