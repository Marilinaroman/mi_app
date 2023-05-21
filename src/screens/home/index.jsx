import React, { useState } from "react";
import { View,SafeAreaView  } from "react-native";
import { Header, List, ListItem, CardUser, CardItem, MyCalendars } from "../../components/index";
import { categories } from "../../constants/data/categories";
import { stylesHome } from "./style";

const Home =({navigation})=>{



    return(
        <SafeAreaView style={stylesHome.container}>
            <View style={stylesHome.containerList}>
                <MyCalendars />
            </View>
            </SafeAreaView>
    )
}

export default Home