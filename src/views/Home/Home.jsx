import React from 'react';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';

const Home = props => {
  return (
    <div className="home">
      <h1 className="title">Cosas por hacer</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
