import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {stylesList} from './style'

const listItem = ({onPressFn, value})=>{

    return(
        <TouchableOpacity style={stylesList.itemContainer} onPress={onPressFn}>
        <Text style={stylesList.item}>{value}</Text>
        </TouchableOpacity>
    )
}

export default listItem