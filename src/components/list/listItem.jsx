import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../constants";
import { Animated } from "react-native";

const listItem = ({item, styleContainer, onSelected, img})=>{

    const colors = item.color? item.color : ''

    return(
        <TouchableOpacity style={{...styleContainer, backgroundColor:colors}} onPress={()=>onSelected(item)}>
            <Text>{item.title}</Text>
            {img?
                
                <Animated.View>
                    <Ionicons name={"trash"} size={24} color={theme.colors.primary} />
                </Animated.View>
            : null}
        </TouchableOpacity>
    )
}

export default listItem