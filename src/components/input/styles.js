import {StyleSheet} from 'react-native'
import { theme} from '../../constants/theme'

export const stylesInput = StyleSheet.create({
    inputContainer: {
        flex: 1,
    },
    input: {
        width: '80%',
        fontSize: 15,
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 1,
        fontFamily: "Sans-Regular",
        color: theme.colors.text,
        paddingVertical: 1,
    },
    errorContainer: {
        flex: 1,
        marginVertical: 2,
    },
    errorMessage: {
        fontSize: 12,
        fontFamily: "Sans-Regular",
        paddingVertical: 2,
        color: theme.colors.primary,
    },
})