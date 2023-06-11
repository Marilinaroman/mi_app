import React, { useState } from "react";
import { Button, View } from "react-native";
import { ImageSelector, Input } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addUserToDB } from "../../store/actions/users.action";
import {style} from './style'

const SignUp =({navigation})=>{
    const dispatch = useDispatch()
    const [usuario, setUsuario] = useState({
        email:'',
        password:'',
        name:'',
        lastname:'',
        img:''
    })

    const onConfirmRegister = ()=>{
        dispatch(addUserToDB(usuario))
    }
    
    
    return(
        <View style={style.container}>
            <Input 
            placeholder={'Ingrese su email'}
            onChangeText={(text) => setUsuario({...usuario, email:text})}
            value={usuario.email}
            />
            <Input placeholder={'Ingrese su contraseña'}
            
                onChangeText={(text) => setUsuario({...usuario, password:text})}
                value={usuario.password}
            />
            <Input placeholder={'Ingrese su nombre'}
                onChangeText={(text) => setUsuario({...usuario, name:text})}
                value={usuario.name}
            />
            <Input placeholder={'Ingrese su apellido'}
                onChangeText={(text) => setUsuario({...usuario, lastname:text})}
                value={usuario.lastname}
            />
            <ImageSelector />
            <Button title="Registrarme" onPress={onConfirmRegister}/>
            <Button title="Iniciar sesion" onPress={()=>navigation.navigate('Login')} />
        </View>

    )
}

export default SignUp 