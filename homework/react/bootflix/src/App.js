import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
//import Example from './omdbExample.json'

class App extends Component {
  state = {
    movie: example
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = () => {
    console.log("Search by Title");
  }

  searchById = () => {
    console.log("Search by ID");
  }

  //Pass searchByTitle, searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot} id={this.state.title} />
      </div>
    );
  }
}

export default App;