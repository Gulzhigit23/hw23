import React from 'react'

function TodoField({handleSubmit, text, handleInput}) {

  return (
    <div >
        <input
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmit} >add todos</button>
      </div>
  )
}

export default TodoField
