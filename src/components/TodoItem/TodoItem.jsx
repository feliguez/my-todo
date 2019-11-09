import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onCompleted }) => {
  return (
    <div className="todoList-card">
      <h2>{todo.name}</h2>
      <p>{todo.completed ? 'Completada' : 'Pendiente'}</p>
      <button onClick={onCompleted}>Completar</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onCompleted: PropTypes.func
};

export default TodoItem;
