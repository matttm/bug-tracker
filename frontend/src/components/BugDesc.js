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
                            <Row className="show-grid">
                                Priority: {this.props.priority}
                                Reporter: {this.props.reporter}
                            </Row>     
                            Date: {this.props.date}
                        </Container>

                        {this.props.desc}
x                    </Modal.Body>
                </div>
            </React.Fragment>
        </Modal>
        );
    }
}
