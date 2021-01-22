import React, { Component } from 'react';
import Like from './common/like';

import Table from './common/table';
import MovieCard from './movieCard';

class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <a >{movie.title}</a>
      ),
    },
    { path: 'numberInStock',
     label: 'img' ,
      content:(movie)=>(
        <MovieCard img={movie.posterUrl} title={movie.title} description={movie.description}></MovieCard>
    ), },
    { path: 'dailyRentalRate', label: 'Rate' },
    
    
  ];
  
  render() {
    const { movies, sortComumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        SortColumn={sortComumn}
      ></Table>

    );
  }
}

export default MoviesTable;
