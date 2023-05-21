import React, { useState } from "react";
import { View,SafeAreaView  } from "react-native";
import { Header, List, ListItem, CardUser, CardItem } from "../../components/index";
import { categories } from "../../constants/data/categories";
import { stylesHome } from "./style";

const Home =({navigation})=>{


    const onSelected =(item)=>{
        if(item) return navigation.navigate(item.screen,{
            title: item.title
        })
    }

    const renderItem = ({item})=>(
        <ListItem item={item} styleContainer={stylesHome.contentContainer}  styleText={stylesHome.text} onSelected={onSelected}/>
    )

    return(
        <SafeAreaView style={stylesHome.container}>
            <View style={stylesHome.containerList}>
                <List
                    itemRender={renderItem}
                    infoData={categories}
                    keyExtractor={(item)=>item.id}
                />

            </View>
            </SafeAreaView>
    )
}

export default Home