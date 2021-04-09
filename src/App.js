//import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count+1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count-1 }));
  };
  
  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>I'm a class</h1>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;