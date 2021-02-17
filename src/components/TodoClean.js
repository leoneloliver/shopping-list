import React from 'react';

const TodoClean = ({removeAll}) => {
   
    return (
        <div className="btn-container">
            <button onClick={() => removeAll()} className="btn-clean delete">Clean</button>
        </div>
        
    );
};

export default TodoClean;