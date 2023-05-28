import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styleModal } from "./style";

const modalItem = ({isVisible, animationType, onCancel, onDelete})=>{

    return(
        <Modal visible={isVisible} animationType={animationType} >
            <View style={styleModal.modalContainer}>
                <Text>Estas seguro de eliminar esta actividad?</Text>
                <View style={styleModal.modalButtonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onCancel}
                            style={styleModal.buttonCancel}>
                            <Text >Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onCancel}
                            style={styleModal.buttonDelete}>
                            <Text >Eliminar</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </Modal>
    )
}

export default modalItem