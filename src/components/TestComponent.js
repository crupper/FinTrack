import React, { Component } from 'react';
import axios from "axios";

class TestComponent extends Component {
    handleClick() {
        console.log('This button is decommisioned');
        

        axios.post("/get_token", {
            "accepts":"application/json",
            public_token: 'this is the token12312'
          });

        
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me
            </button>
        );
    }

}

export default TestComponent;