import React from "react";
import { FlatList } from "react-native";

const cardUser = ({cardRender, keyExtractor, dataUser})=>{

    return(
        <FlatList 
            keyExtractor={keyExtractor}
            renderItem={cardRender}
            data={dataUser}
            alwaysBounceVertical={false}
            />)
}

export default cardUser