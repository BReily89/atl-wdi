import React, { Component } from 'react';
import pizzaoven from '../images/pizzaoven.jpg'

 class Description extends Component {
    render() {
        return(
        <div className='description'>
            <img src={pizzaoven} alt='pizzaoven'/>
            </div>
        )
    }
}

export default Description
