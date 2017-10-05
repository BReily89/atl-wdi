import React, { Component } from 'react';
import LocationList from './LocationList'


class Location extends Component {
    render() {
        return(
        <div className='location'>
           <h3>{this.props.name}</h3>
           <h4>{this.props.address}</h4>
           <h5>{this.props.phone}</h5>
           <img src={this.props.image} />
        </div>
        )}
        
    }        
        

export default Location