import './App.css'
import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {tasks: [
      { task: "Go shopping", isDone: false},
      { task: "Do homework", isDone: true}
    ]};
  }
  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <ol className="todos-list">
          {this.state.tasks.map((value, index) => 
          <li key={index}>
            {value.task}
            <input type="checkbox" checked={value.isDone} onChange={(e) => this.updateTodoStatus(e, index)} />
          </li>)}
        </ol>
      </div>
    );
  }

  updateTodoStatus(e, index){
    const newTodos = [...this.state.tasks]; // mevcut dizinin kopyası
    newTodos[index].isDone = e.target.checked;
    this.setState({task: newTodos});
  }
}

export default App;

