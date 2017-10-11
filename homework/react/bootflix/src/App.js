import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
//import Example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: ''
    }
  }

 //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
 _searchByTitle = (event) => {
   event.preventDefault()
  const title = event.target.title.value
  axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
   .then((res) => {
    console.log(res)
      this.setState({
        title: res.data.Title,
        year: res.data.Year,
        director: res.data.Director,
        genre: res.data.Genre,
        plot: res.data.Plot 
      })
    }).catch((error) => {
        console.log(error)
    })
}

 _searchById = (event) => {
   const id = event.target.id.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`) 
    .then((res) => {
             this.setState({
        title: res.data.Title,
        year: res.data.Year,
        director: res.data.Director,
        genre: res.data.Genre,
        plot: res.data.Plot 
      })
       }).catch((error) => {
            console.log(error)
        })
      }

//  componentWillMount(){
//     this._searchById()
 // }
  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
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