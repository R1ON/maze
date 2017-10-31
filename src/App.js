import React, { Component } from 'react';
import { MazeGenerator, MazeSolver } from 'maze-es6-solver';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      mazeGenerator: new MazeGenerator(5, 5).run(),
      coordsUser: [0, 1],
      win: false
    }
  }


  componentDidMount() {
    document.body.onkeydown = a => {
      const key = a.keyCode;
      const { mazeGenerator, coordsUser } = this.state;

      mazeGenerator[coordsUser[0]][coordsUser[1]] = " ";

      if ( a.keyCode === 38 && mazeGenerator[coordsUser[0]-1][coordsUser[1]] !== "=") { //top
        mazeGenerator[coordsUser[0]-1][coordsUser[1]] = "E";

        this.setState({
          coordsUser: [coordsUser[0]-1, coordsUser[1]]
        })
      }

      if ( a.keyCode === 40 && mazeGenerator[coordsUser[0]+1][coordsUser[1]] !== "=") { //down
        mazeGenerator[coordsUser[0]+1][coordsUser[1]] = "E";

        this.setState({
          coordsUser: [coordsUser[0]+1, coordsUser[1]]
        })
      }

      if ( a.keyCode === 37 && mazeGenerator[coordsUser[0]][coordsUser[1]-1] !== "=") { //left
        mazeGenerator[coordsUser[0]][coordsUser[1]-1] = "E";

        this.setState({
          coordsUser: [coordsUser[0], coordsUser[1]-1]
        })
      }

      if ( a.keyCode === 39 && mazeGenerator[coordsUser[0]][coordsUser[1]+1] !== "=") { //right
        if (mazeGenerator[coordsUser[0]][coordsUser[1]+1] === "G")
          this.setState({ win: true });


        mazeGenerator[coordsUser[0]][coordsUser[1]+1] = "E";

        this.setState({
          coordsUser: [coordsUser[0], coordsUser[1]+1]
        })
      }
    }
  }

  render() {
    if(this.state.win)
      return <div>Игра пройдена, ты молодец!</div>

    return (
      <div className="App">
        {this.state.mazeGenerator.map((i, indexI) => {
          return (
            <div key={indexI}>
              {i.map((j, indexJ) => {
                  switch (j) {
                    case " ": return <span key={indexJ} className="space"></span>
                    case "=": return <span key={indexJ} className="wall"></span>
                    case "E": return <span key={indexJ} className="user"></span>
                    case "G": return <span key={indexJ} className="exit"></span>
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
