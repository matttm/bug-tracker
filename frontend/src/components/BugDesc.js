import React from 'react';
import Container from 'react-bootstrap/Container';
import GenericModal from './GenericModal';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
      return (
        <GenericModal
          show={this.props.show}
          onHide={this.props.onHide}
          title={this.props.name}
        >
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
        </GenericModal>
        );
    }
}
