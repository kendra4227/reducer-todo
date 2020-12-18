// actions
export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
//  basic reducer function
export const todoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_ITEM":
        state.map(item =>
          item.id === action.payload.id
            ? (item.completed = action.payload.completed)
            : null
        );
        return [...state];
      case "ADD_ITEM":
        return [...state, action.payload];
      case "CLEAR_ITEMS":
        return [...state.filter(item => item.completed === false)];
      default:
        break;
    }
  };

// initialize state
export const initialState = {
    item :'Learn about reducers',
    completed:false,
    id:3892987589
}

export default todoReducer;