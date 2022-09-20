import React from 'react';
import ReactPaginate from "react-paginate";
import s from '../../style/PaginationReact.module.css'
const PaginationReact = () => {
    return (
        <div className={s.nav}>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={e=>console.log(e)}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel="<"
                // renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default PaginationReact;
