import React from 'react';
import ReactDOM from 'react-dom'

export default class BugForm extends React.Component {
    constructor(props) {
        super(props);
        this.portalRoot = document.getElementById("portal");
        this.el = document.createElement("div");
        this.el.className = "form";
    }

    componentDidMount() {
        this.portalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.portalRoot.removeChild(this.el);
    }

    render() {
        let form = (
            <React.Fragment>
                {/* <input className="form-field" type="text" value={this.state.title} onChange={this.onChangeText} /> */}
                {/* <input className="form-field" type="text" value={this.state.priority} onChange={this.onChangeText} /> */}
                {/* <textarea className="form-field" type="text" value={this.state.desc} onChange={this.onChangeText} /> */}
                <button
                    className="form-close"
                    onClick={this.props.toggleForm}
                >Close</button>
            </React.Fragment>
        );
        return ReactDOM.createPortal(form, this.el);
    }
}