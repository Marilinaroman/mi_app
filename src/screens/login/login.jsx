import React, { useState, useReducer } from "react";
import { Button, View, Text, Modal, ActivityIndicator, TouchableOpacity} from "react-native";
import {style } from "./style";
import useOrientation from '../../hooks/usePortrait'
import { useDispatch, useSelector } from "react-redux";
import {  UPDATE_FORM, onInputChange } from '../../utils/form'
import { clearError, signIn,signUp  } from "../../store/actions";
import { theme } from "../../constants";
import { ImageSelector, Input } from "../../components";
import { addUserToDB } from "../../store/actions";
import {saveImg} from '../../store/actions'

const initialState = {
    email: { value: "", error: "", touched: false, hasError: true },
    password: { value: "", error: "", touched: false, hasError: true },
    isFormValid: false,
};


const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
        return {
            ...state,
            [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
        },
        isFormValid,
    };
    }
};

const Login =()=>{

    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const { error, isLoading, hasError } = useSelector((state) => state.users);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? "Login" : "Register";

    const onHandleChangeAuth = () => {
        setIsLogin(!isLogin);
    };


    const onHandleAuth = () => {
        console.log(isLogin);
        dispatch(
            isLogin
                ? signIn({ email: formState.email.value, password: formState.password.value })
                : signUp({ email: formState.email.value, password: formState.password.value })
        )
    }
        
    const onHandleButtonModal = () => {
            dispatch(clearError());
        };
        
    const onHandlerInputChange = ({ value, name }) => {
        onInputChange({ name, value, dispatch: dispatchFormState, formState});
    };
    const onImage= (uri)=>{
        dispatch(saveImg(uri))
    }
    
    
    
    const {isPortrait} = useOrientation()
    
    return(
        <View style={style.container}>
            <View style={isLogin? style.content : style.contentRegister}>
                <Text>{title}</Text>
                <Input 
                    placeholder="email@gmail.com"
                    placeholderTextColor={theme.colors.black}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandlerInputChange({ value: text, name: "email" })}
                    value={formState.email.value}
                    label="Email"
                    error={formState.email.error}
                    touched={formState.email.touched}
                    hasError={formState.email.hasError}
                    />
                <Input
                    placeholder="********"
                    placeholderTextColor={theme.colors.black}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandlerInputChange({ value: text, name: "password" })}
                    value={formState.password.value}
                    label="Password"
                    error={formState.password.error}
                    touched={formState.password.touched}
                    hasError={formState.password.hasError}
                    />
                    {isLogin? null :<ImageSelector onImage={onImage} />}
            </View>            
            {isLogin? 
            <View>
                <Button 
                title="Registrarme"  
                onPress={onHandleChangeAuth}
                />
                <Button 
                disabled={!formState.isFormValid}
                title="Ingresar" 
                onPress={onHandleAuth}/>
            </View>
            :
            <View>
                
                <Button 
                title="Ingresar" 
                style={style.buttonConfirm}
                onPress={onHandleChangeAuth}
                /> 
                <Button 
                title="Registrarme" 
                disabled={!formState.isFormValid}
                onPress={onHandleAuth}/>
            </View>}
            <Modal visible={hasError || isLoading} transparent animationType="fade">
                <View style={style.containerStyle}>
                    <View style={style.modalContainer}>
                        <Text style={style.modalTitle}>{error ? error : "Loading"}</Text>
                        {error ? (
                        <Button title="OK" color={theme.colors.text} onPress={onHandleButtonModal} />
                        ) : (
                        <ActivityIndicator size="small" color={theme.colors.text} />
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Login 