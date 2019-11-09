import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todos.actions';

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    completed: false,
    uncompleted: true,
    date: Date.now()
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo));
  };

  const handleOnChange = e => {
    setTodo({ ...todo, name: e.target.value });
  };

  return (
    <div className="todoList">
      <form action="" className="todoList-form" onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={e => handleOnChange(e)} />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TodoForm;
