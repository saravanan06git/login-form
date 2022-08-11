import React from "react";
import {createStore} from "redux";

export const REDUXCONST = "REDUXCONST";

export const ADDALLVAL = "ADDALLVAL";

export const EDITALLVAL = "EDITALLVAL";

const reduxState = {
    email: "admin@gmail.com",
    password: "12345",
    // addDataVal:[{
    //     temp2m: "",
    //     timepoint: "",
    //     transparency:"",
    //     wind10m: {direction: "", speed: ""},
    //     id:0
    // }]
}

const loginReducer = (state=reduxState,action) =>{
    switch(action.type){
        case REDUXCONST:
            return{
                ...state
            }
            // case ADDALLVAL:
            //     return[
            //         ...state,
            //         action.payload
            //     ];
            //     case EDITALLVAL:
            //         const editUpdate = state.map((state)=>state.id === action.payload.id ? action.payload : state)
            //         return editUpdate      
            default:
                return state;
    }
}

// export const addFun = (data) =>{
//     return{
//         type:ADDALLVAL,
//         payload: data
//     }
// }

// export const editFun = (data) =>{
//     return{
//         type:EDITALLVAL,
//         payload: data
//     }
// }

export const store = createStore(loginReducer)