import React from 'react';
import { getTestBugs } from '../TestData';
import '../BugTracker.css';
import BugManager from './BugManager';

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
          <BugManager bugList={this.state.bugList} />
        </div>
      );
    }
}
