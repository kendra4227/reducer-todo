import React, {  useState } from "react";
//import {todoReducer,initialState} from '../reducers/todoReducer';

const TodoForm = ({dispatch}) => {
   // const [state,dispatch] = useReducer(todoReducer, initialState);
    const [newItem, setNewItem] = useState("");


    const handleClick = e => {
        e.preventDefault();

        if (e.target.name === "add") {
            if (newItem === "") {
            } else {
              dispatch({
                type: "ADD_ITEM",
                payload: {
                  item: newItem,
                  completed: false,
                  id: new Date().getTime()
                }
              });
              setNewItem("");
            }
          }
      
          if (e.target.name === "remove") {
            dispatch({ type: "REMOVE_ITEMS" });
          }
        };
    const handleChanges = (e) => {
        setNewItem(e.target.value);
    };

    return (
        <div>
            
            <form>
           
<input
                className="Input"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
            />


            <button className="add-button"
        name="add"
        type="submit"
        onClick={handleClick}> 
                Add Item
        </button>


        <button
        className="clear-button"
        name="clear"
        type="submit"
        onClick={handleClick}
      >
        Clear
      </button>
    </form>
    </div>
  );
    }
export default TodoForm;