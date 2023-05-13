import { StyleSheet } from "react-native";
import {theme} from '../../constants'

export const styleHeader = StyleSheet.create({
    container:{
        height:120,
        marginHorizontal:0,
        backgroundColor:theme.colors.secundary,
        justifyContent:"center",
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    title:{
        fontSize:20,
        marginTop:20,
        color:theme.colors.textPrimary,
        fontFamily: 'Sans-Bold'
    }
})