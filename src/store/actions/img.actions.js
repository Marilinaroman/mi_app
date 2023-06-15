import * as FileSystem from 'expo-file-system'
import {imgTypes} from '../types'
import { insertData } from '../../db'
import { selectData } from '../../db'

const { ADD_IMG, SELECT_DATA} = imgTypes

export const saveImg = (uri) =>{
    return async (dispatch)=>{
        const fileName = uri.split('/').pop()
        const newPath = `${FileSystem.documentDirectory}${fileName}`

        try {
            
            const result = await insertData(
                address,
                image)
            console.log('result is' +result);

            

        } catch (error) {
            console.log('el error es '+error);
        }
        dispatch({type:ADD_IMG, payload:{id:result.insertId, address:'victorino', image:newPath}})
    }
}

export const loadImage = ()=>{
    return async(dispatch)=>{
        try {
             const result = await selectData()
             console.log(result)
             dispatch({type:SELECT_DATA, data:result.rows._array})
        } catch (error) {
            console.log(error);
        }
    }
}