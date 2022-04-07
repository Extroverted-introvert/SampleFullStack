import React from "react";

// Class based

class HelloClass extends React.Component {
    render() {
        return (
            <h1>Hello there {this.props.name}</h1>
        )
    }
}

export default HelloClass
