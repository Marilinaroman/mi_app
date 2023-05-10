import {StyleSheet} from 'react-native'
import { theme } from '../../constants'

export const stylesList = StyleSheet.create({
    itemContainer: {
        height:80,
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        marginVertical: 10,
    },
    item: {
        marginHorizontal: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})