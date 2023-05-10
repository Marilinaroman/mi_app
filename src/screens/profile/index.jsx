import React, { useState } from "react";
import { View } from "react-native";
import { Header, List, ListItem, CardUser, CardItem } from "../../components/index";
import{stylesProfile} from './style'

const Profile =()=>{

    

    const user =[
        { 
        id:1,
        name:'Marilina',
        img: 'https://s1.abcstatics.com/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg'
        }]

    const sections = [
        {
            name:'Mis servicios',
            id:1
        },
        {
            name:'Mis reservas',
            id:2
        },
        {
            name:'Mis pagos',
            id:3
        },
    ]

    const renderItem = ({item})=>(
        <ListItem title={item.name}/>
    )

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
            <View>
                <List
                    itemRender={renderItem}
                    infoData={sections}
                    keyExtractor={(item)=>item.id}
                />
            </View>
            
        </View>
    )
}

export default Profile