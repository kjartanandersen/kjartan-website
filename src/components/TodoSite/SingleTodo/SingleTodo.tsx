import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../Model/Model";

import "./SingleTodoStyles.css";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ index, todo, todos, completedTodos, setTodos, setCompletedTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


  const handleDone = (id: number) => {
    setCompletedTodos((todos) => {
      return [...todos, {todo: todo.todo, isDone: !todo.isDone, id: todo.id}];
    });
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    if (todo.isDone) {
      setCompletedTodos(
        completedTodos.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo))
      )
    }
    else {

      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
    }
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single--text"
        />
      ) : todo.isDone ? (
        <span className="todos_single--text">{todo.todo}</span>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit ) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        {!todo.isDone ? <span className="icon">
          <MdDone onClick={() => handleDone(todo.id)} />
        </span> : ""}
      </div>
    </form>
  );
}

export default SingleTodo;
