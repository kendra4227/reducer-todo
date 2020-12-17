import React, {useState, useReducer} from 'react';

// actions
export const ADD_TODO = "ADD-ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_TODO = "REMOVE_ITEM";
//  basic reducer function
const todoReducer = (state,action) => {
    switch(action.type) {
        case('ADD_ITEM'):
return {...state, item:action.payload, id:Date.now()};
        case('TOGGLE_ITEM'):
        return (
            state.map(item => {
                return item.id === action.payload ? {...item, completed: !item.completed} : item
            })
        )
          case('REMOVE_ITEM'):
          return(
                state.filter(item => {
                    item.id !== action.payload
                })
            );
        default:
            return state;
};
}
// initialize state
export const initialState = {
    item :'Learn about reducers',
    completed:false,
    id:3892987589
}

export default todoReducer;