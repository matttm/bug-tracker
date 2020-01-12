import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
        // this.portalRoot = document.getElementById("portal");
        // this.el = document.createElement("div");
        // this.el.className = "portal";
    }    

    render() {
      return (
            <React.Fragment>
                 <div className="form-close">
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={this.props.toggleForm}>
                    </FontAwesomeIcon>
                    {this.props.name}
                    {this.props.date}
                    Reporter: {this.props.reporter}
                    {this.props.desc}
                    Priority: {this.props.priority}

                </div>
            </React.Fragment>
        );
    }
}
