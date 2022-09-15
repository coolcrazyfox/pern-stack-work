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
// @ts-ignore
import s from "../style/Table.module.css";
import ReactPaginate from "react-paginate";

export interface ToDo {

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

const ListDevice = () => {
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
      <div className={s.tab_container}>
        <table className={s.table}>
          <thead>
          {/*<Search/>*/}
          <tr>
            <th>Model</th>
            <th>Country</th>
            <th>Device</th>
            <th>OEM</th>
            <th>Count_ebay</th>
            <th>price_ebay</th>
            <th>price_store</th>
            <th>count_store</th>
            <th>Count_ebay</th>
            <th>Link</th>
            <th>image</th>
            <th>Edit</th>
            <th>DELETE</th>
          </tr>
          </thead>
          <tbody>
          {todos
              // .sort((a, b) => +a.completed - +b.completed)
              .map((todo) => {
                return (
                    <tr key={todo.id}>
                      <td >{todo.model}</td>
                      <td >{todo.country}</td>
                      <td >{todo.device}</td>
                      <td >{todo.oem}</td>
                      <td >{todo.count_ebay}</td>
                      <td >{todo.price_ebay}</td>
                      <td >{todo.price_store}</td>
                      <td >{todo.count_store}</td>
                      <td >
                        <a href={todo.link_adr}>link</a>
                      </td>
                      <td >
                        <a href={todo.image}>image</a>
                      </td>
                      <td ><button>Edit</button></td>
                      <td ><button>Delete</button></td>
                    </tr>
                )
              })
          }
          {/*{displayItemCarList}*/}
          {/*<ReactPaginate*/}
          {/*    onPageChange={changePage}*/}
          {/*    previousLabel={'<'}*/}
          {/*    nextLabel={'>'}*/}
          {/*    pageCount={pageCountItem}*/}
          {/*    containerClassName={s.paginationBttns}*/}
          {/*    previousLinkClassName={s.previousBttn}*/}
          {/*    nextLinkClassName={s.nextBttn}*/}
          {/*    disabledClassName={s.paginationDisabled}*/}
          {/*    activeClassName={s.paginationActive}*/}
          {/*/>          */}

          </tbody>
        </table>
      </div>


    </Fragment>
  );
};

export default ListDevice;
