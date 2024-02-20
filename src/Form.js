import React from 'react';

function Form({ handleAddTodo, todoNameRef }) {
  return (
    <div className="Body">
      <input ref={todoNameRef} type="text"></input>
      <br></br>
      <button onClick={handleAddTodo}>Submit</button>
    </div>
  );
}

export default Form;
