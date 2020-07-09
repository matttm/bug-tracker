import React from 'react';
import BugDesc from './BugDesc';

export default class Bug extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleOpen = () => this.setState({show: true });
    handleClose = () => this.setState({show: false });

    render() {
        return (
            <>
                <div className="bug" onClick={this.handleOpen}>
                    <div className='bug-info'>
                        <div className='bug-name'>
                            {this.props.name}
                        </div>
                        <div className="bug-date">
                            {this.props.date}
                        </div>
                    </div>
                </div>
                    <BugDesc
                        show={this.state.show} onHide={this.handleClose}
                        id={this.props.id}
                        name={this.props.name}
                        desc={this.props.desc}
                        priority={this.props.priority}
                        date={this.props.date}
                        reporter={this.props.reporter}
			updateBug={this.props.updateBug}
                        deleteBug={this.props.deleteBug}
                    />
            </>
        );
    }
}
