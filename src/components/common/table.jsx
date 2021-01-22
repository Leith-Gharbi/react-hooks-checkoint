import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
const Table = ({columns,sortComumn,onSort,data}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortComumn={sortComumn}
        onSort={onSort}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
