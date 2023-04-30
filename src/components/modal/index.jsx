import React from "react";
import { Modal, View, Text, Button } from "react-native";

const modalItem = ({isVisible, animationType, onCancel, onDelete, selectedEvent})=>{

    return(
        <Modal visible={isVisible} animationType={animationType}>

            <View>
                <Text>Estas seguro de eliminar este texto?</Text>
                <Text>{selectedEvent?.value}</Text>
            </View>

            <View>
                <Button
                title='Cancelar'
                color='yellow'
                onPress={onCancel}
                />
                <Button
                title='Eliminar'
                color='red'
                onPress={onDelete}
                />
            </View>

            </Modal>
    )
}

export default modalItem