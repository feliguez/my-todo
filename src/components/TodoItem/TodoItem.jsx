import DateFnsUtils from '@date-io/date-fns';
import {
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  Switch,
  Typography
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import SnoozeIcon from '@material-ui/icons/Snooze';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../store/actions/todos.actions';
import './styles.css';

const TodoItem = ({ todo, onCompleted }) => {
  const dispatch = useDispatch();
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const handleOnChangeDate = date => {
    setUpdatedTodo({ ...todo, expirationDate: date });
  };

  useEffect(() => {
    dispatch(updateTodo(updatedTodo));
  }, [dispatch, updatedTodo]);

  const Completed = () =>
    todo.completed ? (
      <DoneIcon htmlColor="green" />
    ) : (
      <SnoozeIcon htmlColor="rebeccapurple" />
    );

  return (
    <Card
      component="article"
      className="todoItem"
      style={{ backgroundColor: `${todo.completed ? '#00800047' : ''}` }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {todo.name}
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            name="expirationDate"
            disableToolbar
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha de expiración"
            value={updatedTodo.expirationDate}
            onChange={handleOnChangeDate}
            KeyboardButtonProps={{
              'aria-label': 'cambiar fecha'
            }}
          />
        </MuiPickersUtilsProvider>
      </CardContent>
      <CardActions className="todoItem-actions">
        <div>
          <Completed />
        </div>
        <FormControlLabel
          control={
            <Switch
              checked={todo.completed}
              onChange={onCompleted}
              value="checkedA"
            />
          }
          label={`Marcar ${todo.completed ? 'pendiente' : 'completado'}`}
        />
      </CardActions>
    </Card>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onCompleted: PropTypes.func
};

export default TodoItem;
