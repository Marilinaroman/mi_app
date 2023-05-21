import React, { useState } from "react";
import { Button, View } from "react-native";
import { Input } from "../../components";
import {styles } from "../../style/style";
import useOrientation from '../../hooks/usePortrait'

const Login =({navigation})=>{

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    })
    
    const {isPortrait} = useOrientation()
    
    return(
        <View>
            <Input 
                placeholder={'Ingrese su email'}
                onChangeText={(text) => setUsuario({...usuario,email:text})}
                value={usuario.email}
                />
            <Input 
                placeholder={'Ingrese su contraseña'}
                onChangeText={(text) => setUsuario({...usuario,password:text})}
                value={usuario.password}
            />
            <Button title="Ingresar" style={styles.buttonConfirm}
            disabled={usuario.email===''  || usuario.password===''}
            onPress={()=>navigation.navigate('Home')}
            />
            <Button title="Registrarme" onPress={()=>navigation.navigate('SignUp')}
            />
        
        </View>
    )
}

export default Login 