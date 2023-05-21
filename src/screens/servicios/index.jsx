import React from "react";
import { Button, View, TouchableOpacity, Image, Text } from "react-native";
import { Header, List, ListItem} from "../../components";
import { stylesService } from "./style";
import agregar from '../../../assets/img/agregar.png'
import eliminar from '../../../assets/img/borrar.png'
import { MisServicios } from "../../constants/data";

const Servicios =()=>{
/* 
    const onSelected =(item)=>{
        if(item) return navigation.navigate(item.screen,{
            title: item.title
        })
    }*/

    const renderItem = ({item})=>(
        <ListItem item={item} styleContainer={stylesService.list}  styleText={stylesService} img={eliminar}/>
    ) 


    return(
        <View style={stylesService.container}>
            <TouchableOpacity
            style={stylesService.add}
            activeOpacity={0.5}>
            <Image
                source={agregar}
                style={stylesService.img}
            />
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