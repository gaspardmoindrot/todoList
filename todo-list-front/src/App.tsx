import React, { useState, useEffect } from 'react';
import { Todos } from './Todos';
import { TodoInput } from './TodoInput';
import './App.css';

const initTodos: Todo[] = [
  {
    text: '',
    complete: false,
    id: 0,
  },
];

function App() {
  const [todos, setTodos] = useState(initTodos);

  async function GetList() {
    const data = await (await fetch("http://localhost:8080/state/all", {method: 'GET'})).json();
    setTodos(data);
  }

  const changeTodos: ChangeTodos = (todo: Todo) => {
    const newTodos = todos.map(unitTodo => {
      if (unitTodo === todo) {
        unitTodo.complete = !unitTodo.complete;
      }
      return (unitTodo);
    });
    setTodos(newTodos);
    fetch('http://localhost:8080/state/change/' + todo.id, { method: 'PUT' });
  };

  const deleteTodos: DeleteTodos = (todo: Todo) => {
    const newTodos = [];
    for (let index = 0, len = todos.length; index < len; ++index) {
      if (todos[index] !== todo) {
        newTodos.push(todos[index]);
      }
      setTodos(newTodos);
    }
    fetch('http://localhost:8080/state/delete/' + todo.id, { method: 'DELETE' });
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false , id: 0};
    setTodos([...todos, newTodo]);
    fetch('http://localhost:8080/state/add2/' + text, { method: 'POST' });
  };

  useEffect(() => {GetList()}, []);
  return (
    <>
      <h1>Todos</h1>
      <ul className="mylist">
        <Todos todos = {todos} changeTodos = {changeTodos} deleteTodos = {deleteTodos}/>
      </ul>
      <TodoInput addTodo = {addTodo}/>
    </>
  );
}

export default App;