import { StyleSheet } from "react-native";

export const stylesService = StyleSheet.create({
    container: {
        flex: 1,
    },
    add:{
        width:200,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    img:{
        marginRight:20

    },
    text:{
        fontFamily:'Sans-Regular',
        fontSize:25,
    },
    listContainer:{
        flex:1,
        marginHorizontal:15
    },
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:25
    }
})