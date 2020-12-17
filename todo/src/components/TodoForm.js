import React, { useReducer, useState } from "react";
import {
    ADD_ITEM,
    REMOVE_ITEM
} from '../reducers/todoReducer';

const TodoForm = ({dispatch}) => {
    const [newItem, setNewItem] = useState("");

    const handleChanges = (e) => {
        setNewItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: ADD_ITEM,
                payload: newItem
            }
        )
        setNewItem("");
    };

    const clearFinished = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: REMOVE_ITEM
            }
        )
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type="text" name="newItem" value={newItem} onChange={handleChanges} placeholder="Add Task" />
                <button type="submit" >Add</button>
            </form>
            <button onClick={clearFinished} >Clear</button>
        </div>
    )
}

export default TodoForm;