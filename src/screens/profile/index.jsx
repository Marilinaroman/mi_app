import React, { useState } from "react";
import { View } from "react-native";
import { Header, List, ListItem, CardUser, CardItem } from "../../components/index";
import { useSelector } from "react-redux";
import{stylesProfile} from './style'

const Profile =()=>{
    
    const user = useSelector((state)=> state.users.data)

    const renderCard =({item})=>(
        <CardItem {...item}/>
    )

    return(
        <View>
            
            <View>
                <CardUser
                    cardRender={renderCard}
                    dataUser={user}
                    keyExtractor={(item)=> item.id}
                />
            </View>
            
        </View>
    )
}

export default Profile