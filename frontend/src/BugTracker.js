import React from 'react';
import BugList from './BugList';
import { getTestBugs } from './TestData';

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
        <div className="App">
          <h2>Bug Tracker</h2>
          <BugList bugList={this.state.bugList} />
        </div>
      );
    }
}
