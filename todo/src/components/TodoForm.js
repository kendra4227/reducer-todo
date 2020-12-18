import React, { useReducer, useState } from "react";
import {todoReducer,initialState} from '../reducers/todoReducer';

const TodoForm = () => {
    const [state,dispatch] = useReducer(todoReducer, initialState);
    const [newItem, setNewItem] = useState("");

    const handleChanges = (e) => {
        setNewItem(e.target.value);
    };

    return (
        <div>
            <h1>To-do List</h1>
            {state.map(state => {
                return (
                    <div onClick={() => {
                        dispatch({ type: "Toggle", payload: state.id })
                    }} >
                        {state.item}
                    </div>
                )
            }
    )
}
<input
                className="Input"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
            />


            <button onClick={() => { dispatch({ type: "ADD_ITEM", payload: newItem }); }}>
                Add Item
        </button>


            <button onClick={() => { dispatch({ type: "REMOVE_ITEM", payload: newItem }) }}>
                Clear Completed
        </button>
        </div>
    )
};

export default TodoForm;