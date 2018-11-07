import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// We need createStore, and Provider:
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers'

// Create the store with the reducer
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Dispatch an action to set the user
// (since initial state is empty)
store.dispatch({
  type: "SET_USER",
  user: {
    avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
    name: "Dave",
    followers: 1234,
    following: 123
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
