import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { Header,MyCalendars, Select } from "../../components";
import { stylesTurno } from "./style";
import {MisServicios} from '../../constants/data'

const Turnos =()=>{

    const [activity, setActivity] = useState('')
    const [days, setDays] = useState('')
    const [hour, setHour] = useState('')
    const [selected,setSelected] = useState([])
    
    
    const addActivity=()=>{
        setSelected([selected,{...activity, days:days, hour:hour}])
        setDays('')
        setHour('')
        setActivity('')
    }

    console.log(selected);
    

    return(
        <SafeAreaView style={stylesTurno.container}>
            <View style={stylesTurno.containerSelectList}>

            <TouchableOpacity
            style={stylesTurno.selectList}
            >
                <Select info={activity.title} data={MisServicios} onSelect={setActivity} />
            </TouchableOpacity>

            <TouchableOpacity
            style={stylesTurno.selectList}>
                <Select info={ days} data={activity.days} onSelect={setDays}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={stylesTurno.selectList}>
                <Select info={hour} data={activity.hour} onSelect={setHour} />
            </TouchableOpacity>

            <TouchableOpacity
            disabled={!activity}
            onPress={addActivity}>
                <Text>Aceptar</Text>
            </TouchableOpacity>
            
            
            </View>
            <View style={stylesTurno.containerList}>
                <MyCalendars />
            </View>
            </SafeAreaView>

    )
}

export default Turnos
