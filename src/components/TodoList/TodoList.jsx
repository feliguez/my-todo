import _ from 'lodash';
import React from 'react';
import FlipMove from 'react-flip-move';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  completedTodo,
  uncompletedTodo
} from '../../store/actions/todos.actions';
import TodoItem from '../TodoItem/TodoItem';
import './styles.css';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const handleOnCompleted = todo => {
    dispatch(completedTodo(todo));
    dispatch(uncompletedTodo(todo));
  };

  const byDate = _.sortBy(todos, ['expirationDate', 'completed']);

  return (
    <TransitionGroup className="todo-list">
      <FlipMove>
        {byDate.map(todo => (
          <CSSTransition key={todo.id} timeout={500} classNames="item">
            <TodoItem
              todo={todo}
              key={todo.id}
              onCompleted={() => handleOnCompleted(todo)}
            />
          </CSSTransition>
        ))}
      </FlipMove>
    </TransitionGroup>
  );
};

export default TodoList;
