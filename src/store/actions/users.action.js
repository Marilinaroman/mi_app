import { FIREBASE_REALTIME_DB_URL } from "../../constants";
import { userTypes } from "../types/user.types";

const {ADD_USER, SELECT_USER} = userTypes

export const addUserToDB = (user)=>{
    console.log(user);
    return async (dispatch) =>{
        try{
            const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/users.json`,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: Date.now(),
                    user
                }),
            })
            const result = await response.json();

            dispatch({
                type: ADD_USER,
                result,
            });

        } catch(error){
            console.log(error);
        }
    }
}
