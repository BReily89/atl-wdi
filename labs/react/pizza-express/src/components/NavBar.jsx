import React, { Component } from 'react';
import Description from './Description' 
import Contact from './Contact'
import MenuList from './MenuList'
import LocationList from './LocationList'

class NavBar extends Component {
    render() {
        return (
        
        <div className='navbar'>
        <a href='#description'>Our Story</a>
        <a href='#menu'>Menu</a>
        <h1>PIZZA EXPRESS</h1>
        <a href='#locations'>Locations</a>
        <a href='#Contact'>Contact</a>
        </div>        
        )
    }
} 
    

export default NavBar