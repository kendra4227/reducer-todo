// actions
export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
//  basic reducer function
export const todoReducer = (state,action) => {
    switch(action.type) {
        case('ADD_ITEM'):
return [{...state, 
        item:action.payload,
         completed:false, 
         id:Date.now()
        }];

        case('TOGGLE_ITEM'):
        let Clickedtoggle =
            state.map(item => {
                if (item.id === action.payload ) {
                    return {...item, completed: !item.completed}
                } else {
                    return item;
            }
        })
        return Clickedtoggle
          case('REMOVE_ITEM'):
          return(
                state.filter(item => {
                    if (item.completed === true){
                        return !item.completed
                    } else {
                        return item;
                    }
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