import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp'
import todos from './reducers/todos';




let store = createStore(todos);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
