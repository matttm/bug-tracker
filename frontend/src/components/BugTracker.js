import React from 'react';
import '../BugTracker.css';
import BugManager from './BugManager';
import axios from 'axios';

export default class BugTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugList: []
    }
  }

  componentDidMount() {
    this.syncBugList();
  }

  handleSubmit = (bug) => {
    const id = this.state.bugList.length + 1;
    const date = new Date().toString();
    this.setState({bugList: [...this.state.bugList, {id, date, ...bug}] });
  }

  syncBugList = () => {
    axios.get("api/bugs")
        .then((res) => {
	    console.log(res);
	    this.setState({ bugList: res.data });
	})
        .catch((err) => console.log(err));
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
