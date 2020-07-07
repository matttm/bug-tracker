import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class GenericModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} animation={false}>
                <React.Fragment>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </React.Fragment>
            </Modal>
        );
    }
}