import React, { useState } from "react";
import { Button, View } from "react-native";
import { Input } from "../../components";
import {styles } from "../../style/style";
import {Profile} from '../profile'

const login =()=>{

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    })
    

    
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
            />
        
        </View>
    )
}

export default login 