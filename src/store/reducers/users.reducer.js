import { users } from "../../constants/data/users"

const initialState = {
    data: users,
    selected:null
}

const UsersReducer = (state = initialState ,action)=>{
    return state
}

export default UsersReducer