import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { addTodo, increaseCounter } from '../../store/actions/todos.actions';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import moment from 'moment';
import { Container, Typography } from '@material-ui/core';
import './styles.css';

const Home = () => {
  moment.locale('es');
  const { counter, todos } = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: counter,
    completed: false,
    createdTime: new Date(),
    expirationDate: new Date(),
    name: '',
    uncompleted: true
  });

  const handleSubmit = e => {
    e.preventDefault();

    batch(() => {
      dispatch(increaseCounter());
      dispatch(addTodo(todo));
    });
    setTodo({
      ...todo,
      name: '',
      id: counter + 1,
      expirationDate: new Date()
    });
  };

  const handleNameChange = e => {
    setTodo({ ...todo, name: e.target.value });
  };

  const handleDateChange = date => {
    setTodo({ ...todo, expirationDate: date });
  };

  return (
    <Container component="main" maxWidth="sm" className="home">
      <Typography variant="h3" component="h1" paragraph align="center">
        Cosas por hacer
      </Typography>
      <Typography paragraph align="center">
        Hoy: {moment(Date.now()).format('D[/]M[/]YY')}
      </Typography>
      <TodoForm
        todo={todo}
        onSubmit={handleSubmit}
        onChangeName={handleNameChange}
        onChangeDate={handleDateChange}
      />
      <TodoList todos={todos} />
    </Container>
  );
};

export default Home;
