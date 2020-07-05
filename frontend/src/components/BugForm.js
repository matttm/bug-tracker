import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class BugForm extends React.Component {
    static defaultProps = {
        name: "Name of the problem",
        desc: "Description",
        priority: 1,
        reporter: "Reporter"
    };
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            desc: this.props.desc,
            priority: this.props.priority,
            reporter: this.props.reporter
        };
    }

    _handleSubmit = () => {
        this.props.handleSubmit({...this.state});
        this.props.onHide();
    }

    onChangeText = (e) => {
        let newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} animation={true}>
            <React.Fragment>
                <Modal.Header>
                    <Modal.Title>Report a Bug</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Control
                        type="text"
		        name="name"
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
		        name="reporter"
                        value={this.state.reporter}
                        onChange={this.onChangeText}
                    />
                    <Form.Control
                        as="textarea"
		        name="desc"
                        value={this.state.desc}
                        onChange={this.onChangeText}
                        rows="7"
                    />
                </Form>
                <Button
                    onClick={this._handleSubmit}
                >Submit</Button>
            </React.Fragment>
            </Modal>
        );
    }
}
