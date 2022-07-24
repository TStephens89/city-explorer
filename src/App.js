import React from 'react';
import axios from 'axios';
// import { Modal, Button,} from 'react-bootstrap';
import CityModal from './CityModal.js';
import Weather from './components/Weather/Weather.js';
import Movie from './components/movie/Movie.js';
import WeatherDay from './components/Weather/WeatherDay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      show: false,
      displayMap: '',
      errorPresent: false,
      weather: [],
      movies: []

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
  getMovies = async () => {
    let url = `${process.env.REACT_APP_SERVER}/movies?query=${this.state.searchQuery}`;
console.log(url)
    try {

      let response = await axios.get(url);
      console.log(response.data)
      this.setState({
        movies: response.data,
      });
    } catch (e) {
      this.setState({ error: e });
    }

  }
  handleClick = (e) => {
    this.getLocation()
    this.getWeather()
    this.getMovies()
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
        {this.state.weather.length !== 0 &&
        <Weather
        weather={this.state.weather}/>}
        {this.state.movies.length !== 0 &&
        <Movie
        movies={this.state.movies}/>}
        {this.state.weather.length !== 0 &&
        <WeatherDay
        dailyWeather={this.state.weather}/>}
      </>
    )
  }
}

export default App;