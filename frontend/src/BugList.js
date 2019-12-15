import React from 'react';
import Bug from './Bug';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";

export default class BugList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formattedBugList = this.props.bugList.map( bug => {
            return (
                <li
                    key={bug.id.toString()}
                    className="bugItem"
                >
                    <Bug
                        name={bug.name}
                        desc={bug.desc}
                        priority={bug.priority}
                        date={bug.date}
                        reporter={bug.reporter}
                    />
                </li>
            );
        });

        return (
            <>
            <DropdownButton id="dropdown-item-button" title="Filter">
                <Dropdown.Item as="button" >Name</Dropdown.Item>
                <Dropdown.Item as="button" >Date</Dropdown.Item>
                <Dropdown.Item as="button" >Priority</Dropdown.Item>
            </DropdownButton>
            <ul>
                {formattedBugList}
            </ul>
            </>
        );
    }
}