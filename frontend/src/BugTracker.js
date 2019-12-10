import React from 'react';
import BugList from './BugList';

export default class BugTracker extends React.Component {
  render() {
    return (
        <div className="App">
          <h2>Bug Tracker</h2>
          <BugList />
        </div>
      );
    }
}
