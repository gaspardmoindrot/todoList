import React from 'react';
import './App.css';

interface Props {
    todos: Todo[];
    changeTodos: ChangeTodos;
    deleteTodos: DeleteTodos;
}

export const Todos: React.FC<Props> = ({ todos, changeTodos, deleteTodos }) => {
  return (
    <>
        {todos.map(todo => (
        <li>
            <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input onChange={()=>{}} type="checkbox" checked={todo.complete} onClick={() => {changeTodos(todo);}}/> {todo.text}
            </label>
            <input className="croix" onChange={()=>{}} type="image" width="30"
              src= "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-red-cross-prohibited-icon-free-png-transparent-layer-material-image_2290598.jpg"
              alt="Del" checked={false} onClick={() => {deleteTodos(todo);}}/>
        </li>
        ))}
    </>
  );
};