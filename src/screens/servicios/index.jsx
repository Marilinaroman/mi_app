import React, { useState } from "react";
import { Button, View, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header, List, ServiciosItem, ModalItem, SelectionList} from "../../components";
import { stylesService } from "./style";
import { Animated } from "react-native";
import { MisServicios } from "../../constants/data";
import { theme } from "../../constants";
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const Servicios =()=>{

    const [modalVisible, setModalVisible] = useState(false)
    const [service, setService] = useState(MisServicios)
    const [userSelection, setUserSelection] = useState()
    const [actSelected, setActSelected] = useState()

    
    const onHandlerCancelModal =()=>{
        setModalVisible(!modalVisible);
    }

    const onHandlerDeleteModal =()=>{
        const id = userSelection ? userSelection.id : ''
        let newService = service.filter((e)=>e.id !== id)
        setService(newService)
        setModalVisible(!modalVisible);
    }

    const onHandlerModal = (item) => {
        setUserSelection(item)
        setModalVisible(!modalVisible)
    }

    const addService =()=>{
        setModalSelectionVisible(!modalVisible)
    }


    const renderItem = ({item})=>(
        <ServiciosItem item={item} styleContainer={stylesService.list} onHandlerModal={onHandlerModal}/>
    )

    

    console.log(data);
    return(
        <View style={stylesService.container}>
            <View>
                <MultipleSelectList 
                    setSelected={(val) => setActSelected(val)}
                    data={data} 
                    save="value"
                    placeholder={'Agregar '}
                />
            </View>


            <View style={stylesService.listContainer}>
                    <List
                        itemRender={renderItem}
                        infoData={service}
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