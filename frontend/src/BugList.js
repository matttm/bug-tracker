import React from 'react';
import Bug from './Bug';

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
            <ul>
                {formattedBugList}
            </ul>
        );
    }
}