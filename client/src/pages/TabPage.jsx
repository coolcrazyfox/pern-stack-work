import React, {useEffect, useState} from 'react';
// import {useProducts} from '../hook/products';
// import ErrorMessage from '../ui/components/ErrorMessage';
// import Loader from '../ui/components/Loader';

import s from "../style/Table.module.css";
// import Search from "../ui/search/Search";
// import OEM_DATA from "../OEM_DATA.json";
import ReactPaginate from "react-paginate";
import Table from "../components/table/Table";
import TableCell from "@mui/material/TableCell";

// const data = OEM_DATA;
export const baseUrl = "http://localhost:7000/device"

const TabPage = ({oemList}) => {
    const [itemCarList, setItemCarList] = useState(oemList.slice(0, 50))
    // const {loading, error, products} = useProducts()
    const [pageNumber, setPageNumber] = useState(0)


    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch(baseUrl);
            const jsonData = await response.json();
            setTodos(jsonData);
            console.log('state',setTodos(jsonData))
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteTodo = async (id) => {
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

    const completeTodo = async (id) => {
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

    const carsPerPage = 14
    const pagesVisited = pageNumber * carsPerPage
    const displayItemCarList = itemCarList
        .slice(pagesVisited, pagesVisited + carsPerPage)
        .map(i => {
            return

            // <Table
            //     key={i.index}
            //     car_model={i.car_model}
            //     car_model_title={i.car_model_title}
            //     car_OEM={i.car_OEM}
            //     date={i.date}
            //     shop_price={i.shop_price}
            //     warehouse={i.warehouse}
            //     link={i.link}
            // />
        })
    const pageCountItem = Math.ceil(itemCarList.length/carsPerPage)
    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }
    return (
        <div>
            {/*{loading && <Loader/>}*/}
            {/*{error && <ErrorMessage error={error}/>}*/}

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
                    {displayItemCarList}
                    <ReactPaginate
                        onPageChange={changePage}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCountItem}
                        containerClassName={s.paginationBttns}
                        previousLinkClassName={s.previousBttn}
                        nextLinkClassName={s.nextBttn}
                        disabledClassName={s.paginationDisabled}
                        activeClassName={s.paginationActive}
                    />
                    {/*{oemList.map((car, index) => {*/}
                    {/*    return <Table key={index}*/}
                    {/*                  car_model={car.car_model}*/}
                    {/*                  car_model_title={car.car_model_title}*/}
                    {/*                  car_OEM={car.car_OEM}*/}
                    {/*                  date={car.date}*/}
                    {/*                  shop_price={car.shop_price}*/}
                    {/*                  warehouse={car.warehouse}*/}
                    {/*                  link={car.link}*/}
                    {/*    />*/}
                    {/*})}*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TabPage;
