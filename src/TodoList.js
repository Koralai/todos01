import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

class TodoList extends Component {
    render() {
        return (
            <ul>
                { this.props.items.map(item => <TodoItem text={item.text} />) }
            </ul>
        );
    }
}

export default TodoList;