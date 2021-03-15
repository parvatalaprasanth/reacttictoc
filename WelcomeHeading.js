import React from 'react';

class WelcomeHeading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3> { `Welcome to the counter ${this.props.username}` } </h3>
        );
    }
}

export default WelcomeHeading;

// <WelcomeHeading />