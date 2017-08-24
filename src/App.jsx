import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button } from 'react-bootstrap';


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
                    <Clock deadline={this.state.deadline} />
                    <Form inline>
                        <FormControl
                            className="Deadline-input"
                            onChange={event => this.setState({newDeadline: event.target.value})}
                            placeholder="new date" type="text" name="" id=""/>
                        <Button onClick={() => this.changeDeadline()}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default App;