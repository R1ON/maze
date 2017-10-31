import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { MazeGenerator, MazeSolver } from 'maze-es6-solver';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      mazeGenerator: new MazeGenerator(10, 10)
    }
  }


  render() {
     const maze = this.state.mazeGenerator.run();

    return (
      <div className="App">
        {maze.map(i => {
          return (
            <div>
              {i.map(j => {
                switch (j) {
                  case " ": return <span className="space"></span>
                  case "=": return <span className="wall"></span>
                  case "E": return <span className="user"></span>
                  case "G": return <span className="exit"></span>
                }
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
