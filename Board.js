import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            boardConfig: [ [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
            boardcolor:[ ['', '', ''], ['', '', ''], ['', '', '']],
            turn: 1,
            verdict: 'IN_PROGRESS',
        }
    }

    getGameVerdict(boardConfig) {
        for(let i = 0; i <= 2; i++) {
            if (boardConfig[i][0] != ' ' && boardConfig[i][0] == boardConfig[i][1]
                && boardConfig[i][1] == boardConfig[i][2]) {
                    let newcolor=this.state.boardcolor;
                    let player="";
                    let color="";
                    if(boardConfig[i][0] == 'X'){
                         player= 'PLAYER_1';
                         color='red';
                    } 
                    else{
                         player= 'PLAYER_2';
                         color="yellow";
                    }  
                    newcolor[i][0]=color;
                    newcolor[i][1]=color;
                    newcolor[i][2]=color;
                    return {play:player,color:newcolor}
                }
        }
        for(let i = 0; i <= 2; i++) {
            if (boardConfig[0][i] != ' ' && boardConfig[0][i] == boardConfig[1][i]
                && boardConfig[1][i] == boardConfig[2][i]) {
                    let newcolor=this.state.boardcolor;
                    let player="";
                    let color="";
                    if(boardConfig[0][i] == 'X'){
                         player= 'PLAYER_1';
                         color='red';
                    } 
                    else{
                         player= 'PLAYER_2';
                         color="yellow";
                    }  
                    newcolor[0][i]=color;
                    newcolor[1][i]=color;
                    newcolor[2][i]=color;
                    return  {play:player,color:newcolor}
                }
        }
        if (boardConfig[0][0] != ' ' && boardConfig[0][0] == boardConfig[1][1]
            && boardConfig[1][1] == boardConfig[2][2]) {
                let newcolor=this.state.boardcolor;
                    let player="";
                    let color="";
                    if(boardConfig[0][0] == 'X'){
                         player= 'PLAYER_1';
                         color='red';
                    } 
                    else{
                         player= 'PLAYER_2';
                         color="yellow";
                    }  
                    newcolor[0][0]=color;
                    newcolor[1][1]=color;
                    newcolor[2][2]=color;
                    return  {play:player,color:newcolor}
        }
        if (boardConfig[0][2] != ' ' && boardConfig[0][2] == boardConfig[1][1]
            && boardConfig[1][1] == boardConfig[2][0]) {
                let newcolor=this.state.boardcolor;
                    let player="";
                    let color="";
                    if(boardConfig[0][2] == 'X'){
                         player= 'PLAYER_1';
                         color='red';
                    } 
                    else{
                         player= 'PLAYER_2';
                         color="yellow";
                    }  
                    newcolor[0][2]=color;
                    newcolor[1][1]=color;
                    newcolor[2][0]=color;
                    return  {play:player,color:newcolor}
        }

        let noOfFilledCells = 0;
        for(let i = 0; i<= 2; i++) {
            for(let j = 0; j <= 2; j++) {
                if (boardConfig[i][j] != ' ') {
                    noOfFilledCells++;
                }
            }
        }

        if (noOfFilledCells == 9) {
            let newcolor=this.state.boardcolor;
            let player='DRAW';
            return  {play:player,color:newcolor}
        }
        else {
            let newcolor=this.state.boardcolor;
            let player='IN_PROGRESS';
            return  {play:player,color:newcolor}
        }
        
    }

    handleCellClick(row, col) {
        if (this.state.boardConfig[row][col] == ' '
            && this.state.verdict === 'IN_PROGRESS') {
            this.setState(prevState => {
                let char = (prevState.turn == 1 ? 'X' : 'O');
                let newTurn = (prevState.turn == 1 ? 2 : 1);
                prevState.boardConfig[row][col] = char;
                let newBoardConfig = prevState.boardConfig;
                let newVerdict = this.getGameVerdict(newBoardConfig);
                console.log(newVerdict);
                return {
                    turn: newTurn,
                    boardConfig: newBoardConfig,
                    boardcolor:prevState.boardcolor,
                    verdict: newVerdict.play,
                    boardcolor:newVerdict.color
                }
            });
        }
    }

    render() {
        return (
            <div>
                <h4> { `Game verdict so far ${this.state.verdict}`} </h4>
                <h3> {`Turn of Player #${this.state.turn}`} </h3>
                <table>
                    <tr>
                        <td> <Cell
                                char={this.state.boardConfig[0][0]}
                                onClick={() => this.handleCellClick(0, 0)} 
                                colors={this.state.boardcolor[0][0]}
                                />
                        </td>
                        <td> <Cell char={this.state.boardConfig[0][1]} colors={this.state.boardcolor[0][1]} onClick={() => this.handleCellClick(0, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[0][2]} color={this.state.boardcolor[0][2]} onClick={() => this.handleCellClick(0, 2)} /> </td>
                    </tr>
                    <tr>
                        <td> <Cell char={this.state.boardConfig[1][0]} colors={this.state.boardcolor[1][0]} onClick={() => this.handleCellClick(1, 0)} /> </td>
                        <td> <Cell char={this.state.boardConfig[1][1]} colors={this.state.boardcolor[1][1]} onClick={() => this.handleCellClick(1, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[1][2]} colors={this.state.boardcolor[1][2]} onClick={() => this.handleCellClick(1, 2)} /> </td>
                    </tr>
                    <tr>
                        <td> <Cell char={this.state.boardConfig[2][0]} colors={this.state.boardcolor[2][0]} onClick={() => this.handleCellClick(2, 0)} /> </td>
                        <td> <Cell char={this.state.boardConfig[2][1]} colors={this.state.boardcolor[2][1]} onClick={() => this.handleCellClick(2, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[2][2]} colors={this.state.boardcolor[2][2]} onClick={() => this.handleCellClick(2, 2)} /> </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Board;