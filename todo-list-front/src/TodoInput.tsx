import React, { useState } from 'react';
import './App.css';

interface Props {
  addTodo: AddTodo;
}

export const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [test, setText] = useState('');

  return (
    <>
    <p className="pInput">
      <input className="inputTodo" type="text" value={test} onChange={e => {setText(e.target.value);}}></input>
      <button className="buttonTodo" onClick={() => {addTodo(test) ; setText('');}}>Ajouter un rappel</button>
    </p>
    </>
  );
};