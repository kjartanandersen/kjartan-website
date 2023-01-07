import React, { useState } from 'react';
import './App.css';
import InputField from './InputField/InputField';
import { Todo } from './Model/Model';
import TodoList from './TodoList/TodoList';
import NavBar from '../NavBar/NavBar';


const TodoSite: React.FC<{ name?: string }> = ({ name }) => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

  }

  return (
    <NavBar activeComp='todo' >
    
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos} />

      </div>
    </NavBar>
  );
}

export default TodoSite;
