import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import ConnectedTvTwoToneIcon from '@mui/icons-material/ConnectedTvTwoTone';

export interface ToDo {
  // todo_id: string;
  // description: string;
  // completed?: boolean;
  id : string
  model: string
  country: string
  device: string
  oem : string
  count_ebay : number
  price_ebay : string
  price_store: string
  count_store: string
  link_adr: string
  image : string
}

interface ToDoContainer extends Array<ToDo> {}

export const baseUrl = "http://localhost:7000/device"

const ListTodos = () => {
  const [todos, setTodos] = useState<ToDoContainer>([]);

  const getTodos = async () => {
    try {
      const response = await fetch(baseUrl);
      const jsonData = await response.json();
      setTodos(jsonData);
      // console.log('state',setTodos(jsonData))
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const deleteTodo = await fetch(
        `baseUrl/${id}`,
        {
          method: "DELETE",
        }
      );
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const completeTodo = async (id: string) => {
    try {
      const body = { completed: true };
      const completeTodo = await fetch(
        `baseUrl${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, completed: true } : todo;
        })
      );
      // window.location.href = "/";
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>model</TableCell>
            <TableCell>country</TableCell>
            <TableCell>device</TableCell>
            <TableCell>oem</TableCell>
            <TableCell>count_ebay</TableCell>
            <TableCell>price_ebay</TableCell>
            <TableCell>price_store</TableCell>
            <TableCell>count_store</TableCell>
            <TableCell>link_adr</TableCell>
            <TableCell>image</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Complete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos
            // .sort((a, b) => +a.completed - +b.completed)
            .map((todo) => {
              return (
                <TableRow key={todo.id}>
                  <TableCell
                    // style={
                    //   todo.completed ? { textDecoration: "line-through" } : {}
                    // }
                  >
                    {todo.model}
                  </TableCell>
                  <TableCell>
                    {todo.country}
                    {/*<EditTodo todo={todo} />*/}
                  </TableCell>
                  <TableCell>
                    {todo.device}

                  </TableCell>
                  <TableCell>
                    {todo.oem}
                  </TableCell>
                  <TableCell>
                    {todo.count_ebay}
                  </TableCell>
                  <TableCell>
                    {todo.price_ebay}
                  </TableCell>
                  <TableCell>
                    {todo.price_store}
                  </TableCell>
                  <TableCell>
                    {todo.count_store}
                  </TableCell>
                  <TableCell>
                    <ConnectedTvTwoToneIcon/>
                    {/*{todo.link_adr}*/}
                  </TableCell>
                  <TableCell>
                    {todo.image}
                  </TableCell>
                  <TableCell>
                    <IconButton
                        component="button"
                        // onClick={() => deleteTodo(todo.id)}
                        color="warning"
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      component="button"
                      onClick={() => deleteTodo(todo.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      component="button"
                      onClick={() => completeTodo(todo.id)}
                      // disabled={todo.completed}
                      color="success"
                    >
                      <DoneIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default ListTodos;
