import React, {Component} from 'react'
import Review from './Review'
class Movie extends/* <= brings everything in from react */ Component {

    render(){
        return (
            <div>  <h1>Breakin 2: Electric Boogaloo</h1>
            
                        <div>Rating: {this.props.rating}</div>
                        <p>Description: {this.props.description} .</p> 
                        <Review />
                        </div>
        );
    }
}

export default Movie  //export to react, reference what your exporting
