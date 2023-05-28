import React from "react";
import { TouchableOpacity, Modal, Text, View, Image, VirtualizedList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../constants";
import { Animated } from "react-native";
import { useState } from "react";
import { ModalItem } from "..";

const ServiciosItem = ({item, styleContainer, onHandlerModal})=>{

    const colors = item.color? item.color : ''

    return(
        <TouchableOpacity style={{...styleContainer, backgroundColor:colors}} onPress={() => onHandlerModal(item)}>
            <Text>{item.title}</Text>
                    <Animated.View>
                        <Ionicons name={"trash"} size={24} color={theme.colors.primary} />
                    </Animated.View>
            
                
        </TouchableOpacity>
    )
}

export default ServiciosItem