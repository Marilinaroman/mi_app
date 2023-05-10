import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import {stylesList} from './style'

const listItem = ({title})=>{

    return(
        <TouchableOpacity style={stylesList.itemContainer}>
            <Text style={stylesList.item}>{title}</Text>
        </TouchableOpacity>
        
    )
}

export default listItem