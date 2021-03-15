import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfClicks: 0
        };
    }

    handleClick() {
        this.setState(prevState => {
            return {
                noOfClicks: prevState.noOfClicks + 1
            };
        });
    }

    render() {
        return (
            <div>
                <p> {` No of clicks = ${this.state.noOfClicks}` } </p> 
                <input
                    type="button"
                    value="Click me!"
                    onClick={() => this.handleClick()}
                />
            </div>
        );
    }
}

export default Counter;