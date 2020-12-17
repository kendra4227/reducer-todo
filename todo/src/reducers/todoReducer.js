import React, {useState, useReducer} from 'react';


export const ADD_TODO = "ADD-TODO";
export const UPDATE_TODO = "UPDATE_TODO";
//  basic reducer function
const todoReducer = (state,action) => {
    switch(action.type) {
        case('ADD_TODO'):
return {...state};
        case('UPDATE_TODO'):
        return  {...state};
        default:
            return state;
}
}

export const initialState = {
    item :'Learn about reducers',
    completed:false,
    id:3892987589
}

export default todoReducer;