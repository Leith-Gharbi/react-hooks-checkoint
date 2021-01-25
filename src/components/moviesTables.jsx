import React, { Component } from 'react';

import Table from './common/table';
import MovieCard from './movieCard';
import { Link } from 'react-router-dom';
class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
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
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      ></Table>

    );
  }
}

export default MoviesTable;
