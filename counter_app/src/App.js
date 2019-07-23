import React, {Fragment, Component} from 'react';

const Header = () => {
  return (
    <header>
      <h1>
        Click counter!
      </h1>
    </header>
  );
};
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  };

  handleAddClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  handleSubtractClick = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  };
  render(){
    return (
    <div>
      <button onClick={this.handleAddClick}>Add a click: '+'' </button>
      <p> Counter: {this.state.count}</p>
      <button onClick={this.handleSubtractClick}>Subtract a click: '-' </button>
    </div>
    )
  }
}

function App() {
  return <Fragment>
      <Header />
\      <Counter />
      </Fragment>
}

export default App;