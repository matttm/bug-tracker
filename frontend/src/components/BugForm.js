import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class BugForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Name of the problem",
            desc: "Description",
            priority: 1,
            reporter: "Reporter"
        };
        this.portalRoot = document.getElementById("portal");
        this.el = document.createElement("div");
        this.el.className = "portal";
    }

    componentDidMount() {
        this.portalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.portalRoot.removeChild(this.el);
    }
    
    _handleSubmit = () => this.props.handleSubmit({...this.state});

    render() {
        let form = (
            <React.Fragment>
                <div className="form">
                    <input className="form-field" type="text" value={this.state.title} onChange={this.onChangeText} />
                    <input className="form-field" type="text" value={this.state.priority} onChange={this.onChangeText} />
                    <textarea className="form-field" type="text" value={this.state.desc} onChange={this.onChangeText} />
                </div>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    onClick={this.props.toggleForm}>
                </FontAwesomeIcon>
                <button
                    onClick={this._handleSubmit}
                >Submit</button>
            </React.Fragment>
        );
        return ReactDOM.createPortal(form, this.el);
    }
}
