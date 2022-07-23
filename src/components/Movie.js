import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
// import axios from 'axios';

class Movie extends Component {


  // send request to get weather values
  
  render() {
    let movieArray= this.props.movies.map(show => {
      return(
        <ListGroup>
        <ListGroup.Item>{show.title}</ListGroup.Item>
        <ListGroup.Item>{show.overview}</ListGroup.Item>
        </ListGroup>
      )
    })
    console.log(this.state);
    return(
      <>
      <h1>Movie component</h1>
      {movieArray}
      </>
    )
  }
}
export default Movie