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


const Table = ({model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link_adr, image,
                   car_model, car_model_title, car_OEM, date, shop_price, warehouse, link }) => {
    // const [carModel, setCarModel]=useState(defaultCarItems)

    return (
        <tr>

                {/*<td >{car_model}</td>*/}
                {/*<td >{car_model_title}</td>*/}
                {/*<td >{car_OEM}</td>*/}
                {/*<td >{date}</td>*/}
                {/*<td >{shop_price}</td>*/}
                {/*<td >{warehouse}</td>*/}
                {/*<td >*/}
                {/*    <a href={link}>{link}</a>*/}
                {/*</td>*/}

                <td >{model}</td>
                <td >{country}</td>
                <td >{device}</td>
                <td >{oem}</td>
                <td >{count_ebay}</td>
                <td >{price_ebay}</td>
                <td >{price_store}</td>
                <td >{count_store}</td>
                <td >
                    <a href={link_adr}>link</a>
                </td>
                <td >
                    <a href={image}>image</a>
                </td>
                <td ><button>Edit</button></td>
                <td ><button>Delete</button></td>


        </tr>
    );
};

export default Table;
