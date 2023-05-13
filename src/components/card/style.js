import {StyleSheet} from 'react-native'
import { theme } from '../../constants'

export const stylesDataUSer = StyleSheet.create({
    dataContainer:{
        height:150,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
    },
    imageUser:{
        width: 150,
        height: 150,
        borderRadius: 150/2,
    },
    dataUser:{
        color:theme.colors.black,
        alignContent:'center',
        marginLeft:20,
        fontFamily:'Sans-Bold'

    }
})