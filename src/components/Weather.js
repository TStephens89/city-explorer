import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
// import axios from 'axios';

class Weather extends Component {


  // send request to get weather values
  
  render() {
    let weatherArray= this.props.weather.map(day => {
      return(
        <ListGroup>
        <ListGroup.Item>{day.date}</ListGroup.Item>
        <ListGroup.Item>{day.description}</ListGroup.Item>
        </ListGroup>
      )
    })
    console.log(this.state);
    return(
      <>
      <h1>Weather Component</h1>
      {weatherArray}
      </>
    )
  }
}

export default Weather;