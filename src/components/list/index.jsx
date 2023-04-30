import React from "react";
import { FlatList } from "react-native";

const list = ({itemRender, keyExtractor, infoData})=>{

    return(
        <FlatList 
            keyExtractor={keyExtractor}
            renderItem={itemRender}
            data={infoData}
            alwaysBounceVertical={false}
            />)
}

export default list