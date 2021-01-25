import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { paginate } from './utils/paginate';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import { MovieForm } from './components/movieForm';
import MovieList from './components/movieList';
import Movies from './components/movies';
class App extends Component {
 
  render() {

    return (
      <>
  
   
        <Switch>
          <Route path="/movies/:id" component={Movies}></Route>
          <Route path="/movies" component={MovieList}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </>
    );
  }
}

export default App;
