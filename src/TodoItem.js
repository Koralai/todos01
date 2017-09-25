import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        return (
            <li><span className="bullet-text">{this.props.text}</span></li>
        );
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default TodoItem;