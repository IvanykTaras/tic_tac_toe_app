import React, { Component } from "react";

//Rules for gameOver
import { TypeForRules, rules } from "../rulesForEndGame";

const NUMBER_OF_CELLS: number = 9;

interface Props {}

interface State {
  cells: Array<Cell>;
  switchSymbol: boolean;
  gameOver: boolean;
  countOfMoves: number;
}

type StrNull = string | null;
type Cell = [StrNull, StrNull, StrNull];

export default class PlayGround extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cells: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      switchSymbol: true,
      countOfMoves: 0,
      gameOver: false,
    };
  }

  handleMove = (
    row: any,
    cell: any,
    e?: React.MouseEvent<HTMLDivElement>
  ): void => {
    const newCells: Array<Cell> = this.state.cells;

    // change if current cells = null
    // and status of gameOver is true
    if (newCells[row][cell] === null && !this.state.gameOver) {
      newCells[row][cell] = this.state.switchSymbol ? "x" : "o";
      this.setState(({ switchSymbol, countOfMoves }) => ({
        cells: newCells,
        switchSymbol: !switchSymbol,
        countOfMoves: countOfMoves + 1,
      }));
    }
  };

  //GameOver function
  gameOver = (): void => {
    //cells are full
    const countNullCells = this.state.cells.map(
      (row) => row.filter((cell) => cell === null).length
    );

    const cellsAreFull: boolean =
      countNullCells.filter((zeros) => zeros === 0).length === 3;

    if (cellsAreFull) {
      this.setState({
        gameOver: true,
      });
    }

    rules.map((arr, index) => {
      //count rows
        const x1: number = arr[0][1];
        const y1: number = arr[0][0];

        const x2: number = arr[1][1];
        const y2: number = arr[1][0];

        const x3: number = arr[2][1];
        const y3: number = arr[2][0];
        

        if(this.state.cells[y1][x1] === this.state.cells[y2][x2] && this.state.cells[y1][x1] === this.state.cells[y3][x3] ){
          if( this.state.cells[y1][x1] !== null){
            this.setState({
              gameOver: true,
            }); 
          }
        }
      
      

    });

    console.log(this.state.gameOver);
  };

  clear = (): void => {
    this.setState({
      gameOver: false,
      cells: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    });
    
  };

  render() {
    console.log();
    return (
      <>
        {/* Map of rows */}

        {this.state.gameOver ? (
          <><button onClick={this.clear}>Start</button></> 
        ) : null}

        {this.state.cells.map((row, index) => {
          const rowIndex = index;
          return (
            <div key={index} className="row">
              {/* Map of cells */}
              {row.map((cell, index) => {
                const cellIndex = index;
                return (
                  <div
                    key={index}
                    className="cell"
                    onClick={() => this.handleMove(rowIndex, cellIndex)}
                    dangerouslySetInnerHTML={{ __html: cell ? cell : "" }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!prevState.gameOver) {
      this.gameOver();
      console.log("did update");
    }
  }
}
