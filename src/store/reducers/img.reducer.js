import ImgUser from "../../models/userImg"
import {imgTypes} from '../types'

const { ADD_IMG} = imgTypes

const initialState = {
    image: []
}

const ImgUserReducer = (state = initialState ,action)=>{
    switch(action.type){
        case ADD_IMG:
            const newImg = new ImgUser({id:Date.now(),image:action.payload.image})
            console.log('esta es la nueva img' + newImg);
            return{
                ...state,
                image: state.image.concat(newImg)
            }
            default:
                return state
    }
}

export default ImgUserReducer