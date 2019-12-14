import React from 'react';
import ReactDOM from 'react-dom';
import BugForm from './BugForm';

export default class BugButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsVisible: false
        }
        this.root = document.getElementById('root');
    }

    toggleFormVisibility = () => {
        this.setState({
            formIsVisible: !this.state.formIsVisible
        })
    }

    render() {
        let isVisible = this.state.formIsVisible;
       return (
           <div class="FormContainer">
                <button onClick={this.toggleFormVisibility} >Create Bug</button>
                {
                    isVisible ?
                        <BugForm toggleForm={this.toggleFormVisibility} />
                        : null
                }
            </div>
       );
    }
}