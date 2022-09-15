import React from 'react';

const Pagination = ({devicePerPage, totalDevice, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalDevice / devicePerPage); i++){
        pageNumbers.push(i)
    }

        return (
            <div>
                <ul className={"pagination"}>
                    {pageNumbers.map(number =>(
                        <li className={'page_item'} key={number}>
                            <a href={'#'} className={'page_link'} onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        );
};

export default Pagination;
