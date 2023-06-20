import React from "react";
import { TextInput, Button, View, Text } from "react-native";
import {stylesInput} from './styles'
import { theme} from '../../constants/theme'

const Input = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor = theme.colors.primary,
    keyboardType = "default",
    hasError,
    error,
    touched,
    label,
    ...props
})=>{

    return(
        <View style={stylesInput.inputContainer}>
            <Text >{label}</Text>
            <TextInput
                    {...props}
                    editable={editable}
                    autocorrect={false} 
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    style={stylesInput.input}  
                    value={value} 
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}/>
            {hasError && touched ? (
                <View style={stylesInput.errorContainer}>
                <Text style={stylesInput.errorMessage}>{error}</Text>
                </View>
            ) : null}
        </View>
    )
}
export default Input