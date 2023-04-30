import React from "react";
import { TextInput, Button, View } from "react-native";
import {stylesInput} from './styles'

const Input = ({placeholder, value, onChangeText,onHandlerButton,titleButton})=>{

    return(
        <View style={stylesInput.inputContainer}>
            <TextInput placeholder={placeholder} style={stylesInput.input}  value={value} onChangeText={(text)=>onChangeText(text)}/>
            <Button title={titleButton} onPress={onHandlerButton}/>
        </View>
    )
}
export default Input