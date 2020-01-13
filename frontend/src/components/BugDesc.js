import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';

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
                        {this.props.date}
                        Reporter: {this.props.reporter}
                        {this.props.desc}
                        Priority: {this.props.priority}
                    </Modal.Body>
                </div>
            </React.Fragment>
        </Modal>
        );
    }
}
