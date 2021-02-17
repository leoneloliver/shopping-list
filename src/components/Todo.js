import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{
                textDecoration: todo.isCompleted ? "line-through" : null,
                color: todo.isCompleted ? "red" : "black"
            }}
            >
            {/* {index + 1} - {todo.text*/}
            {todo.text}
            <div>
                <button
                onClick={() => completeTodo(index)}
                className="complete"
                style={{
                    backgroundColor: todo.isCompleted ? "#b6beb6" : ""
                }}
                >
                Complete
                </button>
                <button onClick={() => removeTodo(index)} className="delete">
                x
                </button>
            </div>
        </div>
    );
};

export default Todo;