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

  handleSubmit = (bug) => {
    this.setState({bugList: [...this.state.bugList, bug] });
  }

  render() {
    return (
        <div className="container">
          <h2>Bug Tracker</h2>
          <BugManager
            bugList={this.state.bugList}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }
}
