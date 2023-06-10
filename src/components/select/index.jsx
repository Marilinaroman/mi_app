import React, { useState, useRef } from "react";
import { FlatList,
    Text,
    TouchableOpacity,
    Modal,
    View, } from "react-native";
import {styleSelectList} from './style'

const Select = ({info,data, onSelect})=>{
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState();
    const [dropdownTop, setDropdownTop] = useState(0);


    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };
    

    const openDropdown = ()=> {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);
        });
        setVisible(true);
    };
    

    const onItemPress = (item) => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };
    
    const renderItem = ({ item }) => {
            return(
                <TouchableOpacity style={styleSelectList.item} onPress={() => onItemPress(item)}>
                    <Text style={styleSelectList.itemText}>{item.title? item.title :item}</Text>
                </TouchableOpacity>)
        }

    const renderDropdown = ()=> {
        return (
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                style={styleSelectList.overlay}
                    onPress={() => setVisible(false)}
                >
                <View style={[styleSelectList.dropdown, { top: dropdownTop }]}>
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                </TouchableOpacity>
            </Modal>
            );
    };
    
    
    return(
        <TouchableOpacity
        ref={DropdownButton}
        onPress={toggleDropdown}
        style={styleSelectList.button}
        >
        {renderDropdown()}
        <Text style={styleSelectList.buttonText} >
            {!!selected &&  info}
        </Text>
        </TouchableOpacity>
    )
}
export default Select