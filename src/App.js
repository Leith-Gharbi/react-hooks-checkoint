import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import MoviesTable from './components/moviesTables';
import { paginate } from './utils/paginate';

import _ from 'lodash';

class App extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
  };
  componentDidMount() {
    const data = [
      {
        _id: '1',
        title: 'BlackList',
        posterUrl: '/blacklist.jpg',
        description: 'Le fugitif Raymond Reddington se rend aux autorités et offre la liste de ses contacts, á la seule condition de parler á une jeune profiliste inexperimentée, Liz.',
        dailyRentalRate: 2.5,
        liked: true,
      },
      {
        _id: '2',
        title: 'Casa de Papel',
        posterUrl: '/casadepapel.jpg',
        description:'Huit voleurs font une prise d otages dans la Maison royale de la Monnaie d Espagne, tandis qu un génie du crime manipule la police pour mettre son plan à exécution.',
        dailyRentalRate: 2.5,
      },
      {
        _id: '3',
        title: 'Game of Thrones',
        posterUrl: '/Game-of-Thrones.jpg',
        description:'Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages',
        dailyRentalRate: 3.5,
      },
    ];
    this.setState({ movies: data });
  };
  getPagedData =()=>{

    const {
      pageSize,
      currentPage,
  
      sortColumn,
      movies: allMovies,
    } = this.state;
    // filtred
    const filtered = allMovies;
      // Sorting
      const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
      // BINDING MOVIES
      const movies = paginate(sorted, currentPage, pageSize);

      return {  data:movies};
  }
  handleSort = (sortColumn) => {
  
    this.setState({ sortColumn });
  };
  render() {
    const { sortColumn} =this.state;
    const {data: movies} =this.getPagedData();


    return <>
           <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handelLike}
                onSort={this.handleSort}
              ></MoviesTable>
              </>;
  }
}


export default App;
