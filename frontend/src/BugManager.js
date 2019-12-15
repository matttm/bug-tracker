import React from 'react';
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

    toggleFormVisibility = () => {
        this.setState({
            formIsVisible: !this.state.formIsVisible
        })
    }

    render() {
        return (
            <>
            <button onClick={this.toggleFormVisibility} >Create Bug</button>
            <DropdownButton id="dropdown-item-button" title="Filter">
                <Dropdown.Item as="button" >Name</Dropdown.Item>
                <Dropdown.Item as="button" >Date</Dropdown.Item>
                <Dropdown.Item as="button" >Priority</Dropdown.Item>
            </DropdownButton>
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