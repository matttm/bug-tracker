import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import { sortFunctions } from '../helpers';
import BugList from './BugList';
import BugForm from './BugForm';

export default class BugManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bugList: [],
            formIsVisible: false
        };
    }

    componentWillReceiveProps(props) {
        this.setState({bugList: [ ...props.bugList ]});
    }
    
    sortArray = (f) => this.setState( prevState => ({bugList: prevState.bugList.sort(f) }) );
    
    openForm = () => this.setState({ formIsVisible: true });
    closeForm = () => this.setState({ formIsVisible: false });

    render() {
        return (
            <>
            <div className="bug-manager-toolbar">
                <Button
                    size="sm"
                    onClick={this.openForm}>Report Bug
                </Button>
                <DropdownButton
                    size="sm"
                    id="dropdown-item-button"
                    title="Filter"
                >
                    <Dropdown.Item
                        as="button" onClick={() => this.sortArray(sortFunctions.id)}
                    >ID</Dropdown.Item>
                    <Dropdown.Item
                        as="button" onClick={() => this.sortArray(sortFunctions.name)}
                    >Name</Dropdown.Item>
                    <Dropdown.Item
                        as="button" onClick={() => this.sortArray(sortFunctions.date)}
                    >Date</Dropdown.Item>
                    <Dropdown.Item
                        as="button" onClick={() => this.sortArray(sortFunctions.priority)}
                    >Priority</Dropdown.Item>
                </DropdownButton>
            </div>
            <BugList
                 bugList={this.state.bugList}
                 updateBug={this.props.updateBug}
                 deleteBug={this.props.deleteBug}
            />
            <BugForm
                show={this.state.formIsVisible}
                onHide={this.closeForm}
                toggleForm={this.toggleFormVisibility}
                handleSubmit={this.props.handleSubmit}
            />
            </>
        );
    }
}
