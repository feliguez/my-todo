import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import './styles.css';

const TodoForm = ({ todo, onSubmit, onChangeName, onChangeDate }) => {
  return (
    <form className="todoList-form" onSubmit={onSubmit}>
      <Grid container justify="space-around">
        <TextField
          label="Tarea"
          margin="normal"
          type="text"
          onChange={onChangeName}
          placeholder="Ir al supermercado"
          value={todo.name}
          autoFocus
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha de expiración"
            value={todo.expirationDate}
            onChange={onChangeDate}
            KeyboardButtonProps={{
              'aria-label': 'cambiar fecha'
            }}
          />
        </MuiPickersUtilsProvider>
        <Button
          type="submit"
          disabled={!todo.name}
          variant="contained"
          color="primary"
        >
          Agregar
        </Button>
      </Grid>
    </form>
  );
};

export default TodoForm;
