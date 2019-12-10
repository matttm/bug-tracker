import React from 'react';

export default class Bug extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}