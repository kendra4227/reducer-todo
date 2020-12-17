import React, {useState, useReducer} from 'react';

// actions
export const ADD_TODO = "ADD-TODO";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_TODO = "REMOVE_TODO";
//  basic reducer function
const todoReducer = (state,action) => {
    switch(action.type) {
        case('ADD_TODO'):
return {...state, item:action.payload, id:Date.now()};
        case('TOGGLE_TODO'):
        return(
            state.map(todo => {
              if (todo.id === action.payload){
                return{...todo, completed: !todo.completed }
              }
              return todo;
            })
          )
          case REMOVE_TODO:
            return (
                state.filter(item => {
                    item.id !== action.payload
                })
            );
        default:
            return state;
}
}
// initialize state
export const initialState = {
    item :'Learn about reducers',
    completed:false,
    id:3892987589
}

export default todoReducer;