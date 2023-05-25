import { createStore, combineReducers } from "redux";
import UsersReducer from "./reducers/users.reducer";

const rootReducer = combineReducers({
    users: UsersReducer
})

export default createStore(rootReducer)