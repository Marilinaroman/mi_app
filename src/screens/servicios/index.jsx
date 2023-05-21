import React from "react";
import { Button, View, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header, List, ListItem} from "../../components";
import { stylesService } from "./style";
import { Animated } from "react-native";
import { MisServicios } from "../../constants/data";
import { theme } from "../../constants";

const Servicios =()=>{
/* 
    const onSelected =(item)=>{
        if(item) return navigation.navigate(item.screen,{
            title: item.title
        })
    }*/

    const renderItem = ({item})=>(
        <ListItem item={item} styleContainer={stylesService.list}  img={true}/>
    ) 


    return(
        <View style={stylesService.container}>
            <TouchableOpacity
            style={stylesService.add}
            activeOpacity={0.5}>
            <Animated.View style={stylesService.img}>
                    <Ionicons name={"add-circle"} size={28} color={theme.colors.primary} />
                    </Animated.View>
            <Text style={stylesService.text}>Nuevo servicio</Text>
            </TouchableOpacity>
            <View style={stylesService.listContainer}>
                <List
                    itemRender={renderItem}
                    infoData={MisServicios}
                    keyExtractor={(item)=>item.id}
                />

            </View>
        </View>

    )
}

export default Servicios