import React from 'react';
import Modal from 'react-bootstrap/Modal';
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
                    <div className='bugInfo'>
                        <div className='bugName'>
                            {this.props.name}
                        </div>
                        <div className="bugDate">
                            {this.props.date}
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <BugDesc />
                </Modal>
            </>
        );
    }
}