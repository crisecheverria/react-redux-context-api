import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';

class App extends Component {
  state = {
    user: {
      avatar:
        "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
      name: "Dave",
      followers: 1234,
      following: 123
    }
  }
  render() {
    const {user} = this.state;
    return (
      <div className="container">
        <Nav user={user} />
        <Body user={user} />
      </div>
    );
  }
}

export default App;
