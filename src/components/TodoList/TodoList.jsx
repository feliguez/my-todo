import React from 'react';
import { useDispatch } from 'react-redux';
import {
  completedTodo,
  uncompletedTodo
} from '../../store/actions/todos.actions';
import TodoItem from '../TodoItem/TodoItem';
import _ from 'lodash';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const handleOnCompleted = todo => {
    dispatch(completedTodo(todo));
    dispatch(uncompletedTodo(todo));
  };

  const byDate = _.sortBy(todos, ['expirationDate', 'completed']);

  return (
    <div className="todo-list">
      {byDate.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCompleted={() => handleOnCompleted(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
