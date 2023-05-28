import React, { useState } from "react";
import { Button, View, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header, List, ServiciosItem, ModalItem} from "../../components";
import { stylesService } from "./style";
import { Animated } from "react-native";
import { MisServicios } from "../../constants/data";
import { theme } from "../../constants";

const Servicios =()=>{

    const [modalVisible, setModalVisible] = useState(false)
    const [selected, setSelected] = useState()

    const onHandlerCancelModal =()=>{
        setModalVisible(!modalVisible);
    }
    const onHandlerDeleteModal =()=>{
        const id = selected ? selected.id : ''
        
    }

    const onHandlerModal = (item) => {
        setSelected(item)
        setModalVisible(!modalVisible)
    }

    const addService =()=>{

    }


    const renderItem = ({item})=>(
        <ServiciosItem item={item} styleContainer={stylesService.list} onHandlerModal={onHandlerModal}/>
    )

    return(
        <View style={stylesService.container}>
            <TouchableOpacity
            style={stylesService.add}
            onPress={addService}
            activeOpacity={0.5}>
            <Animated.View style={stylesService.img}>
                    <Ionicons name={"add-circle"} size={28} color={theme.colors.primary} />
                    </Animated.View>
            <Text style={stylesService.text}>Nueva Actividad</Text>
            </TouchableOpacity>
            <View style={stylesService.listContainer}>
                    <List
                        itemRender={renderItem}
                        infoData={MisServicios}
                        keyExtractor={(item)=>item.id}
                        onHandlerModal={onHandlerModal}
                        
                    />
                    <ModalItem isVisible={modalVisible}
                        onCancel={onHandlerCancelModal}
                        onDelete={onHandlerDeleteModal}
                        />

            </View>
        </View>

    )
}

export default Servicios