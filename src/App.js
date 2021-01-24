import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import MoviesTable from './components/moviesTables';
import { paginate } from './utils/paginate';

import _ from 'lodash';

class App extends Component {
  state = {
    Newdata: { title: '', posterUrl: '', description: '', dailyRentalRate: '' },
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
        description:
          'Le fugitif Raymond Reddington se rend aux autorités et offre la liste de ses contacts, á la seule condition de parler á une jeune profiliste inexperimentée, Liz.',
        dailyRentalRate: 2.5,
      },
      {
        _id: '2',
        title: 'Casa de Papel',
        posterUrl: '/casadepapel.jpg',
        description:
          'Huit voleurs font une prise d otages dans la Maison royale de la Monnaie d Espagne, tandis qu un génie du crime manipule la police pour mettre son plan à exécution.',
        dailyRentalRate: 4.5,
      },
      {
        _id: '3',
        title: 'Game of Thrones',
        posterUrl: '/Game-of-Thrones.jpg',
        description:
          'Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages',
        dailyRentalRate: 4.5,
      },
    ];
    this.setState({ movies: data });
  }
  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, movies: allMovies } = this.state;
    // filtred
    const filtered = allMovies;
    // Sorting
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    // BINDING MOVIES
    const movies = paginate(sorted, currentPage, pageSize);

    return { data: movies };
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  onChange = (e) => {
    switch (e.target.name) {
      // Updated this
      case 'posterUrl':
        if (e.target.files.length > 0) {
          const Newdata = { ...this.state.Newdata };
          const file ='/'+e.target.files[0].name ;
          Newdata.posterUrl =  file.toString();
          this.setState({ Newdata });
        }
        break;
      default:
      //  this.setState({ [e.target.name]: e.target.value });
    }
  };

  handelChange = ({ currentTarget: input }) => {
    const Newdata = { ...this.state.Newdata };
    Newdata[input.name] = input.value;
    this.setState({ Newdata });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const Newdata = {...this.state.Newdata,_id: this.state.Newdata.title};
    const movies =this.state.movies;
    movies.push(Newdata);
  console.log(movies);
  this.setState({ movies });
  };
  render() {
    const { sortColumn } = this.state;
    const { data: movies } = this.getPagedData();

    return (
      <>
        <div className="container">
          <div className="row">
            <div>
              <h2>Add movie</h2>
              <div className="panel panel-default" >
                <div className="panel-body">
                  <div className="row" style={{backgroundColor:"lightblue"}}>
                    <div className="d-flex flex-column">
                      <div className="p-2">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder="title"
                          value={this.state.Newdata.title}
                          onChange={this.handelChange}
                          label="title"
                        ></input>
                      </div>
                      <div className="p-2">
                        <input
                          type="file"
                          name="posterUrl"
                          id="posterUrl"
                          placeholder="posterUrl"
                        
                          onChange={this.onChange}
                          label="posterUrl"
                        ></input>
                      </div>
                      <div className="p-2">
                        <input
                          type="text"
                          name="description"
                          id="description"
                          placeholder="description"
                          value={this.state.Newdata.description}
                          onChange={this.handelChange}
                          label="description"
                        ></input>
                      </div>

                      <div className="p-2">
                        <input
                          type="number"
                          min="0"
                          max="5"
                          name="dailyRentalRate"
                          id="dailyRentalRate"
                          placeholder="dailyRentalRate"
                          value={this.state.Newdata.dailyRentalRate}
                          onChange={this.handelChange}
                          label="dailyRentalRate"
                        ></input>
                      </div>
                      <div className="p-2">
                        <button
                          className="btn btn-success"
                          onClick={this.handelSubmit}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handelLike}
                onSort={this.handleSort}
              ></MoviesTable>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
