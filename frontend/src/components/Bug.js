import React from 'react';

export default class Bug extends React.Component {
    render() {
        return (
            <div className="bug">
                <div className='bugInfo'>
                    <div className='bugName'>
                        {this.props.name}
                    </div>
                    <div className="bugDate">
                        {this.props.date}
                    </div>
                </div>
            </div>
        );
    }
}