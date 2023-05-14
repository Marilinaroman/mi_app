import React, { useState } from "react";
import { Button, View } from "react-native";
import { Input } from "../../components";

const SignUp =({navigation})=>{
    const [usuario, setUsuario] = useState({
        email:'',
        password:'',
        passwordSame:''
    })
    
    
    return(
        <View>
            <Input 
            placeholder={'Ingrese su email'}
            onChangeText={(text) => setUsuario({...usuario, email:text})}
            value={usuario.email}
            />
            <Input placeholder={'Ingrese su contraseña'}
                onChangeText={(text) => setUsuario({...usuario, password:text})}
                value={usuario.password}
            />
            <Input placeholder={'Ingrese su contraseña'}
                onChangeText={(text) => setUsuario({...usuario, passwordSame:text})}
                value={usuario.passwordSame}
            />
            <Button title="Registrarme"/>
            <Button title="Iniciar sesion" onPress={()=>navigation.navigate('Login')} />
        </View>

    )
}

export default SignUp 