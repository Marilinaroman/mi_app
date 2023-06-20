import { StyleSheet } from "react-native";
import {theme} from '../../constants'

export const styleImageSelector = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        marginTop:0,
        width: "100%",
        height: '80%',
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.primary,
        borderWidth: 1,
    },
    image: {
        marginTop:0,
        width: "100%",
        height: "100%",
    },
})