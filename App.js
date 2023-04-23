import { Text, TextInput, View, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {styles} from './style/style'
import { useState } from 'react';

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
    <TouchableOpacity style={styles.itemContainer} onPress={()=>onHandlerModal(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
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
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingrese un dato' style={styles.input}  value={text} onChangeText={(text)=>setText(text)}/>
        <Button title='agregar' onPress={onAddEvent}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
        keyExtractor={(item)=> item.id}
        renderItem={renderItem}
        data={event}
        alwaysBounceVertical={false}
        />
        <Modal visible={modalVisible} animationType='slide'>

          <View>
            <Text>Estas seguro de eliminar este texto?</Text>
            <Text>{selectEvent?.event}</Text>
          </View>

          <View>
            <Button
            title='Cancelar'
            color='yellow'
            onPress={onHandlerModalCancel}
            />
            <Button
            title='Eliminar'
            color='red'
            onPress={()=>onHandlerModalDelete(selectEvent.id)}
            />
          </View>

        </Modal>
      </View>
    </View>
  );
}


