import React, { Component, createFactory } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
const Pagination = (props) => {
  const { itemsCount, pageSize,onPageChange ,currentPage} = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if(pagesCount===1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pages.map((page) => (

            <li key={page} className={page===currentPage ?"page-item active" :"page-item"} aria-current="page">
              <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
            </li>

          ))}
        </ul>
      </nav>
    </div>
  );
};
Pagination.propTypes={

 itemsCount:PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired ,
  currentPage:PropTypes.number.isRequired

};

export default Pagination;
