import ImgUser from "../../models/userImg"
import {imgTypes} from '../types'

const { ADD_IMG, SELECT_DATA} = imgTypes

const initialState = {
    image: []
}

const ImgUserReducer = (state = initialState ,action)=>{
    switch(action.type){
        case ADD_IMG:
            console.log('hola');
            const newImg = new ImgUser({id:action.payload.id.toString(),image:action.payload.image})
            console.log('esta es la nueva img' + newImg);
            return{
                ...state,
                image: state.image.concat(newImg)
            }
        case SELECT_DATA:
            return{
                ...state,
                image: action.data.map(item=> new ImgUser(item.id.toString(), item.image))
            }
        default:
            return state
    }
}

export default ImgUserReducer