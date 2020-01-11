import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
                <div className="form-close">
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={this.props.toggleForm}>
                    </FontAwesomeIcon>
                </div>
                <Form>
                    <Form.Control
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeText}
                    />
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Control
                        type="text"
                        value={this.state.reporter}
                        onChange={this.onChangeText}
                    />
                    <Form.Control
                        as="textarea"
                        value={this.state.desc}
                        onChange={this.onChangeText}
                        rows="7"
                    />
                </Form>
                <Button
                    onClick={this._handleSubmit}
                >Submit</Button>
            </React.Fragment>
        );
        return ReactDOM.createPortal(form, this.el);
    }
}
