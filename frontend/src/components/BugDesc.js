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

    // componentDidMount() {
    //     this.portalRoot.appendChild(this.el);
    // }

    // componentWillUnmount() {
    //     this.portalRoot.removeChild(this.el);
    // }
    

    render() {
      return (
            <React.Fragment>
                 <div className="form-close">
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={this.props.toggleForm}>
                    </FontAwesomeIcon>
                    Testing
                </div>
            </React.Fragment>
        );
        // return ReactDOM.createPortal(form, this.el);
    }
}
