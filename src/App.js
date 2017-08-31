import React, { Component } from 'react';
import { createStore } from 'redux';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from 'actions/todos';

import todos from 'reducers/todos';
import logo from './logo.svg';
import './App.css';


let store = createStore(todos);

// Logging initial state
console.log(store.getState());

// Every state change, log it
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(addTodo('Hello nuworks!'));
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
