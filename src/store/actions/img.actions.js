import * as FileSystem from 'expo-file-system'
import {imgTypes} from '../types'


const { ADD_IMG} = imgTypes

export const saveImg = (uri) =>{
    console.log(uri);
    return async (dispatch)=>{
        const fileName = uri.split('/').pop()
        const newPath = `${FileSystem.documentDirectory}${fileName}`
        try {
            await FileSystem.copyAsync({
                from:uri,
                to: newPath
            })
        } catch (error) {
            console.log(error);
        }
        dispatch({type:ADD_IMG, payload:{image:newPath}})
    }
} 