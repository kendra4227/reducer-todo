import React, {useState, useReducer} from 'react';


//  basic reducer function
const reducer = (state,action) => {
    switch(action.type) {
        case('ADD_TODO'):
return {...state,completed: !state.completed};
    default:
        return state;
}
}

const initialState = {
    item :'Learn about reducers',
    completed:false,
    id:3892987589
}

export default reducer;