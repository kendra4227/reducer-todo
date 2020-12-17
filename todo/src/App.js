import React, { Component } from 'react';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
