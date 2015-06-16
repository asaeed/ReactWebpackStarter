import React from 'react';

class TextField extends React.Component {
    render() {
        return (
            <p>Data: {this.props.data}</p>
        );
    }
}

export default TextField;