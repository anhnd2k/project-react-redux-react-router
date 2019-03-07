import React, { Component } from 'react';
class Massage extends Component {
    render() {
        var { massage } = this.props
        return (
            <h3>
                <span className="badge amber darken-2">{massage}</span>
            </h3>
        );
    }
}

export default Massage;
