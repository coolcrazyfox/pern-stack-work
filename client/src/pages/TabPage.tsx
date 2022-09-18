import React, {Fragment, useEffect, useState} from 'react';

// import ErrorMessage from '../ui/components/ErrorMessage';
// import Loader from '../ui/components/Loader';

// @ts-ignore
import s from "../style/Table.module.css";
// import Search from "../ui/search/Search";

import ReactPaginate from "react-paginate";
import Table from "../components/table/Table";
import {Pagination} from "../common/c12-Pagination/Pagination";



// const data = OEM_DATA;
export interface ToDo {
    id : string
    model: string
    country: string
    device: string
    oem : string
    count_ebay : string
    price_ebay : string
    price_store: string
    count_store: string
    link_adr: string
    image : string
    datetime : string

}
interface ToDoContainer extends Array<ToDo> {}
export const baseUrl = "http://localhost:7000/device"

const TabPage = () => {
    const [todos, setTodos] = useState<ToDoContainer>([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage]= useState(1)
    const [devicePerPage]= useState(10)

    const getTodos = async () => {
        try {
            setLoading(true)
            const response = await fetch(baseUrl);
            const jsonData = await response.json();
            setTodos(jsonData);
            setLoading(false)
            // console.log('state',setTodos(jsonData))
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            const deleteTodo = await fetch(
                `http://localhost:7000/device/${id}`,
                {
                    method: "DELETE",
                }
            );
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
        console.log('getTodos',getTodos)

    }, []);

    const lastIndex = currentPage * devicePerPage
    const firstIndex = lastIndex - devicePerPage
    const currentDevice = todos.slice(firstIndex, lastIndex)
    const paginate = (pageNum:number) => setCurrentPage(pageNum)
    console.log('totalCount',todos.length)

    return (
        <Fragment>
            {/*{loading && <Loader/>}*/}
            {/*{error && <ErrorMessage error={error}/>}*/}

            <div className={s.tab_container}>
                <Pagination totalCount={todos.length}

                            pageSize={devicePerPage}
                            currentPage={currentPage}
                            onChangedPage={paginate}/>
                <table className={s.table}>
                    <thead>
                    {/*<Search/>*/}
                    <tr>
                        <th>Model</th>
                        <th>Country</th>
                        <th>Device</th>
                        <th>OEM</th>
                        <th>Count_ebay</th>
                        <th>Price_ebay $</th>
                        <th>Price_store $</th>
                        <th>Count_store</th>
                        <th>Date</th>
                        <th>Link</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                    </thead>
                    <tbody>

                    {/*<Pagination*/}
                    {/*    devicePerPage={devicePerPage}*/}
                    {/*    totalDevice={todos.length}*/}
                    {/*    paginate={paginate}*/}
                    {/*/>*/}
                    {currentDevice
                        // todos
                        // .sort((a, b) => +a.completed - +b.completed)
                        .map((todo) => {
                            return <Table key={todo.id}
                                              model={todo.model}
                                              country={todo.country}
                                              device={todo.device}
                                              oem={todo.oem}
                                              count_ebay={todo.count_ebay}
                                              price_ebay={todo.price_ebay}
                                              price_store={todo.price_store}
                                          count_store={todo.count_store}
                                          datetime={todo.datetime}
                                          link_adr={todo.link_adr}
                                          image={todo.image}
                                          deleteDevice={deleteTodo}
                                />
                            }
                            )
                    }

                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default TabPage;
