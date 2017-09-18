import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const TodoApp = () => {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default TodoApp;
