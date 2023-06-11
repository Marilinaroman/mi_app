import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {UsersReducer} from './reducers'

const rootReducer = combineReducers({
    users: UsersReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, composedEnhancer)