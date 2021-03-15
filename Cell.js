import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    };

    
 
    

    render() {
        
        return (
            <input
                style={{width: '80px', height: '80px', backgroundColor:this.props.colors}}
                type="button"
                value={this.props.char}
                onClick={() => this.props.onClick()}
                disabled={this.props.char !== ' '}
            />
        )
    }
}

export default Cell;