import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

class TodoList extends Component {
    render() {
        return (
            <ul>
                <TodoItem text="Quad twist" />
                <TodoItem text="Triple axel" />
                <TodoItem text="QUINT LOOP BABY" />
                <TodoItem text="Fall on my butt" />
            </ul>
        );
    }
}

export default TodoList;