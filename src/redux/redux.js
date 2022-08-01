import React from "react";
import {createStore} from "redux";

export const REDUXCONST = "REDUXCONST";


const intialState = {
    email: "admin@gmail.com",
    password: "12345"
}

const loginReducer = (state=intialState,action) =>{
    switch(action.type){
        case REDUXCONST:
            return{
                ...state
            }
            default:
                return state;
    }
}

export const store = createStore(loginReducer)