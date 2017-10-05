import React, { Component } from 'react';//same as a 'require' statement
//{}  <= short hand version if const. component = 
import logo from './logo.svg';//import of CSS, (webpack)- directly import import './
import './App.css';

import Movie from './components/Movie' //import movie from movie.js file
import Review from './components/Review' //then './' means: where we currently are and does the relative path
import MovieList from './components.MovieList'



class App extends/*allows us to import & component is just another javascript class*/ Component {   //using things built into javascript reactor
  render() {  //function that is built in by default in react, renders out HTML on screen
  

return (  //JSX
      <div className="App">
        
        <Movie/> 
        <Review/>
        <Movie/>
        <Review/>
        <Movie/>
        <Review/>
      </div>
    )
  
  }
}

export default App; //module.exports
