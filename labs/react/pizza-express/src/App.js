import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Splash from './components/SplashImage'
import Description from './components/Description'
import MenuList from  './components/MenuList'
import LocationList from './components/LocationList'
import Location from './components/Location'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Splash />
        <Description />
        <MenuList />
        <Location />
        <LocationList />
        <Contact />
        <h1>Pizza Express</h1>
      </div>
    )
  }
}

export default App;
