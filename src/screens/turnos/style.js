import {StyleSheet} from 'react-native'
import { theme } from '../../constants'



export const stylesTurno = StyleSheet.create({
    container: {
        flex:1,
    },
    containerList: {
        marginHorizontal: 20,
        height:300,
        marginVertical: 10,
        
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Sans-Medium',
        color: theme.colors.white,
    },
    containerSelectList: {
        marginHorizontal: 20,
        height:300,
        marginVertical: 10,
    },
    selectList:{
        elevation: 8,
        backgroundColor: theme.colors.secundary,
        marginBottom:20,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    

})