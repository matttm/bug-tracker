import React from 'react';
import ReactDOM from 'react-dom';

export default class BugButton extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.getElementById('root');
    }

    openForm = () => {
        return 0;
    }

    render() {
       return (
            <button onClick={this.openForm} >Create Bug</button>
       );
    }
}