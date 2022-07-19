import React from 'react';
import axios from 'axios';
// import { Modal, Button,} from 'react-bootstrap';
import CityModal from './CityModal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      show: false
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0])
    this.setState({ location: res.data[0], show: true });
  }
  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
    <CityModal 
    location = {this.state.location}
    handleClose= {this.handleClose}
    showModal={this.state.show}
    />
      </>
    )
  }
}

export default App;