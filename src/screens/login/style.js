import { StyleSheet } from "react-native";
import {theme} from '../../constants'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "80%",
        maxWidth: 400,
        padding: 15,
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        minHeight: 340,
    },
    contentRegister: {
        width: "80%",
        maxWidth: 400,
        padding: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        minHeight: '70%',
        
    },
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "75%",
        minHeight: 110,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.secundary,
        backgroundColor: theme.colors.secundary,
    },
    modalTitle: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        textAlign: "center",
    },
})