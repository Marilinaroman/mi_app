import React from 'react'
import {View, Text} from 'react-native'
import { styleHeader } from './style'

const header =({title})=>{
    return(
        <View style={styleHeader.container}> 
            <Text style={styleHeader.title}>{title}</Text>
        </View>
    )
}

export default header