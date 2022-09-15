import React, {useState} from 'react';
// import s from '../../style/Table.module.css';
// import {IProduct} from "../../models";
// import OEM_DATA from './../../OEM_DATA.json';


// export type InitCarTypeProps ={
//     id?:number
//     car_model: string
//     car_model_title: string
//     car_OEM: string
//     date: string
//     shop_price: number
//     warehouse: number
//     link: string
// }
// interface ModelProductProps {
//     model: InitCarTypeProps
//     // model?: IProduct
// }


const Table = ({car_model, car_model_title, car_OEM, date, shop_price, warehouse, link }) => {
    // const [carModel, setCarModel]=useState(defaultCarItems)

    return (
        <tr>

                <td >{car_model}</td>
                <td >{car_model_title}</td>
                <td >{car_OEM}</td>
                <td >{date}</td>
                <td >{shop_price}</td>
                <td >{warehouse}</td>
                <td >
                    <a href={link}>{link}</a>
                </td>


        </tr>
    );
};

export default Table;
