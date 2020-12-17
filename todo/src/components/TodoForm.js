import React, {useState,useReducer} from 'react';

const TodoForm = ({dispatch}) => {
    const [newItem, setNewItem] = useState("");

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = (e) => {
        setNewItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: ADD_TODO,
                payload: newItem
            }
        )
        setNewItem("");
    };

    const clearFinished = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: REMOVE_TODO
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