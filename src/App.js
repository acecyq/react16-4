import React, { Component } from 'react';
import Test from './Test';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    index : ""
  }

  inputChange = event => {
    this.setState({ index : event.target.value });
  }

  goClick = () => {
    console.log(this.props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <input type="text" onChange={this.inputChange} value={this.state.index}></input>
          <Link to={`/test/${this.state.index}`}>
            <button>Go</button>
          </Link>
          <Route path="/test/:id" component={Test} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
