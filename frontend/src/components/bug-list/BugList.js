import React from 'react';
import Bug from '../bug/Bug';

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
                        id={bug.id}
                        name={bug.name}
                        desc={bug.desc}
                        priority={bug.priority}
                        date={bug.date}
                        reporter={bug.reporter}
		        updateBug={this.props.updateBug}
                        deleteBug={this.props.deleteBug}
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
