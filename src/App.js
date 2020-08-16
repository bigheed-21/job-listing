import React, { Component } from 'react';
import JobListings from './components/JobListing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Job Listing</h1>
        <JobListings />
      </div>
    );
  }
}

export default App;
