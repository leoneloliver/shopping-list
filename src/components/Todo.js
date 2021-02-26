import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{
                textDecoration: todo.isCompleted ? "line-through" : null,
                color: todo.isCompleted ? "#ff8e8e" : "#b3b3b3",
                background: todo.isCompleted ? '#4e4e4e' : null,
                boxShadow: todo.isCompleted ? null : '1px 2px 1px 0px #1e1e1e'
            }}
            >
            {/* {index + 1} - {todo.text*/}
            {todo.text}
            <div className="container-btn">
                <button
                onClick={() => completeTodo(index)}
                className="complete"
                style={{
                    backgroundColor: todo.isCompleted ? "#434141" : ""
                }}
                >
                {todo.isCompleted ? " ✓ Done " : "Pending" }
                </button>
                <button onClick={() => removeTodo(index)} className="delete">
                x
                </button>
            </div>
        </div>
    );
};

export default Todo;