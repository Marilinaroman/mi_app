import React from "react";
import { TouchableOpacity, Text, View, Image} from "react-native";
import {stylesDataUSer} from './style'

const cardItem = (user)=>{

    return(
        <View style={stylesDataUSer.dataContainer}>
            <Image
            style={stylesDataUSer.imageUser}
            source={{uri:user.img}}
            />
            <Text style={stylesDataUSer.dataUser}>{user.name}</Text>
        </View>
        
    )
}

export default cardItem