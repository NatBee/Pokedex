import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { getTypes } from '../../helper';

class App extends Component {

  getPokeTypes = () => {
    getTypes()
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer getPokeTypes={this.getPokeTypes}/>
      </div>
    );
  }
}


export default App;
