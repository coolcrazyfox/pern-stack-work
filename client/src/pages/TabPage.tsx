import React, {Fragment, useEffect, useState} from 'react';

// import ErrorMessage from '../ui/components/ErrorMessage';
// import Loader from '../ui/components/Loader';

// @ts-ignore
import s from "../style/Table.module.css";

import {Pagination} from "../common/c12-Pagination/Pagination";
import EditDevice from "../components/EditDevice";
import {BsFillFolderSymlinkFill, BsImage} from "react-icons/bs";
import {FcSearch} from "react-icons/fc"
import InputDevice from "../components/InputDevice";
import SearchForm from "../components/SearchForm";
import Search from "../components/search/Search";

export interface ToDo {
    id: string
    model: string
    country: string
    device: string
    oem: string
    count_ebay: string
    price_ebay: string
    price_store: string
    count_store: string
    link: string
    image: string
    datetime: string

}

interface ToDoContainer extends Array<ToDo> {
}

export const baseUrl = "http://localhost:7000/device"

const TabPage = () => {
    const [todos, setTodos] = useState<ToDoContainer>([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [devicePerPage] = useState(10)

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
        console.log('getTodos', getTodos)

    }, []);

    // pagination

    const lastIndex = currentPage * devicePerPage
    const firstIndex = lastIndex - devicePerPage
    const currentDevice = todos.slice(firstIndex, lastIndex)
    const paginate = (pageNum: number) => setCurrentPage(pageNum)

    //search

    // const [searchValue, setSearchValue]= useState('')
    // const filterDevice=todos.filter((dev)=>{
    //     return dev.oem.toLowerCase().includes(searchValue.toLowerCase())
    // })
    return (
        <Fragment>
            {/*{loading && <Loader/>}*/}
            {/*{error && <ErrorMessage error={error}/>}*/}

            <div className={s.tab_container}>
                <div className={s.header_title_tab}>
                    {/* <InputDevice/> */}
                    <Pagination totalCount={todos.length}

                                pageSize={devicePerPage}
                                currentPage={currentPage}
                                onChangedPage={paginate}/>
                    {/*<SearchForm todo={todos}/>*/}
                    {/*<Search todos={todos}/>*/}
                    {/* <span className={s.span_icon}><FcSearch className={s.span_icon}/></span> */}
                    {/*<form  className={s.searchbox} action="#">*/}
                    {/*    <input type="text" placeholder='Search' onChange={(e)=>{setSearchValue(e.currentTarget.value)}} />*/}
                    {/*</form>*/}


                </div>

                <table className={s.table}>
                    <thead>

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
                    {
                        // filterDevice

                    currentDevice
                        // todos
                        // .sort((a, b) => +a.completed - +b.completed)
                        .map((todo) => {
                                return (
                                    <tr key={todo.id}>
                                        <td>{todo.model}</td>
                                        <td>{todo.country}</td>
                                        <td>{todo.device}</td>
                                        <td>{todo.oem}</td>
                                        <td>{todo.count_ebay}</td>
                                        <td>{todo.price_ebay}</td>
                                        <td>{todo.price_store}</td>
                                        <td>{todo.count_store}</td>
                                        <td>{todo.datetime}</td>
                                        <td>
                                            <a  href={todo.link}>
                                                <BsFillFolderSymlinkFill/>
                                            </a>
                                        </td>
                                        <td>
                                            <a href={todo.image}>
                                                <BsImage/>
                                            </a>
                                        </td>
                                        <td>
                                            {/*<button onClick={()=><EditDevice todo={todo}/>}>Edit</button>*/}
                                            <EditDevice todo={todo}/>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteTodo(todo.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)

                                // return <Table key={todo.id}
                                //                   model={todo.model}
                                //                   country={todo.country}
                                //                   device={todo.device}
                                //                   oem={todo.oem}
                                //                   count_ebay={todo.count_ebay}
                                //                   price_ebay={todo.price_ebay}
                                //                   price_store={todo.price_store}
                                //               count_store={todo.count_store}
                                //               datetime={todo.datetime}
                                //               link_adr={todo.link_adr}
                                //               image={todo.image}
                                //               deleteDevice={deleteTodo}
                                //               todo={todo}
                                //
                                //     />
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
