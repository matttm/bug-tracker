import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import BugList from './BugList';
import BugForm from './BugForm';

export default class BugManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsVisible: false
        }
    }

    sortArray = (f) => this.props.bugList.sort(f);
    
    toggleFormVisibility = () => {
        this.setState({
            formIsVisible: !this.state.formIsVisible
        })
    }

    render() {
        return (
            <>
            <div class="bug-manager-toolbar">
                <Button
                    size="sm"
                    onClick={this.toggleFormVisibility} >Create Bug
                </Button>
                <DropdownButton
                    size="sm"
                    id="dropdown-item-button"
                    title="Filter"
                >
                    <Dropdown.Item as="button" >Name</Dropdown.Item>
                    <Dropdown.Item as="button" >Date</Dropdown.Item>
                    <Dropdown.Item as="button" >Priority</Dropdown.Item>
                </DropdownButton>
            </div>
            <BugList bugList={this.props.bugList} />
                {
                    this.state.formIsVisible ?
                        <BugForm
                            toggleForm={this.toggleFormVisibility}
                        />
                        : null
                }
            </>
        );
    }
}