import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li 
            className="todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input
                type="checkbox" 
                className="toggle"
                {...checkedProp}
                readOnly
                onClick={onToggle}
            />
            <label className="text">
                {text}
            </label>
            <button className="remove" onClick={onRemove}>x</button>
        </li>
    );
};

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem;