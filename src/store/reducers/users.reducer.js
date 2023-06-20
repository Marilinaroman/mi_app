import { users } from "../../constants/data/users"
import { userTypes } from "../types/user.types"

const {
    ADD_USER, 
    SELECT_USER,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    CLEAR_ERROR
    } = userTypes

const initialState = {
    data: users,
    selected:null,
    isLoading: false,
    error: null,
    token: null,
    userId: null,
    hasError: false,
}

const UsersReducer = (state = initialState ,action)=>{
    switch(action.type){
        case ADD_USER:
            return {data:[...users]}
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_UP_SUCCESS:
            return {
            ...state,
            token: action.token,
            userId: action.userId,
            isLoading: false,
            error: null,
            hasError: false,
            };
        case SIGN_UP_FAILURE:
            return {
            ...state,
            token: null,
            userId: null,
            isLoading: false,
            error: action.error,
            hasError: true,
            };
        case SIGN_IN_REQUEST:
            return {
            ...state,
            isLoading: true,
            };
        case SIGN_IN_SUCCESS:
            return {
            ...state,
            token: action.token,
            userId: action.userId,
            isLoading: false,
            error: null,
            hasError: false,
            };
        case SIGN_IN_FAILURE:
            return {
            ...state,
            token: null,
            userId: null,
            isLoading: false,
            error: action.error,
            hasError: true,
            };
        case CLEAR_ERROR:
            return {
            ...state,
            error: null,
            hasError: false,
            };
        default:
            return state;
        }
}

export default UsersReducer