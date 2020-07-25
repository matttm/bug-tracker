import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import GenericModal from '../GenericModal';
import BugForm from '../bug-form/BugForm';

export default class BugDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
    }

    handleEdit = (bug) => {
        this.toggleEdit();
        this.props.updateBug(bug);
    }

    handleDelete = () => {
        this.props.deleteBug(this.props.id);
        // TODO: call something here to close modal
    }
    toggleEdit = () => this.setState({ isEdit: !this.state.isEdit });

    getContent() {
        return this.state.isEdit ? (
            <BugForm
                show={this.state.isEdit}
                onHide={this.toggleEdit}
                handleSubmit={this.handleEdit}
                id={this.props.id}
                name={this.props.name}
                reporter={this.props.reporter}
                desc={this.props.desc}
            />
        ) : (
            <>
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
	    <div className="button-container">
                <Button
                  onClick={this.toggleEdit}>
                    Edit
                </Button>
                <Button variant="danger"
                  onClick={this.handleDelete}>
                    Delete
                </Button>
	    </div>
            </>
        );
    }

    render() {
        let content = this.getContent();
        let title = this.state.isEdit ? "Edit Bug" : this.props.name;
      return (
        <GenericModal
          show={this.props.show}
          onHide={this.props.onHide}
          title={title}
        >
            <Container fluid>
                {content}
            </Container>
        </GenericModal>
        );
    }
}
