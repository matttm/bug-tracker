import React from 'react';
import '../BugTracker.css';
import BugManager from './BugManager';
import axios from 'axios';

export default class BugTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugList: [],
      intervalIsSet: false
    }
  }

  componentDidMount() {
    this.syncBugList();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.syncBugList, 2000);
      this.setState( {intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState( {intervalIsSet: false });
    }
  }

  updateBug = (bug) => {
    axios.post(`api/bugs/${bug.id}`, {
      bug
    })
    .then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  deleteBug = (id) => {
    axios.delete(`api/bugs/${id}`, {
	    params: { id }
    })
    .then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  createBug = (bug) => {
    axios.post("api/bugs", {
      bug
    })
    .then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  syncBugList = () => {
    axios.get("api/bugs")
        .then((res) => {
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
            handleSubmit={this.createBug}
	    updateBug={this.updateBug}
            deleteBug={this.deleteBug}
          />
        </div>
      );
    }
}
