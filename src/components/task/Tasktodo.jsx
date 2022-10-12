import React from 'react'
import { useState } from 'react'

const Tasktodo = () => {
  const [input, setInput] = useState('');
  const [todoInput, setTodoInput] = useState([])

  const addData = (e) => {
    e.preventDefault();
    if (!input) {
    } else {
      setInput('')
      setTodoInput([...todoInput, input])
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    const deleteItem = todoInput.filter((item, index) => {
      return index !== id;
    })
    console.log("deleteItem", deleteItem);
    setTodoInput(deleteItem)
  }

  const handleUpdate = (id) => {
    console.log("edit mode active");
    const todoItems = [...todoInput]
    console.log("todoItems>>>>",todoItems);
    const updatingValue = todoItems[id]
    console.log("updateingValue>>>",updatingValue);
    // let updatedValue = prompt("Update?",updatingValue)
    let updatedValue = prompt(`Update? ${updatingValue}`)
    console.log("updatedValue>>>",updatedValue);
    todoItems.splice(id, 1, updatedValue)
    setTodoInput(todoItems)
  }

  return (
    <div className='text-center mt-5 '>
          <h2>TODO APP </h2>
      <form className="text-center mt-3 d-flex">
        <div className="w-100">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="border border-1 rounded w-25 p-2 bg-light" placeholder="Task to be done..." aria-label="Task to be done..." />
          <button onClick={addData} type='submit' className='border border-1 rounded p-2 btn-secondary'>ADD</button>
        </div>
      </form>
      <div className="text-center mt-5">
        <div >
          <h2>TODO LIST </h2>
        </div>
        {
          todoInput.map((item, index) => {
            return (
              <div key={index} className="w-100 text-center d-flex justify-content-center ">
                  <div className="w-25 border border-1 rounded p-1 mt-2 bg-light ">
                  {item}
                  </div>
                <div>
                  <button className='border border-1 rounded p-1 btn-danger mt-2' onClick={() => handleDelete(index)}>Delete</button>
                  <button className='border border-1 rounded p-1 btn btn-success'onClick ={() => handleUpdate(index)}>Update</button>
                </div>
              </div>
            )
          })
        }
        <div className='mt-5'>
          {`Total Item Of Todo's List ${todoInput.length}`}
        </div>
      </div>
    </div>
  )
}

export default Tasktodo