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
    const id = this.state.bugList.length + 1;
    const date = new Date().toString();
    this.setState({bugList: [...this.state.bugList, {id, date, ...bug}] });
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
