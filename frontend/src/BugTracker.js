import React from 'react';
import BugList from './BugList';
import bugs from './TestData';

export default class BugTracker extends React.Component {
  constructor() {
    this.state = {
      bugs
    }
  }
  
  render() {
    return (
        <div className="App">
          <h2>Bug Tracker</h2>
          <BugList />
        </div>
      );
    }
}
