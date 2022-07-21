import { Component } from 'react';
import axios from 'axios';

class Weather extends Component {


  // send request to get weather values
  
  render() {
    let weatherArray= this.props.weather.map(day => {
      return(
        <>
        <p>{day.date}</p>
        <p>{day.description}</p>
        </>
      )
    })
    console.log(this.state);
    return(
      <>
      {weatherArray}
      </>
    )
  }
}

export default Weather;