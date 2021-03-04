import React from 'react';
import './Like.css'

class Like extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div class="row justify-content-center w-100">
        <button className="btn countUp mr-3" onClick={this.increment}>
            <i class="fa fa-thumbs-up"></i>
        </button>

        <div>{this.state.score}</div>


        <button className="btn countDown ml-3" onClick={this.decrement}>
            <i class="fa fa-thumbs-down"></i>
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }
}

export default Like