import React from 'react';
import axios from 'axios';
// import { Modal, Button,} from 'react-bootstrap';
import CityModal from './CityModal.js';
import Weather from './components/weather.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      show: false,
      displayMap: '',
      errorPresent: false,
      weather: null

    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data)
    this.setState({
      location: res.data[0],
      show: true,
      displayMap: true
    });
  }
  handleClose = () => this.setState({ show: false });

  getWeather = async () => {
    let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}`;

    try {

      let response = await axios.get(url);
      this.setState({
        weather: response.data,
      });

    } catch (e) {
      this.setState({ error: e });
    }

  }
  handleClick = (e) => {
    this.getLocation()
    this.getWeather()
  }
  render() {
    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.handleClick}>Explore!</button>

        <CityModal
          location={this.state.location}
          handleClose={this.handleClose}
          showModal={this.state.show}
          displayMap={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`}
        />
        {this.state.weather &&
        <Weather
        weather={this.state.weather}/>}
      </>
    )
  }
}

export default App;