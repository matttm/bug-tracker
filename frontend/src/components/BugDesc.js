import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
      return (
          <Modal show={this.props.show} onHide={this.props.onHide} animation={false}>
            <React.Fragment>
                <div className="form-close">
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={this.props.toggleForm}>
                    </FontAwesomeIcon>
                    <Modal.Header>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <div className="flex-grid">
                                <div className="col">
                                    Priority: {this.props.priority}
                                </div>
                                <div className="col">
                                    Reporter: {this.props.reporter}
                                </div>
                                <div className="col">
                                    Date: {this.props.date}
                                </div>
                                <div className="col">
                                    {this.props.desc}
                                </div>
                            </div>
                        </Container>
                    </Modal.Body>
                </div>
            </React.Fragment>
        </Modal>
        );
    }
}
