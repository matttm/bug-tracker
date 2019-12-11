import React from 'react';
import BugList from './BugList';
import { getTestBugs } from './TestData';
import './BugTracker.css';

export default class BugTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugList: []
    }
  }

  componentDidMount() {
    this.setState( { bugList: [...getTestBugs()] } );
  }

  render() {
    return (
        <div className="container">
          <h2>Bug Tracker</h2>
          <BugList bugList={this.state.bugList} />
        </div>
      );
    }
}
