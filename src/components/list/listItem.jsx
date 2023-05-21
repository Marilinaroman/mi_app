import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

const listItem = ({item, styleContainer, styleText, onSelected, img})=>{
    const colors = item.color? item.color : ''
    return(
        <TouchableOpacity style={{...styleContainer, backgroundColor:colors}} onPress={()=>onSelected(item)}>
            
            <Text style={styleText}>{item.title}</Text>

            {img? <Image
                source={img}
            /> : null}
        </TouchableOpacity>
        
    )
}

export default listItem