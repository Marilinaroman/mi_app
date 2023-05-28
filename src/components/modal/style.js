import {StyleSheet} from 'react-native'
import { theme } from '../../constants'

export const styleModal = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
    },
    buttonDelete: {
        elevation: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonCancel: {
        elevation: 8,
        backgroundColor: theme.colors.secundary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    
    modalButtonContainer: {
        marginTop:20,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    }
})