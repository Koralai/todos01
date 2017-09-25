import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
