import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }

    changeDeadline() {
        //console.log('state', this.state);
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <Clock />
                    <div>
                        <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" type="text" name="" id=""/>
                        <button onClick={() => this.changeDeadline()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;