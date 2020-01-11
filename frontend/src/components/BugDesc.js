import React from 'react';
import ReactDOM from 'react-dom';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
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
            </React.Fragment>
        );
        return ReactDOM.createPortal(form, this.el);
    }
}
