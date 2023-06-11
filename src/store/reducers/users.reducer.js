import { users } from "../../constants/data/users"
import { userTypes } from "../types/user.types"

const {ADD_USER, SELECT_USER} = userTypes

const initialState = {
    data: users,
    selected:null
}

const UsersReducer = (state = initialState ,action)=>{
    switch(action.type){
        case ADD_USER:
            return {data:[...users]}
        default:
            return state
    }
}

export default UsersReducer