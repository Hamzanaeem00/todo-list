import { useState } from 'react'
import React from 'react'

const Todo = () => {
  const [input, setInput] = useState('');
  const [todoInput, setTodoInput] = useState([])

  // const date = new Date()
  // console.log(date);
  // const seconds = date.getSeconds()
  // console.log(seconds);

  const addData = (e) => {
    e.preventDefault();
    let List = []

    const id = Math.random()
    List.push({
      Id: id,
      userInput: input
    })
    console.log(List);
    if (!input) {
    } else {
      setInput('')
      setTodoInput([...todoInput, input])

    }
    const duplicateItem = todoInput.find((itemId) => {
      // console.log("Find duplicateItem In List>>>",items);
      return itemId === input
    })
    console.log("duplicateItem>>>", duplicateItem)
    if (duplicateItem === input) {
      alert('duplicate found')
      handleDelete()
    }


    // if(todoInput.find((items)=>items === input)){
    //   alert('value exist')
    // }

  }
  const handleDelete = (item) => {
    console.log("target item>>>>", item);
    const deleteItem = todoInput.filter((itemId) => {
      console.log("items>>>>", itemId);
      return item !== itemId;
    })
    console.log("RemainingItems", deleteItem);
    setTodoInput(deleteItem);
  }

  const handleUpdate = (index) => {
    let start = performance.now();
    // console.log("edit mode active");
    const todoItems = [...todoInput]
    console.log("todoItems>>>>", todoItems);
    const updatingValue = todoItems[index]
    console.log("updateingValue>>>", updatingValue);
    let updatedValue = prompt(`Update? ${updatingValue}`, updatingValue)
    console.log("updatedValue>>>", updatedValue);
    todoItems.splice(index, 1, updatedValue)
    if (!updatedValue || updatedValue === null) {
    }
    else {
      setTodoInput(todoItems)
    }
    let timeTaken = performance.now() - start;
       Math.round(timeTaken)

    console.log("Total time taken : " + timeTaken + " milliseconds");
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
              <div key={item.id} className="w-100 text-center d-flex justify-content-center ">
                <div className="w-25 border border-1 rounded p-1 mt-2 bg-light ">
                  {item}
                </div>
                <div>
                  <button className='border border-1 rounded p-1 btn-danger mt-2' onClick={() => handleDelete(item)}>Delete</button>
                  <button className='border border-1 rounded p-1 btn btn-success' onClick={() => handleUpdate(index)}>Update</button>
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

export default Todo