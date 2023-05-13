import React from "react";
import { TextInput, Button, View } from "react-native";
import {stylesInput} from './styles'

const Input = ({placeholder, value, onChangeText})=>{

    return(
        <View style={stylesInput.inputContainer}>
            <TextInput autocorrect={false} 
            placeholder={placeholder} 
            style={stylesInput.input}  
            value={value} 
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text)=>onChangeText(text)}/>
        </View>
    )
}
export default Input