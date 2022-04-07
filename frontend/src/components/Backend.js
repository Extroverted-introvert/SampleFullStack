import React, { Component } from "react";
import axios from "axios";

class Backend extends React.Component {

    state = { details: [], }
    componentDidMount() {
        let data;
        axios.get('http://localhost:8000')
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {console.log(err) })  
    }
    render() {
        return (
            <div>
                <h1>Data returned from server</h1>
                <hr></hr>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                        <div>
                            <h2>{output.employee}</h2>
                            <h3>{output.department}</h3>
                        </div>    
                    </div>
                ))}
            </div>
        )
    }
}

export default Backend