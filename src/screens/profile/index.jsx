import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Header, List, ListItem, CardUser, CardItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import{stylesProfile} from './style'
import {loadImage} from '../../store/actions'

const Profile =()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadImage())
    },[])
    
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