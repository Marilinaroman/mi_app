import { Text, TextInput, View, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {styles} from './style/style'
import { useState } from 'react';
import { Input, List, ListItem, ModalItem } from './components/index'

export default function App() {

    const [text, setText] = useState('')
    const [event, setEvent] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [selectEvent, setSelectedEvent] = useState(null)


    const onAddEvent = () =>{
        if(text.length==0) return
        setEvent([
        ...event,
        {
            id: Math.random().toString(),
            value: text
        }
        ]);
        setText('')
    }

    const renderItem = ({item})=>(
        <ListItem
            onPressFn={()=>onHandlerModal(item.id)}
            value={item.value}
        />
    )

    const onHandlerModal = (id) =>{
        setModalVisible(!modalVisible)
        const selectedEvent = event.find(event=> event.id === id)
        setSelectedEvent(selectedEvent)
    }

    const onHandlerModalCancel = ()=>{
        setModalVisible(!modalVisible)
        setSelectedEvent(null)
    }
    const onHandlerModalDelete = (id)=>{
        setEvent(event.filter(event => event.id !== id))
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.container}>
        <Input
            placeholder={'Ingrese un dato'}
            onChangeText={(text) => setText(text)}
            onHandlerButton={onAddEvent}
            titleButton={'Add'}
            value={text}

        />
        <View style={styles.listContainer}>
            <List 
            keyExtractor={(item)=> item.id}
            itemRender={renderItem}
            infoData={event}
            />
            <ModalItem 
                isVisible={modalVisible}
                animationType='slide' 
                selectEvent={selectEvent}
                onCancel={onHandlerModalCancel}
                onDelete={onHandlerModalDelete.bind(this, selectEvent?.id)}
            />
        </View>
        </View>
    );
    }