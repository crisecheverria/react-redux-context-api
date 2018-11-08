import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';

export const UserContext = React.createContext();

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
    return (
      <div className="container">
        <UserContext.Provider value={this.state.user}>
          <Nav />
          <Body />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
