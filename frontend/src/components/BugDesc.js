import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
      return (
          <Modal show={this.props.show} onHide={this.props.onHide} animation={false}>
            <React.Fragment>
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
            </React.Fragment>
        </Modal>
        );
    }
}
