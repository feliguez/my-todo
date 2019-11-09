import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completedTodo } from '../../store/actions/todos.actions';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store => {
    return store.todos.todos;
  });

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleOnCompleted = todo => {
    console.log('onCompleted', todo);
    dispatch(completedTodo(todo));
  };

  return (
    <div className="todo-list">
      {todos
        .map((todo, i) => (
          <TodoItem
            todo={todo}
            key={i}
            onCompleted={() => handleOnCompleted(todo)}
          />
        ))
        .reverse()}
    </div>
  );
};

export default TodoList;
