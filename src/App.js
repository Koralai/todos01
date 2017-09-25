import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('/todos')
      .then( response => response.json() )
      .then( data => this.setState({ data }) );
  }

  render() {
    return (
      <div className="content">
        <Header />
        {
          (this.state.data.length > 0) ? 
            <TodoList items={this.state.data} /> : 
            <div><p>Loading...</p></div>
        }
      </div>
    );
  }
}

export default App;
