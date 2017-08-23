import React, { Component } from 'react';
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
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div>
                        <div className="Clock-days">14 Days</div>
                        <div className="Clock-hours">30 hours</div>
                        <div className="Clock-minutes">15 minutes</div>
                        <div className="Clock-seconds">20 seconds</div>
                    </div>
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